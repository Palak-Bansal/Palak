import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //setTimeout(()=>{alert('saved data persons')},1000);
        return()=>{console.log('[Cockpit.js] useEffect clearing out')}
    },[props.persons]);
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
      //  setTimeout(()=>{alert('saved data')},1000);
        return()=>{console.log('[Cockpit.js] useEffect2 clearing out')}
    },[]);
    const assignedclasses = [];
    let btnclass = [];
    if(props.personsLength <=2){assignedclasses.push(classes.red)}
    if(props.personsLength <=1){assignedclasses.push(classes.bold);}
    if(props.showpersons){btnclass.push(classes.Red);}

    return(<div className={classes.Cockpit}>
        <h1>Hi</h1>
        <p className={assignedclasses.join(' ')}>It's working!!</p>
        <button className = {btnclass}
        onClick = {props.toggle}>TOGGLE PERSONS
        </button>
    </div>)
}

export default React.memo(cockpit);