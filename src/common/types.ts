import {Context} from '@zendesk/sell-zaf-app-toolbox';
import {IClientExtended} from './interfaces';

type ZafClientData = Partial<IClientExtended | Context>;

export {IClientExtended, ZafClientData};
