import React, { Component } from 'react';
import './App.css'
import AUX from './hoc/AUX';

class App extends Component {
  render() {
    return (
        <AUX>
            <div>
                <h1>My To Do List</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your todo item here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Enter</button>
                </div>
                </div>
                
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
         </AUX>
    );
  }
}

export default App;
