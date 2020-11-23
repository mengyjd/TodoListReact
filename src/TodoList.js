import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import Axios from 'axios'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidMount() {
    const link = "http://120.77.207.213:7300/mock/5fbbb329ba85b50020b05457/rtd"
    Axios.get(link + "/api/todolist").then((result) => {
      this.setState(() => ({
        list: [...result.data.data]
      }))
    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input type="text"
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleDeleteClick}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    if(!this.state.inputValue) {
      return
    }
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleDeleteClick(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  
}

export default TodoList
