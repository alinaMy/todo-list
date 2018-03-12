import React, { Component } from 'react';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoInput: ''
    };
  }

  addTodo() {
    const todoList = this.state.todoList;

    // while(todoInput != ' ') {
    //   todoList.push(this.state.todoInput);
    // }
    this.setState({
      todoList: todoList,
      todoInput: ''
    });

  }

  render() {

    console.log(this.state.todoList)
    return (
      <div className="container">

        <div className="input-group">
          <input
            className="form-control"
            type='text'
            value={this.state.todoInput}
            onChange={(e) => this.setState({ todoInput: e.target.value })}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={() => this.addTodo()}>Add</button>
          </div>
        </div>
          <ul>
            {
              this.state.todoList.map((el, i) => <li key={el + i}>{el}</li>)
            }
          </ul>
      </div>

          );
          }
          }

          export default App;
