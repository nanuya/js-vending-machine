import { $ } from './utils/dom.js';
import createStore from './state/index.js';
import createRoute from './router/index.js';

const initState = {
  products: [],
};

const App = () => {
  const $app = $('#app');
  const store = createStore(initState);

  console.log('App');
  createRoute({ root: $app, store, defaultHash: '#/product' });
};

App();
