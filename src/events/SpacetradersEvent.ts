export class SpacetradersEvent<T> extends CustomEvent<T> {
  constructor(eventName: string, value: T) {
    super(eventName, {
      bubbles: true,
      detail: value,
    });
  }
}
