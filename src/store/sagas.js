/*
 * @Description: 
 * @Author: 高锐
 * @Date: 2020-12-05 15:50:44
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 16:30:10
 */
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreator'
import axios from 'axios'

function* fetchTodoList() {
  const baseUrl = 'http://120.77.207.213:7300/mock/5fbbb329ba85b50020b05457/rtd'

  try {
    const res = yield axios.get(`${baseUrl}/api/todolist`)
    const action = initListAction(res.data.data)
    yield put(action)
  } catch (error) {
    console.log('/api/todolist 网络请求失败');
  }
  
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, fetchTodoList)
}

export default mySaga;
