import { Context, createElement } from '@b9g/crank';
import { dataService } from '../../services';

export async function* FactionInfo(this: Context) {
  const faction = (await dataService.getFaction())!;

  for await ({} of this) {
    yield (
      <div>
        <p>
          ({faction.symbol}) {faction.name}
        </p>
        <p>Description: {faction.description}</p>
        <p>Headquarters: {faction.headquarters}</p>
        <p>
          Traits:
          <ul>
            {faction.traits.map((trait) => (
              <li>
                ({trait.symbol}) {trait.name} - {trait.description}
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  }
}
