import { Context, createElement } from '@b9g/crank';
import { dataService } from '../../services';

export async function* ShipInfo(this: Context) {
  const ship = (await dataService.getShip())!;

  for await ({} of this) {
    yield (
      <div>
        <p>{ship.symbol}</p>
        <p>
          Registration: ({ship.registration.factionSymbol}) {ship.registration.name} - {ship.registration.role}
        </p>
        <p>
          Cargo: {ship.cargo.units.toLocaleString()}/{ship.cargo.capacity.toLocaleString()}
        </p>
        <p>
          Inventory:
          <ul>
            {ship.cargo.inventory.map((item) => (
              <li>
                {item.units} x ({item.symbol}) {item.name} - {item.description}
              </li>
            ))}
          </ul>
        </p>
        <p>
          Crew:
          <ul>
            <li>Minimum: {ship.crew.required}</li>
            <li>
              Current: {ship.crew.current}/{ship.crew.capacity}
            </li>
            <li>Morale: {ship.crew.morale}</li>
            <li>Wages: {ship.crew.wages} per crew member</li>
            <li>Rotation: {ship.crew.rotation}</li>
          </ul>
        </p>
        <p>
          Engine: ({ship.engine.symbol}) {ship.engine.name}
          <ul>
            <li>Description: {ship.engine.description}</li>
            <li>Speed: {ship.engine.speed}</li>
            <li>
              Requirements: {ship.engine.requirements.crew || '--'} crew | {ship.engine.requirements.power || '--'} power |{' '}
              {ship.engine.requirements.slots || '--'} slots
            </li>
          </ul>
        </p>
        <p>
          Frame: ({ship.frame.symbol}) {ship.frame.name}
          <ul>
            <li>Description: {ship.frame.description}</li>
            <li>Condition: {ship.frame.condition || '--'}</li>
            <li>Fuel Capacity: {ship.frame.fuelCapacity}</li>
            <li>Module Slots: {ship.frame.moduleSlots}</li>
            <li>Mounting Points: {ship.frame.mountingPoints}</li>
            <li>
              Requirements: {ship.frame.requirements.crew || '--'} crew | {ship.frame.requirements.power || '--'} power |{' '}
              {ship.frame.requirements.slots || '--'} slots
            </li>
          </ul>
        </p>
        <p>
          Fuel: {ship.fuel.current}/{ship.fuel.capacity}
          <ul>
            <li>Consumed: {ship.fuel.consumed ? `${ship.fuel.consumed.amount} as of ${ship.fuel.consumed.timestamp}` : '--'}</li>
          </ul>
        </p>
        <p>
          Modules:
          {ship.modules.length === 0 ? (
            'none'
          ) : (
            <ul>
              {ship.modules.map((module) => (
                <li>
                  ({module.symbol}) {module.name} - {module.description || '--'}
                  <br />
                  Capacity: {module.capacity || '--'}
                  <br />
                  Range: {module.range || '--'}
                  <br />
                  Requirements: {module.requirements.crew || '--'} crew | {module.requirements.power || '--'} power | {module.requirements.slots || '--'} slots
                </li>
              ))}
            </ul>
          )}
        </p>
        <p>
          Mounts:
          {ship.mounts.length === 0 ? (
            'none'
          ) : (
            <ul>
              {ship.mounts.map((mount) => (
                <li>
                  ({mount.symbol}) {mount.name} - {mount.description || '--'}
                  <br />
                  Deposits: {!mount.deposits || mount.deposits.length === 0 ? 'none' : <span>{mount.deposits.join(', ')}</span>}
                  <br />
                  Strength: {mount.strength || '--'}
                  <br />
                  Requirements: {mount.requirements.crew || '--'} crew | {mount.requirements.power || '--'} power | {mount.requirements.slots || '--'} slots
                </li>
              ))}
            </ul>
          )}
        </p>
        <p>
          Nav:
          <ul>
            <li>Flight Mode: {ship.nav.flightMode}</li>
            <li>
              Route:
              <br />
              Arrival: {ship.nav.route.arrival}
              <br />
              Departure: {ship.nav.route.departure.symbol}, {ship.nav.route.departure.systemSymbol}, {ship.nav.route.departure.type}, (
              {ship.nav.route.departure.x}, {ship.nav.route.departure.y})
              <br />
              Departure Time: {ship.nav.route.departureTime}
              <br />
              Destination: {ship.nav.route.destination.symbol}, {ship.nav.route.destination.systemSymbol}, {ship.nav.route.destination.type}, (
              {ship.nav.route.destination.x}, {ship.nav.route.destination.y})
            </li>
          </ul>
        </p>
        <p>
          Reactor: ({ship.reactor.symbol}) {ship.reactor.name} - {ship.reactor.description}
          <ul>
            <li>Power Output: {ship.reactor.powerOutput}</li>
            <li>
              Requirements: {ship.reactor.requirements.crew || '--'} crew | {ship.reactor.requirements.power || '--'} power |{' '}
              {ship.reactor.requirements.slots || '--'} slots
            </li>
          </ul>
        </p>
      </div>
    );
  }
}
