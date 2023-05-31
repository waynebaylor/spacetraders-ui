import './style.css';
import page from 'page';
import { createElement } from '@b9g/crank';
import { renderer } from '@b9g/crank/dom';
import { HomeScreen, IndexScreen } from './screens';

page('/', () => {
  renderer.render(<IndexScreen />, document.getElementById('app') as HTMLElement);
});

page('/home', () => {
  renderer.render(<HomeScreen />, document.getElementById('app') as HTMLElement);
});

page();
