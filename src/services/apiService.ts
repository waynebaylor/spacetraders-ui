import { AgentsApi, Configuration, DefaultApi } from '../sdk';
import { dataService } from './dataService';

const configuration = new Configuration({
  accessToken: async () => (await dataService.getToken()) || '',
});

export const defaultApi = new DefaultApi();
export const agentsApi = new AgentsApi(configuration);
