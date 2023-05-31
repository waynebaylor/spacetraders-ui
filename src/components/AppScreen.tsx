import { Children, Context, Fragment, createElement } from '@b9g/crank';
import { Header } from './Header';

interface Props {
  children: Children;
}

export function* AppScreen(this: Context<Props, any>, _: Props) {
  for (const { children } of this) {
    yield (
      <Fragment>
        <div style="display:flex; justify-content:center;">
          <Header />
        </div>
        <div style="margin:1rem 4rem 4rem; padding:1rem;">{children}</div>
      </Fragment>
    );
  }
}
