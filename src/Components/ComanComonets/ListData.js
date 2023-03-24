import { StyleSheet, Text, View, FlatList,Image} from 'react-native'
import React from 'react'
import { IconPath,ImagePath } from '../../Assets';
import Paragraph from '../UI/Paragraph';
import Colors from '../contexts/Colors';

const ListData = ({data}) => {


 const FlatData=({item})=>{
    console.log('======item=======>',item)
    return(
       <View style={{marginHorizontal:10,}}>
        <View style={{backgroundColor:Colors.greenlite,borderRadius:20}}>
       <Image source={item.img} style={{height:'40%',width:90}}/> 
        <Paragraph style={styles.discount}>{item.dis}</Paragraph>
        <Image source={item.icon} style={{height:20,width:20}}/>
        <Paragraph>{item.text}</Paragraph>
        <Paragraph style={{color:Colors.green}}>{item.price}</Paragraph>
        </View> 
       </View>
    )
 }

  return (
    <View>
      <FlatList 
      data={data}
      renderItem={FlatData}
      horizontal
      />
    </View>
  )
}

export default ListData

const styles = StyleSheet.create({
    discount:{
        position:'relative',
        bottom:320,
        left:10,
        backgroundColor:Colors.white,
        width:40,
        alignContent:'center',
        borderRadius:20,
        color:Colors.pink,

    }
})