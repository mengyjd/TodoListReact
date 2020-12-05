/*
 * @Description: actionCreator
 * @Author: 高锐
 * @Date: 2020-11-30 09:54:47
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 15:57:36
 */
import {
  CHANG_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from './actionTypes'

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

export const getInitList = () => ({
  type: GET_INIT_LIST
})
