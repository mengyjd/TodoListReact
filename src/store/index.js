/*
 * @Description: store
 * @Author: 高锐
 * @Date: 2020-11-26 13:24:39
 * @LastEditors: 高锐
 * @LastEditTime: 2020-11-26 13:47:07
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
