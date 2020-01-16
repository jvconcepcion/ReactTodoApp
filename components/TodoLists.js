import React from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import FlipMove from 'react-flip-move';

const TodoLists = (props) => {
  const {getTodoList, getSearchValue, toDoinputOnChange, btnOnClick} = props;

  const todos = getTodoList
    .filter((results) => {
      return results.value.indexOf(getSearchValue) >= 0
    })
    .map((item) => {
      return (
        <li className="taskCards" key={item.id}>
          <input 
            type="text"
            id={item.id}
            value={item.value}
            onChange={(e) => toDoinputOnChange(e.target.value, item.id)}
          />
          <button
            className="deleteBTN"
            onClick={() => btnOnClick(item.id)}
            disabled={!getTodoList.length}
          ><FontAwesomeIcon icon={faTrashAlt} size="2x" /></button>
        </li>
      )
    });
  return (
    <ul id="todo_lists">
      <FlipMove duration={300} easing="ease-in-out">
        {todos}
      </FlipMove>
    </ul>
  )
}

export default TodoLists;