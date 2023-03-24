import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { memo } from 'react'
import Colors from '../contexts/Colors'
import Paragraph from './Paragraph'
const Input = ({
  label = 'Input',
  placeholder,
  style,
  onChange = () => { },
  value,
  error,
  secureTextEntry=false
  //keyboardType
}) => {
  return (
    <View style={{ marginTop: 5,alignSelf:'center',width:'100%'}}>
      <Text
        style={{ fontSize: 16, color: '#000',fontWeight:'bold' }}
      >{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        cursorColor={'black'}
        style={{
          padding: 0,
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          height: 50,
          marginTop: 7,
          ...style,
        // width:'100%',
  //keyboardType={keyboardType}
        
        }}
        onChangeText={(text) => onChange(text)}
  secureTextEntry={secureTextEntry}

           />
      <Paragraph size={15} color={Colors.red}>{error}</Paragraph>
    </View>
  )
}

export default memo(Input)

const styles = StyleSheet.create({})