import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center; 
 height: 100%;
`; 

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(33, 189, 155);
  color: #fff;
  height: 15vh;
  width: 100%;
`;

const Success = () => {
 return(
  <Div>
   <NavBar></NavBar>
   <h2>Thank you for registering!</h2>
   <p>Check your email for further instructions</p>
  </Div>
 )
};

export default Success;