import React, { Component } from 'react';
import './App.css'
import AUX from './hoc/AUX';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoItem: [],
            currentInputValue: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitHandler = (event) => {
        let { todoItem, currentInputValue } = this.state
        todoItem.push(currentInputValue);

        this.setState({
            todoItem: todoItem
        })
        console.log(this.state.todoItem + " HERE!!");
    };

    handleChange = (event) => {
        this.setState({
            currentInputValue: event.target.value
        })
        console.log(this.state.currentInputValue + " HERE");
    }

  render() {
      
    return (
        <AUX>
            <div>
                <h1>My To Do List</h1>
                <div className="input-group mb-3">
                    <input type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Enter your todo item here"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                        onClick={this.submitHandler}
                        type="button">Enter
                    </button>
                </div>
                </div>

                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{listItems}</li>
                    </ul>
                </div>
            </div>
        </AUX>
    );
  }
}

export default App;
