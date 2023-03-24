import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { ImagePath } from '../Assest'
import Paragraph from '../Components/UI/Paragraph'
import UIButton from '../Components/UI/UIButton'

const GetStart1 = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={ImagePath.get1} style={styles.backimg}>
        <View style={{marginTop:30}}>
        <Paragraph style={styles.Paragraph}>Get Discounts </Paragraph>
        <Paragraph style={styles.Paragraph}>On All Products</Paragraph>
        </View>
        <View style={{color:'red'}}>
          <View style={{alignSelf:'center',marginTop:10}}>
        <Paragraph color='gray'>Lorem ipsum dolor sit amet, consetetur </Paragraph>
        <Paragraph color='gray'>sadipscing elitr, sed diam nonumy</Paragraph>
        </View>
        </View>
      </ImageBackground>
      {/* <Paragraph>ksj</Paragraph> */}
      <Paragraph style={{bottom:60,fontSize:50,alignSelf:'center',color:'lightgray'}}><Paragraph style={{bottom:60,color:'#43B65B',fontSize:50}}>.</Paragraph>..</Paragraph>
      <UIButton text='GET START' style={styles.btn} onPress={()=>navigation.navigate('GetStart2')}/>

    </View>
  )
}

export default GetStart1

const styles = StyleSheet.create({
  backimg: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain'
  },
  Paragraph: {
    fontWeight: '800',
    fontSize: 35,
    alignSelf: 'center',
    fontStyle: 'italic',
    // marginTop:20
  },
  btn:{
    bottom:20,
    backgroundColor:'#43B65B',
    alignItems:'center',
    fontSize:22,
    width:'95%',
    alignSelf:'center',
    height:50,
    borderRadius:10
  }
})