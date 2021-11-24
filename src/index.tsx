import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useMemo, useEffect, useState} from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {ZAFClientContextProvider, Client} from '@zendesk/sell-zaf-app-toolbox';
import HomePage from './pages/Home/HomePage';
import {OrderProvider} from './common/context/OrderContext';
import {IContextExtended, ZafClientData} from './common/context/types';

declare var ZAFClient: {
  init: () => Client;
};

const App = () => {
  const [zafContextData, setZafContextData] = useState<IContextExtended>();
  const client = useMemo(() => ZAFClient.init(), []);

  useEffect(() => {
    client.context().then((data) => setZafContextData(data));
  }, [client]);

  const clientData: ZafClientData = {...client, ...zafContextData};

  return (
    <ZAFClientContextProvider value={clientData}>
      <ThemeProvider>
        <OrderProvider>
          <HomePage />
        </OrderProvider>
      </ThemeProvider>
    </ZAFClientContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
