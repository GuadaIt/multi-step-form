import React, { useState } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';
import PersonalDetails from './components/PersonalDetails';
import Confirm from './components/Confirm';
import Success from './components/Success';
import styled from 'styled-components';

const Div = styled.div`
 display: flex;
 width: 100%;
 height: 100vh;
 flex-direction: column;
`;

const App = () => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    occupation: '',
    bio: '',
  });

  const prevStep = () => {
    let copyStep = step;
    copyStep = copyStep - 1;
    setStep(copyStep)
  };

  const nextStep = () => {
    let copiaStep = step;
    copiaStep = copiaStep + 1;
    setStep(copiaStep)
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      nextStep()
    }
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const { firstName, lastName, email, city, occupation, bio } = form;
  const values = { firstName, lastName, email, city, occupation, bio };

  const formPage = {
    1: <UserDetails onKeyPress={onKeyPress} nextStep={nextStep} values={values} handleChange={handleChange} />,
    2: <PersonalDetails onKeyPress={onKeyPress} prevStep={prevStep} nextStep={nextStep} values={values} handleChange={handleChange} />,
    3: <Confirm onKeyPress={onKeyPress} prevStep={prevStep} nextStep={nextStep} values={values} />,
    4: <Success />
  };

  return (
    <Div>
      {formPage[step]}
    </Div>
  )
}

export default App;