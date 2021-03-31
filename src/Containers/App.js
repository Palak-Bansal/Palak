import React, { Component } from 'react';
//import Radium,{StyleRoot} from 'radium';
//import styled from 'styled-components';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Formss from '../Components/Forms';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons:[
      {id:"1", name:'ABC', age:22},
      {id:"2", name:'XYZ', age:21},
      {id:"3", name: 'abc', age:22}
    ],
    otherstate:'palak',
    showpersons:false,
    showCockpit:true
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  nameChanged = (event , personid) => {
    //flexible lists
    const personindex = this.state.persons.findIndex( p => {return p.id === personid});
    const person = {...this.state.persons[personindex]};
    //const person = Object.assign({},this.state.persons[personindex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personindex] = person;

    this.setState({
      persons:persons
   
    });
    console.log('Button was clicked');
  }
  togglePersonHandler = () =>{
   // setTimeout(()=>{console.log('loading..')},500);
    const change = this.state.showpersons;
    this.setState({showpersons : !change})

  }
  deletePersonHandler = (personIndex) => {
    //(A reference)const person = this.state.persons;
    //(copy updating immutabily)const person = this.state.persons.slice();
    const person = [...this.state.persons];//making copy using ES^ spread operator i.e 3dots
    person.splice(personIndex,1);
    this.setState({persons:person});
  }
  removeCockpit = ()=>{
    this.setState({showCockpit:false});
  }
  render() {
    console.log('[App.js] render()')
    let persons = null;
    if(this.state.showpersons){
      persons = (
        <div>
          {
            <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChanged}/>
          }
      </div>
      );
    }
    
    return (
      // <div className="App">
      //  <h1>Hi, I am a React app.</h1>
      // </div>
      //above all code in return is compiled to the below statement at the end
      //React.createElement('div',{className : "App"},React.createElement('h1',null,'hi \'i am palak'))
    
        <div className = {classes.App}>
          <button onClick = {this.removeCockpit}>Remove cockpit</button>
          <Formss/>
          {this.state.showCockpit?
            <div><Cockpit
            personsLength = {this.state.persons.length}
            toggle = {this.togglePersonHandler}
            showpersons = {this.state.showpersons}/>
            </div>
          :null}
          {persons}
        </div>
      
    );
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
}

export default App;
