import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Paragraph from '../UI/Paragraph';
import { IconPath } from '../../Assets';
import Clickable from '../HOC/Clickbale';
import Colors from '../contexts/Colors';
const CardComponents = ({ data = [], horizontal = true, onPress = () => { } }) => {
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.balnk);
  const [CartData, setCartData] = useState(data);

  const ImageChengeFUnction = index => {
    // console.log('====>ind===>', index);

    // let arr = [...data];

    // arr[index].Icon =
    //   arr[index].Icon == IconPath.unlike ? IconPath.like : IconPath.unlike;
    //   setCartData(arr)
    let chenge =
      LikeCHenge == IconPath.balnk ? IconPath.red : IconPath.balnk;

    setLikeCHenge(chenge);
  };
  const renderItem1 = ({ item, index }) => {
    return (
      <Clickable style={styles.fltcontainer1} onPress={onPress}>
        <Image source={item.img} style={styles.img1} resizeMode="contain" />
        <Clickable
          style={styles.heartcontainer}
          onPress={() => ImageChengeFUnction(item, index)}>
          <Image source={LikeCHenge} style={styles.heart} />
          {/* <Image source={item.Icon} style={styles.heart} /> */}
        </Clickable>
        <View style={styles.gray}>

        </View>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{ fontWeight: 'bold' }}>
            {item.p}
          </Paragraph>

        </View>

        <View style={styles.white}>
          <Paragraph
            size={13}
            style={{ color: 'gray', marginLeft: 20 }}>
            {item.name}
          </Paragraph>
          <View style={{ flexDirection: 'row' }}>
            <Paragraph
              size={13}
              style={{ fontWeight: 'bold', color: 'rgba(14, 189, 20, 1)', marginLeft: 20 }}>
              {item.price}
            </Paragraph>
            <Paragraph
              size={13}
              style={{ fontWeight: 'bold', color: 'gray', marginLeft: 10, marginTop: 5,textDecorationLine:'line-through' }}>
              {item.half}
            </Paragraph>

          </View>
          <Paragraph
            size={13}
            style={{ color: 'rgba(255, 183, 32, 1)', marginLeft: 15, fontSize: 18 }}>
            {item.retin}
          </Paragraph>
        </View>

      </Clickable>
    );
  };
  return (
    <View>
      <FlatList
        renderItem={renderItem1}
        data={CartData}
        horizontal={horizontal}
      />
    </View>
  );
};

export default CardComponents;

const styles = StyleSheet.create({
  fltcontainer1: {
    width: 200,
    height: 330,
    // borderWidth:1,
    margin: 10,
    // backgroundColor:'red' + 50,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 0.4
  },
  img1: {
    width: '100%',
    height: '70%',
  },
  persentcontainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    // borderWidth: 1,
    backgroundColor: Colors.white,
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartcontainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  heart: {
    width: '65%',
    height: '65%',
  },
  gray: {
    backgroundColor: 'rgba(233, 235, 239, 0.8)',
    height: 30,
    // bottom: 30
    // position:'relative'
  },
  white: {
    backgroundColor: 'white',
    height: 68,
    borderRadius:10
  }
});