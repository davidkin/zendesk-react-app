import React, {useEffect, useContext, useReducer, FC} from 'react';
import {ZAFClientContext} from '@zendesk/sell-zaf-app-toolbox';
import {ZafClientData} from '../types';

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
      return {orderId: action.orderId};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const OrderProvider: FC<OrderProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const data: ZafClientData | undefined = useContext(ZAFClientContext);

  useEffect(() => {
    if (!data?.appParams) {
      return;
    }

    dispatch({type: ACTIONS.SET_ORDER_ID, orderId: data.appParams.orderId});
  }, [data]);

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
