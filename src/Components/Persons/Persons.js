import React,{Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');  
        return state;  }
    shouldComponentUpdate(nestprops,nextstate){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return{message:'snapshot'}
    }
    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log('[Persons.js] componentDidUpdate:',snapshot);
    }

    render(){
        console.log('[Persons.js] rendering');
        return(
        this.props.persons.map((person,index) => { //lists
            return <Person 
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changename = {(event) => this.props.changed(event,person.id)}
            click = {() => this.props.clicked(index)}/>
        }))
    }
}

export default Persons;