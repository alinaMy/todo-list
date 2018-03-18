import React, { Component } from 'react';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoInput: '',
      todoInputValid: false
    };
  }

  addTodo() {
    const todoList = this.state.todoList;

    todoList.push(this.state.todoInput);
    this.setState({
      todoList: todoList,
      todoInput: ''
    });

  }

  inputChange(v){
    let todoInputValid = v.trim().length >=3;
    this.setState({
      todoInput: v,
      todoInputValid
    })
  }

  render() {

    console.log(this.state.todoList)
    return (
      <div className="container pt-4">

        <div className="row">
          <div className="col-12  col-sm-6 col-md-4 border">

          <ul>
            {
              this.state.todoList.map((el, i) => <li key={el + i}>{el}</li>)
            }
          </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
        <div className="input-group">
          <input
            className="form-control"
            type='text'
            value={this.state.todoInput}
            onChange={(e) => this.inputChange(e.target.value)}
          />
          <div className="input-group-append">
            <button
              disabled = {!this.state.todoInputValid}
              className = "btn btn-outline-primary"
              onClick={() => this.addTodo()}>Add
            </button>
          </div>
          </div>
        </div>
        </div>
      </div>

          );
          }
          }
          export default App;
