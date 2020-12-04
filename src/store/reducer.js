/*
 * @Description: reducer
 * @Author: 高锐
 * @Date: 2020-11-26 13:27:13
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-01 20:49:29
 */
import {
  CHANG_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  baseUrl: 'http://120.77.207.213:7300/mock/5fbbb329ba85b50020b05457/rtd',
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === INIT_LIST_ACTION) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  if (action.type === CHANG_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    console.log('add item');
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    return newState
  }

  if (action.type === CLEAR_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
