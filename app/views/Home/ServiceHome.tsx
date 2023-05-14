import React, { useState, useEffect } from 'react'
import { LoginAuthCase } from '../../src/Domain/useCase/auth/LoginAuth';
import { SaveUserCase } from '../../src/Domain/useCase/localUser/localSaveUser';
// import { GetUserCase } from "../../src/Domain/useCase/localUser/localGetUser";
import { useLocalUser } from '../../src/presentation/hooks/useLocalUser';

const HomeViewModel = () => {
    const [errorMessage, seterrorMessage] = useState('')
    const [values, setValues] = useState({
        email: "",
        password: "",  
    });

    const { user, getUserSession } = useLocalUser();
    // console.log('USUARIO EN SESSION: ' + JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const login = async () =>{

        if (validationForm()){

            const response = await LoginAuthCase(values.email, values.password);
            console.log('RESPONSE: ' + JSON.stringify(response));
            if (!response.success){
                seterrorMessage(response.message)
            }
            else{
                await SaveUserCase(response.data);
                getUserSession();
            }
        }
    }

    const validationForm = (): boolean =>{
        if (values.email === ''){
            seterrorMessage('Email es requerido')
            return false;
        }
        if (values.password === '') {
            seterrorMessage('Password es requerido')
            return false;
        }
        return true;
    };
    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage
    }
}

export default HomeViewModel;
