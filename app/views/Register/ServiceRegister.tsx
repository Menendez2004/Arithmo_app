import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../src/Domain/useCase/auth/RegisterAuth";


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
  };

  const Register = async () => {
    const { result, error } = await RegisterAuthUseCase(values);
    console.log('RESULT: ' + JSON.stringify(result));
    console.log('ERROR: ' + error);
  };
  return {
    ...values,
    onChange,
    Register,
  };
};

export default RegisterViewModel;
