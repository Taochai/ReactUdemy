import React, {Component}from 'react';
import './App.css';
import Person from './Person/Person';
//add something
class App extends Component{
  // state 只能通过this.setState()改变  for class
  state = {
    name:"Luna",
    age: 26
  };

  switchNameHandler = (newAge)=>{
    this.setState({
      name: 'Lunabbbb',
      age:newAge
    })
  };
  changeNameHandler = (event)=>{
    this.setState({
      name: event.target.value,
      age:100
    })
  }

  render() {
    return (
        <div className="App">
          <h1>Hi,I`m a React App</h1>
          <p>This is really working!</p>
          {/* <button onClick={this.switchNameHandler.bind(this,50)}>Switch Name</button> */}
          <Person click={this.switchNameHandler.bind(this,60)}  name="Eric" age={25}>This is props children </Person>
          <Person name={this.state.name} age={this.state.age}  change = {this.changeNameHandler}/>
          <Person/>
        </div>
    );
  }
}

export default App;

