/*
 * @Description: todoItem组件
 * @Author: 高锐
 * @Date: 2020-11-18 13:56:11
 * @LastEditors: 高锐
 * @LastEditTime: 2020-11-18 14:21:16
 */
import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const {content} = this.props
    return (
      <div onClick={this.handleClick}
      className="todo-item"
      >
      {content}
      </div>
    )
  }

  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

export default TodoItem

