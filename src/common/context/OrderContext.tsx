import React, {useEffect, useContext, useReducer} from 'react';
import {Client, ZAFClientContext} from '@zendesk/sell-zaf-app-toolbox';
import {ZafContext} from './types';

export enum ACTIONS {
  SET_ORDER_ID = 'SET_ORDER_ID',
}

type OrderState = {orderId: string};
type OrderProviderProps = {children: React.ReactNode};
type OrderAction = {type: ACTIONS.SET_ORDER_ID; orderId: string};

const OrderStateContext = React.createContext<OrderState | undefined>(
  undefined,
);

const initialState = {
  orderId: '',
};

const orderReducer = (state: OrderState, action: OrderAction) => {
  switch (action.type) {
    case ACTIONS.SET_ORDER_ID: {
      return {orderId: action.orderId };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const OrderProvider = ({children}: OrderProviderProps) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const client: Client | undefined = useContext(ZAFClientContext);

  const fillAppParams = async () => {
    if (!client) {
      return;
    }

    const data: ZafContext = await client.context();

    if (data.appParams) {
      dispatch({type: ACTIONS.SET_ORDER_ID, orderId: data.appParams.orderId});
    }
  };

  useEffect(() => {
    if (!client) {
      return;
    }

    fillAppParams();
  }, []);

  const contextValue: OrderState = {orderId: state.orderId};

  return (
    <OrderStateContext.Provider value={contextValue}>
      {children}
    </OrderStateContext.Provider>
  );
};

const useOrderContext = () => {
  const context = React.useContext(OrderStateContext);

  if (!context) {
    throw new Error('useOrderState must be used within a OrderProvider');
  }

  return context;
};

export {OrderProvider, useOrderContext};
