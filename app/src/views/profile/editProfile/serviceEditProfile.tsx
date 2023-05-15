import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
//auth cases
import { SaveUserCase } from '../../../../src/Domain/useCase/localUser/localSaveUser';
import { useLocalUser } from "../../../presentation/hooks/useLocalUser";
import { UpdateUserUserCase } from "../../../Domain/useCase/user/updateUser";
import { UpdateWhitImageUserUseCase } from "../../../Domain/useCase/user/updateWithImageUser";
import { User } from "../../../Domain/entities/User";

const ServiceEditProfile = (user: User) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    image: "",
    password: "",
    edad: "",
    confirmPassword: "",
  });
  
  const [loanding, setLoanding] = useState(false)
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()

  const SelecImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);

    }
  };
  //end selecImage


  //Start TakePicture
  const TakePicture = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);

    }
  };
  //end TakePicture

  //REGISTRO DEL USUARIO
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeInfoUpdate = (name: string, lastName: string, edad: string, email: string,) => {
    setValues({ ...values, name,  lastName,  edad,  email });
  };

  const update = async () => {
    if (formValid()) {
      setLoanding(true);
      const response = await UpdateUserUserCase(values);
      setLoanding(false);
      console.log('RESULT: ' + JSON.stringify(response));
      if (response.success){
        await SaveUserCase(response.data);
        // getUserSession();
      }else{
        setErrorMessage(response.message);
      }
    }
  };
  //end Register

  //validación del email
  const isValidEmail = (email: string): boolean => {
    let validEmail = false;
    email = email.trim().toLowerCase();
    let pattern = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    validEmail = pattern.test(email);
    //console.log(pattern.test(email))

    return validEmail;
  };

  //VALIDACIÓN DEL FOMRULARIO
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
      setErrorMessage('Campo vacio : Email no puede estar vacio ');
      return false;
    }
    if (values.edad === '') {
      setErrorMessage('Campo vacio : Edad no puede estar vacio');
      return false;
    }
    return true;

  }





  return {
    ...values,
    onChange,
    onChangeInfoUpdate,
    update,
    formValid,
    TakePicture,
    SelecImage,
    errorMessage,
    isValidEmail,
    loanding,
    user,
  };
};

export default ServiceEditProfile;
