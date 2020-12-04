import React, { Component } from 'react'
// import TodoItem from './TodoItem'
// import Axios from 'axios'
import './style.css'
import 'antd/dist/antd.css';
import store from './store'
import {
  getChangeInputAction,
  getAddTodoItemAction,
  getClearInputAction,
  getDeleteTodoItemAction,
  getTodoListAction
} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)

    const action = getTodoListAction()
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getChangeInputAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  onKeyup(e) {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }

  handleSubmit() {
    const inputValue = this.state.inputValue.trim()

    if (!inputValue) {
      return
    }

    store.dispatch(getAddTodoItemAction())

    store.dispatch(getClearInputAction())
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItemAction()
    store.dispatch(action)
  }

  render() {
    return <TodoListUI inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      onKeyup={this.onKeyup}
      handleSubmit={this.handleSubmit}
      handleDeleteItem={this.handleDeleteItem}
    />
  }
}

export default TodoList
