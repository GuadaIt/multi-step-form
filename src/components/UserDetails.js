import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(33, 189, 155);
  color: #fff;
  height: 15vh;
  h2 {
  font-size: 30px;
  }
`;

const Div = styled.div`
 display: flex;
 justify-content: center; 
 height: 100%;
 padding: 30px;
 form {
   display: flex;
   flex-direction: column;
   align-items: center;
   input {
     margin: 20px;
     height: 35px;
     width: 300px;
     border-radius: 4px;
     border-style: solid;
     border-color: lightgray;
     padding-left: 10px;
   }
   input:focus {
     border-color: rgb(33, 189, 155);
    }
   input[type=button] {
     background-color: rgb(33, 189, 155);
     color: #fff;
     border-color: rgb(33, 189, 155);
     width: 125px;
     height: 35px;
     font-size: 18px;
     transition: 0.4s all ease;
    }
    input[type=button]:hover {
      background-color: rgb(35, 167, 137);
    }
  }
`;


const UserDetails = ({ onKeyPress, values, nextStep, handleChange }) => {

 const { firstName, lastName, email } = values;

 return (
  <>
   <NavBar>
    <h2>User details</h2>
   </NavBar>
   <Div>
    <form onKeyPress={onKeyPress}>
      <label for="First name"></label>
     <input type="text" defaultValue={firstName} placeholder="First name" name="firstName" onChange={handleChange} />
     
     <label for="Last name"></label>
     <input type="text" defaultValue={lastName} placeholder="Last Name" name="lastName" onChange={handleChange} />
     
     <label for="email"></label>
     <input type="text" defaultValue={email} placeholder="Email" name="email" onChange={handleChange} />
     
     <label for="Continue button"></label>
     <input type="button" value="Continue" onKeyPress={onKeyPress} onClick={nextStep} />
     
    </form>
   </Div>
  </>
 )

};

export default UserDetails;