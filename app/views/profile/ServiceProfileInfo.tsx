import React from 'react'
import { OutUserCase } from '../../src/Domain/useCase/localUser/localOutUser';

const ServiceProfileInfo = () => {

    const removeSession = async () => {
        await OutUserCase();
    }

  return {
    removeSession
    }
  }

export default ServiceProfileInfo;
