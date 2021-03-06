import React,{ Component } from 'react';
//import styled from 'styled-components'
//import Radium from 'radium';
import classes from './Person.css';


class Person extends Component{
    render(){
    console.log('[Person.js rendering ');
    return (
        <div className={classes.Person}>
        <p onClick = {this.props.click}>Hey, I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.changename} value={this.props.name}/>
        </div>)
    }
}

export default Person