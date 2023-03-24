import {StyleSheet,View} from 'react-native';
import React from 'react';
import Paragraph from '../UI/Paragraph';
import Colors from '../contexts/Colors';
import Clickable from '../HOC/Clickbale';
const Collection = ({title = '', onPress = () => {}}) => {
  return (
    <View style={styles.ShowAllContainer}>
      <Paragraph style={{fontWeight: 'bold'}} size = {15}>{title}</Paragraph>
      <Clickable onPress={onPress}>
        <Paragraph color={Colors.smokegrey} size = {13}>Show All</Paragraph>
      </Clickable>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  ShowAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
});