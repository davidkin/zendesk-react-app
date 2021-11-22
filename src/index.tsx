import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useMemo} from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {ZAFClientContextProvider, Client} from '@zendesk/sell-zaf-app-toolbox';
import HomePage from './pages/Home/HomePage';
import {OrderProvider} from './common/context/OrderContext';

declare var ZAFClient: {
  init: () => Client;
};

const App = () => {
  const client = useMemo(() => ZAFClient.init(), []);

  return (
    <ZAFClientContextProvider value={client}>
      <ThemeProvider>
        <OrderProvider>
          <HomePage />
        </OrderProvider>
      </ThemeProvider>
    </ZAFClientContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
