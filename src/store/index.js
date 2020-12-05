/*
 * @Description: store
 * @Author: 高锐
 * @Date: 2020-11-26 13:24:39
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 16:11:34
 */
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(todoSagas)
export default store
