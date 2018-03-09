import React, { Component } from 'react';

import '../App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoList: [],
      todoInput: 'abc'
    };

  }

  render() {
    return (
      <div>
        <input
          type='text'
          value = {this.state.todoInput}
          onChange={(e) => console.log(e.target.value)}

      />
        <button>Add</button>

        <ul>
          <li>First task</li>

        </ul>

      </div>
    );
  }
}

export default App;
