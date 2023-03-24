import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../contexts/Colors'
export default function Gradientview({style,color=[],primary=Colors.primary,secondary=Colors.secondary,secondary1=Colors.secondary1,children}) {
  return (
    <LinearGradient colors={[primary, secondary,secondary1,...color]} style={style}>
 {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({})