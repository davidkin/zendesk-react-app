import {Context} from '@zendesk/sell-zaf-app-toolbox';
import {IClientExtended} from './interfaces';

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
