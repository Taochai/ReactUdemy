import React, {Component}from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state 只能通过this.setState()改变
  state = {
    name:"Luna",
    age: 26
  };
  setName = ()=>{
    this.setState({
      name: 'Edward'
    })
  };


  render() {
    return (
        <div className="App">
          <h1>Hi,I`m a React App</h1>
          <p>This is really working!</p>
          <button onClick={this.setName}>Switch Name</button>
          <Person name="Eric" age={25}> This is props children </Person>
          <Person name={this.state.name} age={this.state.age}/>
          <Person/>
        </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//         <h1>Hi,I`m a React App</h1>
//         <p>This is really working!</p>
//         <button>Switch Name</button>
//         <Person name="Eric" age={25}> This is props children </Person>
//         <Person/>
//         <Person/>
//     </div>
//   );
// }
//
// export default App;
