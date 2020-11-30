/*
 * @Description: reducer
 * @Author: 高锐
 * @Date: 2020-11-26 13:27:13
 * @LastEditors: 高锐
 * @LastEditTime: 2020-11-30 10:58:11
 */
import {
  CHANG_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
}

export default (state = defaultState, action) => {
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
