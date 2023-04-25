import React, { useState } from 'react'
import { ArithmoApi } from '../../src/data/source/remote/api/ArithmoApi';

 const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "", 
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const Register = async() =>{
      try {
        
        const response = await ArithmoApi.post('/users/create', values);
        console.log('RESPONSE: ' + JSON.stringify(response));

      } catch (error) {
        console.log('ERROR : ' + error)
      }

    }
  return{

    ...values,
    onChange, 
    Register
    
  }
}

export default RegisterViewModel; 