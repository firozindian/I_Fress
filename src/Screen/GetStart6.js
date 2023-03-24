import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../Assest'
import Paragraph from '../Components/UI/Paragraph'
import UIButton from '../Components/UI/UIButton'

const GetStart6 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image source={ImagePath.get6} style={styles.backimg} />
            <View style={{ backgroundColor: 'white', borderTopRightRadius: 150, borderTopLeftRadius: 150, bottom: 50, }}>
                <View style={{ marginTop: 30 }}>
                    <Paragraph style={styles.Paragraph}>Buy Premium </Paragraph>
                    <Paragraph style={styles.Paragraph}>Quality Fruits</Paragraph>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Paragraph color='gray'>Lorem ipsum dolor sit amet, consetetur</Paragraph>
                    <Paragraph color='gray'>    sadipscing elitr, sed diam nonumy</Paragraph>
                </View>
                <Paragraph style={{ fontSize: 50, alignSelf: 'center', color: 'lightgray', marginTop: 20 }}>.<Paragraph style={{ color: '#43B65B', fontSize: 50 }}>.</Paragraph>.</Paragraph>
                <UIButton text='GET START' style={styles.btn} onPress={()=>navigation.navigate('GetStart7')}/>
            </View>
        </View>
    )
}

export default GetStart6

const styles = StyleSheet.create({
    backimg: {
        height: '60%',
        width: '100%',
        resizeMode: 'cover'
    },
    Paragraph: {
        fontWeight: '800',
        fontSize: 30,
        alignSelf: 'center',
        fontStyle: 'italic',
    },
    btn: {
        backgroundColor: '#43B65B',
        alignItems: 'center',
        fontSize: 22,
        width: '95%',
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 70
    }
})