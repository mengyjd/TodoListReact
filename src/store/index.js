/*
 * @Description: 
 * @Author: 高锐
 * @Date: 2020-12-05 21:22:22
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 21:51:34
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
