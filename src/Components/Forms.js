import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

  const Button = styled.button`
  background-color: pink;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  `;

 const Form1 = (props) => {
    
     const personList = [];
     const[name,setName] = useState('');
     const[email,setEmail] = useState('');
     return(
         <div>
             <form onSubmit = {(event)=>{
                event.preventDefault();
                props.onSubmit({name,email});
                 setName('');
                 setEmail('');             }}>
                <input name = 'email'></input>
                <p>NAME:</p>
                <input value = {name} onChange = {(event)=>{setName(event.target.value)}}/>
                <p>EMAIL:</p>
                <input value = {email} onChange = {(event)=>{setEmail(event.target.value)}}/>
                <p>button</p>
                <Button type = "submit" name = "SUBMIT">SUBMIT</Button>


             </form>
             <p>Hello, I am a form</p>

         </div>
     )

 }
 const Formss = () => {
    const [users, setUsers] = useState([{ name: 'Palak', email: 'Palak@gmail.com' }]);
  
    return (
          <div>
            
              {users.map(({ name, email }) => (
                <ul>
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
                </ul>
              ))}
          <Form1
            onSubmit={(values) => {
              setUsers(users.concat(values));
            }}
          />
          </div>

    );
  };
 export default Formss