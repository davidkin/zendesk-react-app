import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useEffect, useMemo} from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {ZAFClientContextProvider, Client} from '@zendesk/sell-zaf-app-toolbox';
import EntryView from './EntryView';

declare var ZAFClient: {
  init: () => Client;
};

const App = () => {
  const client = useMemo(() => ZAFClient.init(), []);

  useEffect(() => {
    client.context().then((data: any) => console.log('Context:', data));
  }, [client]);

  return (
    <ZAFClientContextProvider value={client}>
      <ThemeProvider>
        <EntryView />
      </ThemeProvider>
    </ZAFClientContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
