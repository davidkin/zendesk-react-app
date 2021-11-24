export const ZENDESK_APP_NAME = 'zaf-react-skeleton-app';
export const GENERATE_ZENDESK_URL = (domain: string) =>
  `https://${domain}.zendesk.com/agent/apps/${ZENDESK_APP_NAME}`;
