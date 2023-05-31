import { Context, Copy, createElement } from '@b9g/crank';
import { AppScreen } from '../../components';
import { dataService, defaultApi } from '../../services';
import { RegisterAgentForm } from './RegisterAgentForm';
import { Loading } from '../../components/Loading';
import page from 'page';

export async function* IndexScreen(this: Context) {
  this.addEventListener('register-agent', async (event) => {
    const response = await defaultApi.register({
      registerRequest: event.detail,
    });

    await dataService.setToken(response.data.token);
    await dataService.setAgent(response.data.agent);
    await dataService.setContract(response.data.contract);
    await dataService.setFaction(response.data.faction);
    await dataService.setShip(response.data.ship);

    this.refresh();
  });

  for await ({} of this) {
    yield (
      <AppScreen>
        <Loading />
      </AppScreen>
    );

    const token = await dataService.getToken();
    if (token) {
      page('/home');
    } else {
      yield (
        <AppScreen>
          <RegisterAgentForm errors={null} />
        </AppScreen>
      );
    }
  }
}
