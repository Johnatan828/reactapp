import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons:[
      {name:'Johnatan', age: 34},
      {name:'Caro', age: 36},
      {name:'Gloria', age: 54}
    ]
  }

  switchNameHandler = ()=>{

   // console.log('Was Clicked!!');
   // DON'T Do This : this.state.persons[0].name = 'Johnny';
   this.setState({
     persons:[
      {name:'Johnny', age: 34},
      {name:'Caro', age: 36},
      {name:'Gloria', age: 55}
    ]
   })
  }
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React </h1>
        <p> This is really Good!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} >
My Hobbies are: Make up and Movies.</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, Is this Working now... I\'m a React App!!!!') )

    
  }
}

export default App;
