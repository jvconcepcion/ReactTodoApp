import React, {Component} from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faPlusSquare} from '@fortawesome/free-regular-svg-icons';

import SearchInput from './SearchInput';
import TodoLists from './TodoLists';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todo: "",
      list: [],
      search: ""
    }

    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.hideSearchBar = this.hideSearchBar.bind(this);
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addItem(){
    const {todo, list} = this.state;

    if (todo === "") {
      console.log("No TODO");
    }

    const newTodo = {
      id: 1 + Math.random(),
      value: todo
    }

    const newList = [...list, newTodo];

    this.setState({
      list: newList,
      todo: ""
    })
  }

  removeTodo(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState ({ list: updatedList });
  }

  editTodo(value, key){
    const list = [...this.state.list]
    list.map((item) => {
      if(item.id === key) {
        item.value = value
        console.log(value )
      }
    })

    this.setState({
      list
    })
  }

  searchInputToggler(){
    document.getElementById("searchTaskWrapperID").style.display= 'flex' ;
  }

  hideSearchBar(e){
    document.getElementById("searchTaskWrapperID").style.display= 'none' ;
    e.preventDefault();
  }

  searchInput(value){
    this.setState({
      search: value
    })
  }

  render() {
    const {todo, list} = this.state;
    return (
      <div className="toDoContainer">
        <div className="todoWrapper">
          <h1>Todo List</h1>

          <AddTodo 
            passTodoState={todo}
            addInputOnChange={(e) => this.updateInput("todo", e.target.value)}
            addBtnOnClick={()=> this.addItem()}
          />

          <p 
            className="toggleSearchBar"
            onClick={() => this.searchInputToggler()}
          >Toggle Search bar</p>

          <SearchInput
            searchInputOnChange={(e) => this.searchInput(e.target.value)}
            searchCloseBTN={this.hideSearchBar}
          />

          <TodoLists 
            getTodoList={list} 
            getSearchValue={this.state.search} 
            toDoinputOnChange={this.editTodo}
            btnOnClick={this.removeTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;