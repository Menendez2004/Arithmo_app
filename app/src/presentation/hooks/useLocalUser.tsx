import React,{useEffect, useState} from 'react'
import { GetUserCase } from "../../../src/Domain/useCase/localUser/getUser";
import { User } from '../../Domain/entities/User';


export const useLocalUser = () => {
    
    const [user, setuser] = useState<User>();

    useEffect(() => {
        getUserSession();
    }, [])

    const getUserSession =async () => {
        const user = await GetUserCase();
        setuser(user)
        // console.log('Usuario en session: ' + JSON.stringify(user));
    }
    return { 
        user,
        getUserSession
    }
}
