import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import RoundeStyleBtm from './styles/RoundedBtm'

interface Props{
    text: string,
    onPress: () => void
}

export const RoundedBtm = ( { text, onPress }: Props ) => {
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.RoundedButton}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

export const RoundedBtm2 = ({ text, onPress}: Props) =>{
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.RoundedButton2}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.textButton2}>{text}</Text>
    </TouchableOpacity>
  )
}


