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


const PersonalDetails = ({ onKeyPress, prevStep, nextStep, values, handleChange}) => {

 const {city, occupation, bio} = values;

 return (
  <>
  <NavBar>
   <h2>Personal Details</h2>
  </NavBar>
  
  <Div>
   <form onKeyPress={onKeyPress}>
    <label for="City"></label>
    <input type="text" name="city" defaultValue={city} placeholder="City" onChange={handleChange}></input>
    <label for="Occupation"></label>
    <input type="text" name="occupation" defaultValue={occupation}placeholder="Occupation" onChange={handleChange}></input>
    <label for="Bio"></label>
    <input type="text" name="bio" defaultValue={bio}placeholder="Bio" onChange={handleChange}></input>
    
    <div>    
    <label for="Continue button"></label>
    <input type="button" value="Continue" onKeyPress={onKeyPress} onClick={nextStep}></input>
    <label for="Back button"></label>
    <input id="back-button" type="button" value="Back" onClick={prevStep}></input>
    </div>
   </form>
  </Div>
  </>
 )
}

export default PersonalDetails;