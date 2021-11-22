import React, {useEffect, useState, useContext} from 'react';
import {Client, ZAFClientContext} from '@zendesk/sell-zaf-app-toolbox';
import {ZafContext} from './types';

type OrderState = {orderId: string};
type OrderProviderProps = {children: React.ReactNode};

const OrderStateContext = React.createContext<OrderState | undefined>(
  undefined,
);

const OrderProvider = ({children}: OrderProviderProps) => {
  const [orderId, setOrderId] = useState<string>('');
  const client: Client | undefined = useContext(ZAFClientContext);

  const fillAppParams = async () => {
    if (!client) {
      return;
    }

    const data: ZafContext = await client.context();

    if (data.appParams) {
      setOrderId(data.appParams.orderId);
    }
  };

  useEffect(() => {
    if (!client) {
      return;
    }

    fillAppParams();
  }, []);

  const contextValue: OrderState = {orderId};

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
