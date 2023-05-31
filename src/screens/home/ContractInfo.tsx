import { Context, createElement } from '@b9g/crank';
import { dataService } from '../../services';

export async function* ContractInfo(this: Context) {
  const contract = (await dataService.getContract())!;

  for await ({} of this) {
    yield (
      <div>
        <p>Type: {contract.type}</p>
        <p>ID: {contract.id}</p>
        <p>Faction: {contract.factionSymbol}</p>
        <p>Accepted: {contract.accepted ? 'true' : 'false'}</p>
        <p>Expiration: {contract.expiration}</p>
        <p>
          Terms:
          <ul>
            <li>Deadline: {contract.terms.deadline}</li>
            <li>
              Deliver:{' '}
              {!contract.terms.deliver || contract.terms.deliver.length === 0
                ? '--'
                : contract.terms.deliver.map((d) => (
                    <span>
                      {d.unitsFulfilled}/{d.unitsRequired} {d.tradeSymbol} to {d.destinationSymbol}
                    </span>
                  ))}
            </li>
            <li>
              Payment: {contract.terms.payment.onAccepted} when accepted | {contract.terms.payment.onFulfilled} when fulfilled
            </li>
          </ul>
        </p>
        <p>Fulfilled: {contract.fulfilled ? 'true' : 'false'}</p>
      </div>
    );
  }
}
