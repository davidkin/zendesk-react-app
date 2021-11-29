import {Client} from '@zendesk/sell-zaf-app-toolbox';

export interface IClientExtended extends Client {
  account?: {
    subdomain: string;
  };
  appParams?: {
    [key: string]: string;
  };
}

export interface IOrder {
  cart_id: string;
  billing_address: {
    [key: string]: string;
  };
  date_created: string;
}
