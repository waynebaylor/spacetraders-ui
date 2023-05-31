import { Context, createElement } from '@b9g/crank';
import { dataService } from '../../services';

export async function* AgentInfo(this: Context) {
  const agent = (await dataService.getAgent())!;

  for await ({} of this) {
    yield (
      <div>
        <p>{agent.symbol}</p>
        <p>Account ID: {agent.accountId}</p>
        <p>Headquarters: {agent.headquarters}</p>
        <p>Credits: {agent.credits.toLocaleString()}</p>
      </div>
    );
  }
}
