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
        this.removeTodo = this.removeTodo.bind(this);
    }

    submitHandler = (event) => {
        //Deconstructs state; makes a copy of state.
        let { todoItem, currentInputValue } = this.state
        //This pushes the text with the input field into an array thats in state.
        todoItem.push(currentInputValue);
        //setting state to the new values from what is in the input feild when the enter button is pressed
        this.setState({
            //updates item in an array with whatever was within the input field when enter was pressed
            todoItem: todoItem,
            //updating the input field to be blank so the user can add another todo item
            currentInputValue: ''
        })
        console.log(this.state.todoItem + " HERE!!");
    };
    //handle change function allows the state to be updated with the exact value of what is being entered
    //if a user starts to type Ashley, the value is updated at A, then s, then,h and so on
    handleChange = (event) => {
        this.setState({
            //event is a complicated object that has many properties to it
            //.target and .value
            currentInputValue: event.target.value
        })
        console.log(this.state.currentInputValue + " HERE");
    }

    removeTodo = (item) => {
        this.state.todoItem.splice(item, 1);
        this.setState({
            todoItem: this.state.todoItem
        });
        console.log("Being deleted");
    }


  render() {
    let listItems = this.state.todoItem.map(listItem => {
        return(
            <li key={listItem}
                onClick={() => {
                    this.removeTodo(this.state.todoItem)}
                }
                className="list-group-item">{listItem}</li>
        )
    });
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
                        value={this.state.currentInputValue}
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
                        {listItems }
                    </ul>
                </div>
            </div>
        </AUX>
    );
  }
}

export default App;
