/*
 * @Description: store
 * @Author: 高锐
 * @Date: 2020-11-26 13:24:39
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-04 18:58:24
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore(
  reducer,
  enhancer
)

export default store
