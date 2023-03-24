import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
// import Paragraph from '../';
import Paragraph from '../UI/Paragraph';
import Clickable from '../HOC/Clickbale';
import { IconPath,ImagePath } from '../../Assets';
import Colors from '../contexts/Colors';

const Hader = ({title = '', type = '', onPress = () => {}}) => {
  console.log('====title =====>>', title);
  return title == 'DashBord' ? (
    <View style={styles.header}>
      <View style={styles.shopingContainer}>
        <Image
          source={ImagePath.shop}
          style={styles.shoping}
          resizeMode="cover"
        />
        <Paragraph color={Colors.white} size={23} style={styles.txt}>
          Shoping
        </Paragraph>
      </View>
      <View>
        <Clickable style={styles.walletcontainer}>
          <Image source={IconPath.wallet} style={styles.wallet} />
        </Clickable>
      </View>
    </View>
  ) : type == 'Icon' && title ? (
    <View>
      <View style={styles.header3}>
        <Clickable style={styles.backContainer} onPress={onPress}>
          <Image source={IconPath.backicon} style={styles.back} />
        </Clickable>
        <View>
          <Paragraph color={Colors.white} style={{fontWeight: 'bold'}}>
            {title}
          </Paragraph>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.header2}>
      <View style={styles.shopingContainer2}>
        <Paragraph color={Colors.white} size={22}>
          {title}
        </Paragraph>
      </View>
    </View>
  );
};

export default Hader;

const styles = StyleSheet.create({
  header3: {
    backgroundColor: Colors.purple,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backContainer: {
    width: '20%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    width: 20,
    height: 22,
    tintColor: Colors.white,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shoping: {
    width: 60,
    height: 60,
  },
  header2: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.purple,
    justifyContent: 'center',
  },

  shopingContainer2: {
    left: 15,
  },
  shopingContainer: {
    flexDirection: 'row',
    right: 10,
  },
  txt: {
    position: 'relative',
    // right: 25,
    fontWeight: 'bold',
  },
  wallet: {
    width: '50%',
    height: '50%',
  },
  walletcontainer: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
  },
});