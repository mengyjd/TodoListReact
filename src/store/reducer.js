/*
 * @Description: reducer
 * @Author: 高锐
 * @Date: 2020-12-05 21:23:27
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 22:05:40
 */
const defaultState = {
  inputValue: '',
  list: []
}

export default function reducer(state = defaultState, action) {
  
  if(action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  
  return state
}
