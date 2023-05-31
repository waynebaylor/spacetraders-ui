import { Context, createElement } from '@b9g/crank';
import { AppScreen } from '../../components';
import { AgentInfo } from './AgentInfo';
import { LeftNav, LeftNavOptions } from './LeftNav';
import { FactionInfo } from './FactionInfo';
import { ShipInfo } from './ShipInfo';
import { ContractInfo } from './ContractInfo';

export async function* HomeScreen(this: Context) {
  let infoPanel: LeftNavOptions = 'agent';

  this.addEventListener('show-agent', () => {
    infoPanel = 'agent';
    this.refresh();
  });

  this.addEventListener('show-faction', () => {
    infoPanel = 'faction';
    this.refresh();
  });

  this.addEventListener('show-ship', () => {
    infoPanel = 'ship';
    this.refresh();
  });

  this.addEventListener('show-contract', () => {
    infoPanel = 'contract';
    this.refresh();
  });

  for await ({} of this) {
    yield (
      <AppScreen>
        <div style="display:flex">
          <div style="border:2px solid black; padding:1rem; margin-right:1rem;">
            <LeftNav />
          </div>
          <div style="flex:1; border:2px solid black; padding:1rem;">
            {
              {
                agent: <AgentInfo />,
                faction: <FactionInfo />,
                ship: <ShipInfo />,
                contract: <ContractInfo />,
              }[infoPanel]
            }
          </div>
        </div>
      </AppScreen>
    );
  }
}
