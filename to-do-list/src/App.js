import React, { Component } from 'react';
import './App.css'
import AUX from './hoc/AUX';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoItem: []
        }
        this.addToDoItemHandler = this.addToDoItemHandler.bind(this)
    }

    addToDoItemHandler = (event) => {
        console.log(event.target.value);
    }

  render() {
    return (
        <AUX>
            <div>
                <h1>My To Do List</h1>
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter your todo item here"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <input
                        className="btn btn-outline-secondary"
                        onClick={this.addToDoItemHandler}
                        type="button">Enter
                    </button>
                </div>
                </div>

                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        </AUX>
    );
  }
}

export default App;
