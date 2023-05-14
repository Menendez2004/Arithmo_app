import React, { useEffect, useState } from "react";
import { ModalPickImage } from '../../../src/components/modalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { Text, View, Image, ToastAndroid, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

import EditiStyle from '../../../styles/EditStyle';
import { StructureEdit } from "./Structure";
import { RestructuringImput1 } from '../../../RestructuringImput1'; 
import ServiceEditProfile from './serviceEditProfile';
import editProfileStyle from "../../../styles/editProfileStyle";

interface Props extends StackScreenProps<RootStackParamList, 'PorfileUpdateScreen'> { };

export const PorfileUpdateScreen = ({ navigation }: Props) => {
  const {
    name,
    email,
    lastName,
    password,
    confirmPassword,
    loanding,
    errorMessage,
    user,
    image,
    onChange,
    Register,
    formValid,
    SelecImage,
    TakePicture,
  } = ServiceEditProfile();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    onChange('name', user?.name)
    onChange('lastName', user?.name)
    onChange('email', user?.email)
  }, [user])


  useEffect(() => {

    if (user?.session_token != null && user?.session_token != undefined) {
      navigation.navigate('PorfileUpdateScreen');
    }
  }, [user])

  return (
    <View style={EditiStyle.container}>

      <View style={[EditiStyle.container2, EditiStyle.shadowProp]}>

        <View style={[EditiStyle.circle, EditiStyle.shadowProp]}>

          <View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              {
                image == ''
                  ? <Image
                    //@ts-ignore
                    source={{ uri: user?.image }}
                    style={EditiStyle.logoImage}

                  />
                  : <Image
                    source={{ uri: image }}
                    style={EditiStyle.logoImage}
                  />
              }
            </TouchableOpacity>
          </View>

        </View>

        <View style={EditiStyle.container_3}>


          <RestructuringImput1

            placeholder="Nombres"
            KeyboardType="default"
            image={require("../../../imgs/Name.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <RestructuringImput1
            placeholder="Apellidos"
            KeyboardType="default"
            image={require("../../../imgs/lastname.png")}
            property="lastName"
            onChangeText={onChange}
            value={lastName}
          />

          <View style={EditiStyle.Text} >
            <Text style= {EditiStyle.area}>Email:</Text>
          <EvilIcons name="pencil" style={EditiStyle.Icons} />
          </View>
          
          <StructureEdit
            placeholder="Email"
            KeyboardType="default"
            image={require("../../../imgs/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />

        </View>
        

      </View>

      <View style={EditiStyle.button}>
        <Text style={{ color: '#05BFDB', fontWeight: 'bold', fontSize: 15 }}>Actualizar Perfil</Text>
      </View>

      <ModalPickImage

        openGalery={SelecImage}
        openCamera={TakePicture}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}

      />

    </View>
  );
};
