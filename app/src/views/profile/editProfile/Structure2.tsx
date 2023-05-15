import React from 'react';
import editProfileStyle from '../../../../styles/editProfileStyle';
import { Text, View, Image, TextInput, KeyboardType } from 'react-native';

interface props {
    image: any,
    placeholder: string, 
    value: string,
    KeyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (Property: string, value: any) => void

};

export const StructureEdit2 = ({
    image, 
    placeholder, 
    value, 
    KeyboardType, 
    secureTextEntry = false,
    property,
    onChangeText

}:props)=>{
    return(
        <View style={editProfileStyle.imputForm} >
                    {/*imagenes de formulario email*/}
                    <Image source={ image }
                        style={editProfileStyle.formIcon1} />

                    <TextInput
                    //@ts-ignore
                        style={editProfileStyle.texImputForm}
                        placeholder={placeholder}
                        keyboardType={KeyboardType}
                        value={value}
                        onChangeText ={text => onChangeText( property, text )}
                        secureTextEntry= { secureTextEntry }
                    />
                </View>
                
    );
};


