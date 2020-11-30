/*
 * @Description: TodoListUI
 * @Author: 高锐
 * @Date: 2020-11-30 10:49:36
 * @LastEditors: 高锐
 * @LastEditTime: 2020-11-30 11:15:53
 */
import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div className="todolist">
      <div className="header">
        <Input size="small"
          className="input"
          value={props.inputValue}
          placeholder="todo list"
          style={{ width: '300px', height: '32px' }}
          onChange={props.handleInputChange}
          onKeyUp={props.onKeyup} />
        <Button type="primary"
          className="btn"
          onClick={props.handleSubmit}
        >提交</Button>
      </div>
      <div className="list-wrapper">
        <List
          style={{ width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => { props.handleDeleteItem(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default TodoListUI;
