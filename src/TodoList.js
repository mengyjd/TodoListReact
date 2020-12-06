/*
 * @Description: TodoList
 * @Author: 高锐
 * @Date: 2020-12-05 21:14:28
 * @LastEditors: 高锐
 * @LastEditTime: 2020-12-05 22:43:51
 */
import { connect } from 'react-redux'

const TodoList = (props) => {
  
  const { 
    inputValue, 
    list, 
    changeInputValue, 
    handleClick
  } = props

  return (
    <div>
      <div>
        <input type="text" value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
