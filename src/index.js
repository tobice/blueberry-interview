import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin' // dependency for material-ui
import Root from './containers/Root'
import configureStore from './store/configureStore'

import * as api from './api'

const store = configureStore();

injectTapEventPlugin(); // to make taps in material ui work

render(<Root store={store} />, document.getElementById('app'));
