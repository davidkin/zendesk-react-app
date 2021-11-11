import {Client, Context} from '@zendesk/sell-zaf-app-toolbox';

interface IClientExtended extends Client {
  account?: {
    subdomain: string;
  };
  appParams?: {
    [key: string]: string;
  };
}

type ZafClientData =
  | IClientExtended
  | Context
  | {
      account?: {
        subdomain: string;
      };
      appParams?: {
        [key: string]: string;
      };
    };

export {IClientExtended, ZafClientData};
