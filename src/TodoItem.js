/*
 * @Description: todoItem组件
 * @Author: 高锐
 * @Date: 2020-11-18 13:56:11
 * @LastEditors: 高锐
 * @LastEditTime: 2020-11-23 21:13:34
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content
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

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem

