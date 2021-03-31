import React , {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const Hook = (props) =>{
    const [personState , changepersonstate] = useState({
        persons:[
          {name:'ABC', age:22},
          {name:'XYZ', age:21}
        ],
        otherstate:'palak'
    });
    
    const switchNameHandler = () => {
        changepersonstate({
          persons:[
            {name:'palak', age:22},
            {name:'XYZ', age:27}
          ]
        });
    }
    

    return (
        <div className = "App">
        <h1>Hi</h1>
        <button onClick = {switchNameHandler}>ClickMe</button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}> My Hobbies : painting </Person>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
      </div>)
}

export default Hook