import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styleComponent from './styleComponent';
import { RoundedBtm } from '../../RoundedBtm';

interface Props {
    openGalery: () => void,
    openCamera: () => void;
    modalUseState: boolean;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ModalPickImage = ({openGalery, openCamera, setModalUseState, modalUseState}: Props) => {
    return (
        <View style={styleComponent.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalUseState(!modalUseState);
                }}>
                <View style={styleComponent.centeredView}>
                    <View style={styleComponent.modalView}>
                        <RoundedBtm
                            onPress={() =>  {
                                openGalery()
                                setModalUseState(true);
                            }}
                            text='Galeria'
                        />
                        <RoundedBtm
                        onPress={ () => openCamera()}
                        text='Camara'
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

