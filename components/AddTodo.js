import React from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

const AddTodo = (props) => {
  const {passTodoState, addInputOnChange, addBtnOnClick} = props;
  return (
    <form className="addTaskWrapper">
    <input
      type="text"
      placeholder="Add your task here..."
      value={passTodoState}
      onChange={addInputOnChange}
      className="addTodoInput"
    />
    <button
      onClick={addBtnOnClick}
      disabled={!passTodoState.length}
      className="addTodoBTN"
    ><FontAwesomeIcon icon={faPlusSquare} size="3x" /></button>
    </form>
  )
}

export default AddTodo;