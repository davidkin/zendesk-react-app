import {Client, Context} from '@zendesk/sell-zaf-app-toolbox';

interface IContextExtended extends Context {
  appParams?: {
    [key: string]: string;
  };
}

interface IClientExtended extends Client {
  account?: {
    subdomain: string;
  };
  appParams?: {
    [key: string]: string;
  };
}

type ZafClientData = IClientExtended | IContextExtended;

export {IContextExtended, ZafClientData};
