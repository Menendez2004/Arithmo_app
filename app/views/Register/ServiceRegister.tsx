import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../src/Domain/useCase/auth/RegisterAuth";


const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const Register = async () => {
    if (formValid()) {
      const response = await RegisterAuthUseCase(values);
      console.log('RESULT: ' + JSON.stringify(response));
    }

  };

  const isValidEmail = (email: string): boolean => {
    let validEmail = false;
    email = email.trim().toLowerCase();
        let pattern = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
        validEmail = pattern.test(email);
        //console.log(pattern.test(email))
 
    return validEmail;
}

  const formValid = (): boolean => {

    if (!isValidEmail(values.email)) {
      setErrorMessage('El email no es valido');
      return false;
  }

    if (values.name === '') {
      setErrorMessage('El campo: Nombre no puede estar vacio');
      return false;
    }
    if (values.lastName === '') {
      setErrorMessage('Campo vacio : Apellido no puede estar vacio');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('Campo vacio : Email no puede estar vacio ' );
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Campo vacio : Contraseña no puede estar vacio');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('Campo vacio : Confirmar contraseña' );
      return false;
    }
    if (values.password != values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden, verifica que hayas escrito correctamenete tu contraseña nuevamente');
      return false;
    }
    return true;
    
  }

  

  

  return {
    ...values,
    onChange,
    Register,
    formValid,
    errorMessage,
    isValidEmail
  };
};

export default RegisterViewModel;
