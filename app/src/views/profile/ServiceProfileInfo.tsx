import React from 'react'
import { OutUserCase } from '../../../src/Domain/useCase/localUser/localOutUser';
import { useLocalUser } from '../../presentation/hooks/useLocalUser';

const ServiceProfileInfo = () => {

  const {user} = useLocalUser();
    const removeSession = async () => {
        await OutUserCase();
    }

  return {
    removeSession,
    user
    }
  }

export default ServiceProfileInfo;
