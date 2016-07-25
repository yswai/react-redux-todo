import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import { loadData, loadQuery, viewportSize } from './actions'
import App from './App'

export default render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('container')
);
