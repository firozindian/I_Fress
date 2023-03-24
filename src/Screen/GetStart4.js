import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../Assest'
import Paragraph from '../Components/UI/Paragraph'
import UIButton from '../Components/UI/UIButton'

const GetStart4 = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={ImagePath.get4} style={styles.backimg}>
                <View style={{ marginTop: 30 }}>
                    <Paragraph style={styles.Paragraph}>Welcome to</Paragraph>
                    <Image source={ImagePath.BigCart} style={{height:30,width:100,resizeMethod:'cover',alignSelf:'center'}} />
                </View>
                <View style={{ color: 'red' }}>
                    <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        <Paragraph color='gray'>Lorem ipsum dolor sit amet, consetetur</Paragraph>
                        <Paragraph color='gray'>    sadipscing elitr, sed diam nonumy</Paragraph>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 25, width: '100%' }}>
                    <Paragraph style={{ bottom: 30, fontSize: 50, alignSelf: 'center', color: 'lightgray' }}>.<Paragraph style={{ color: '#43B65B', fontSize: 50 }}>.</Paragraph>.</Paragraph>
                    <UIButton text='GET START' style={styles.btn} onPress={()=>navigation.navigate('GetStart5')}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStart4

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
    btn: {
        // bottom:20,
        backgroundColor: '#43B65B',
        alignItems: 'center',
        fontSize: 22,
        width: '95%',
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        // marginTop:470
    }
})