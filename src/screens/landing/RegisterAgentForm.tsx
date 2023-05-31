import { Context, createElement } from '@b9g/crank';
import { dataService, defaultApi } from '../../services';
import { RegisterRequest, RegisterRequestFactionEnum } from '../../sdk';
import { SpacetradersEvent } from '../../events/SpacetradersEvent';

export class RegisterAgentEvent extends SpacetradersEvent<RegisterRequest> {
  constructor(value: RegisterRequest) {
    super('register-agent', value);
  }
}

declare global {
  module Crank {
    interface EventMap {
      'register-agent': RegisterAgentEvent;
    }
  }
}

interface Props {
  errors: any;
}

export function* RegisterAgentForm(this: Context<Props>, props: Props) {
  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    this.dispatchEvent(
      new RegisterAgentEvent({
        symbol: formData.get('callSign') as string,
        faction: RegisterRequestFactionEnum.Cosmic,
      })
    );
  };

  for ({} of this) {
    yield (
      <form onsubmit={handleSubmit}>
        <fieldset>
          <legend>Register Agent</legend>
          <div class="form-group">
            <label for="callSign">Call Sign</label>
            <input id="callSign" type="text" name="callSign" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
