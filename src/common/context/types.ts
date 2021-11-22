import {Context} from '@zendesk/sell-zaf-app-toolbox';

interface ZafContext extends Context {
  appParams?: {
    [key: string]: string;
  };
}

export {ZafContext};
