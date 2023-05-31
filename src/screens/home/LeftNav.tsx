import { Context, createElement } from '@b9g/crank';
import { SpacetradersEvent } from '../../events/SpacetradersEvent';

declare global {
  module Crank {
    interface EventMap {
      'show-agent': SpacetradersEvent<null>;
      'show-faction': SpacetradersEvent<null>;
      'show-ship': SpacetradersEvent<null>;
      'show-contract': SpacetradersEvent<null>;
    }
  }
}

export type LeftNavOptions = 'agent' | 'faction' | 'ship' | 'contract';

function buttonCssClass(label: LeftNavOptions, value: LeftNavOptions) {
  return `btn btn-default ${label === value ? '' : 'btn-ghost'}`;
}

export async function* LeftNav(this: Context) {
  let selected: LeftNavOptions = 'agent';

  const handleClick = (event: Event, label: LeftNavOptions) => {
    (event.target as HTMLElement).blur();

    selected = label;
    this.dispatchEvent(new SpacetradersEvent(`show-${label}`, null));
    this.refresh();
  };

  for await ({} of this) {
    yield (
      <div style="display:flex; flex-direction:column;">
        <button type="button" class={buttonCssClass('agent', selected)} style="margin-bottom:1rem;" onclick={(event: Event) => handleClick(event, 'agent')}>
          Agent
        </button>
        <button type="button" class={buttonCssClass('faction', selected)} style="margin-bottom:1rem;" onclick={(event: Event) => handleClick(event, 'faction')}>
          Faction
        </button>
        <button type="button" class={buttonCssClass('ship', selected)} style="margin-bottom:1rem;" onclick={(event: Event) => handleClick(event, 'ship')}>
          Ship
        </button>
        <button
          type="button"
          class={buttonCssClass('contract', selected)}
          style="margin-bottom:1rem;"
          onclick={(event: Event) => handleClick(event, 'contract')}
        >
          Contract
        </button>
      </div>
    );
  }
}
