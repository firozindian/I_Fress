import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {IconPath, ImagePath} from '../../Assets';
import Paragraph from '../UI/Paragraph';


const Catogory = () => {
    const Data = [
        {
          img: ImagePath.sarees,
          name: 'Sarees',
        },
        {
          img: ImagePath.kurti,
          name: 'Kurtis',
        },
        {
          img: ImagePath.lehenga,
          name: 'Lehengas',
        },
        {
          img: ImagePath.trouser,
          name: 'Trousers',
        },
        {
          img: ImagePath.shirt,
          name: 'Shirts',
        },
        {
          img: ImagePath.delivery,
          name: '4 Hours Delivery',
        },
      ];
      const renderItem = ({item}) => {
        return (
          <View style={styles.fltcontainer}>
            <Image source={item.img} style={styles.img} resizeMode="contain" />
            <Paragraph size={11} style={{fontWeight: 'bold'}}>
              {item.name}
            </Paragraph>
          </View>
        );
      };
  return (
    <View>
      <FlatList renderItem={renderItem} data = {Data} horizontal />
    </View>
  )
}

export default Catogory

const styles = StyleSheet.create({
    fltcontainer: {
        width: 80,
        height: 80,
        // borderWidth: 1,
        // margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 13,
       
      },
      img: {
        width: '70%',
        height: '70%',
        borderRadius: 50,
      },
})