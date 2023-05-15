import React, { useEffect, useState } from "react";
import { ModalPickImage } from "../../../components/modalPickImage";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { Text, View, Image, ToastAndroid, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import EditiStyle from "../../../../styles/EditStyle";
import { StructureEdit } from "./Structure";
import { StructureEdit2 } from "./Structure2";
import ServiceEditProfile from './serviceEditProfile';
import { RoundedBtm } from "../../../../RoundedBtm";

interface Props extends StackScreenProps<RootStackParamList, 'PorfileUpdateScreen'> { };

export const PorfileUpdateScreen = ({ navigation, route }: Props) => {
  const {user} = route.params;
  const {
    name,
    email,
    lastName,
    edad,
    loanding,
    onChangeInfoUpdate,
    errorMessage,
    image,
    onChange,
    update,
    formValid,
    SelecImage,
    TakePicture,
  } = ServiceEditProfile(user);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    onChangeInfoUpdate(user?.name!, user?.lastName!, user?.edad!, user?.email!);
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

          <View style={[EditiStyle.Text, EditiStyle.circleIcon]} >
          </View>
          <Text style={EditiStyle.area1}>Nombre:</Text>
          <EvilIcons name="pencil" style={EditiStyle.Icons1} />

          <StructureEdit2
            placeholder="Nombres"
            KeyboardType="default"
            image={require("../../../../imgs/Name.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <View style={[EditiStyle.Text, EditiStyle.circleIcon]} >
          </View>
          <Text style={EditiStyle.area1}>Apellido:</Text>
          <EvilIcons name="pencil" style={EditiStyle.Icons1} />

          <StructureEdit2
            placeholder="Apellidos"
            KeyboardType="default"
            image={require("../../../../imgs/lastname.png")}
            property="lastName"
            onChangeText={onChange}
            value={lastName}
          />

          <View style={[EditiStyle.Text, EditiStyle.circleIcon]} >
          </View>
          <Text style={EditiStyle.area1}>Edad:</Text>
          <EvilIcons name="pencil" style={EditiStyle.Icons1} />

          <StructureEdit2
            placeholder="Apellidos"
            KeyboardType="default"
            image={require("../../../../imgs/edad.png")}
            property="edad"
            onChangeText={onChange}
            value={edad}
          />

          <View style={[EditiStyle.Text, EditiStyle.circleIcon]} >
          </View>
          <Text style={EditiStyle.area}>Email:</Text>
          <EvilIcons name="pencil" style={EditiStyle.Icons} />

          <StructureEdit
            placeholder="Email"
            KeyboardType="default"
            image={require("../../../../imgs/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />

        </View>
      </View>

      <View style={EditiStyle.button}>
        <RoundedBtm text="Actualizar datos" onPress={ () => update()}/>
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
