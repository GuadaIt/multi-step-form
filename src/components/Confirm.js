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
 flex-direction: column;
 align-items: center;
 height: 100%;
 padding: 30px;
 ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  .input-label {
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
  }
 }
 div {
  display: flex;
  input[type=button] {
   background-color: rgb(33, 189, 155);
   color: #fff;
   border-color: rgb(33, 189, 155);
   width: 125px;
   height: 35px;
   font-size: 18px;
   transition: 0.4s all ease;
   margin: 25px;
   border-radius: 4px;
   border-style: solid;
  }
  input[type=button]:hover {
   background-color: rgb(35, 167, 137);
  }
  #back-button {
      color: rgb(33, 189, 155);
      background-color: #fff;
      transition: 0.4s all ease;
    }
    #back-button:hover {
      color: #fff;
      background-color: rgb(35, 167, 137);
    }
 }
`;

const Confirm = ({ onKeyPress, prevStep, nextStep, values }) => {

 const { firstName, lastName, email, city, occupation, bio } = values;

 return (
  <>
   <NavBar>
    <h2>Confirm</h2>
   </NavBar>
   <Div>
    <ul>
     <li className="input-label">First name</li>
     <li>{firstName}</li>
     <li className="input-label">Last name</li>
     <li>{lastName}</li>
     <li className="input-label">Email</li>
     <li>{email}</li>
     <li className="input-label">City</li>
     <li>{city}</li>
     <li className="input-label">Occupation</li>
     <li>{occupation}</li>
     <li className="input-label">Bio</li>
     <li>{bio}</li>
    </ul>
    <div>
    <label for="Confirm button"></label>
    <input type="button" onKeyPress={onKeyPress} onClick={nextStep} value="Confirm"></input>
    <label for="Back button"></label>
    <input id="back-button" type="button" onClick={prevStep} value="Back"></input>
    </div>
   </Div>
  </>
 )
};

export default Confirm;