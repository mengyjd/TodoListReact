/*
 * @Description: actionCreator
 * @Author: 高锐
 * @Date: 2020-11-30 09:54:47
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-04 19:18:30
 */
import {
  CHANG_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'
import axios from 'axios'

export const getChangeInputAction = (value) => ({
  type: CHANG_INPUT_VALUE,
  value
})

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getClearInputAction = () => ({
  type: CLEAR_INPUT_VALUE
})

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoListAction = () => {
  return (dispatch, test) => {
    const baseUrl = 'http://120.77.207.213:7300/mock/5fbbb329ba85b50020b05457/rtd'
    axios.get(`${baseUrl}/api/todolist`)
    .then(res => {
      const data = res.data.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}
