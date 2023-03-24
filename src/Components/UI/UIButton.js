import { StyleSheet, ActivityIndicator, View,Text } from 'react-native';
import React, { Children, memo } from 'react';
import Clickable from '../HOC/Clickbale';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../contexts/Colors';
import Paragraph from './Paragraph';
const UiButton = ({
    text = 'Press Me',
    onPress = () => { },
    loading = false,
    disable = false,
    backgroundColor = Colors.primary,
    style = {},
    textColor = Colors.white,
    txtSize = 16,
   navigation,
   
}) => {
    const buttonDisable = disable || loading;
    const buttonStyle = [
        styles.button,
        { backgroundColor },
        style,
    ];
    return (
        <View style={{ opacity: disable ? 0.7 : 1 }}>
            <Clickable onPress={()=>onPress()}disable={buttonDisable} style={buttonStyle} {...navigation}>
                {
                    loading ?
                        <ActivityIndicator color={textColor} size="small" />
                        :
                        <Paragraph size={txtSize} type="medium" color={textColor} style={{fontWeight:'bold'}} >
                            {text}
                        </Paragraph>
                }
            </Clickable>
        </View>

    );
};

export default memo(UiButton);

const styles = StyleSheet.create({
    button: {
        padding: 8,
        width: '100%',
        justifyContent: 'center'
    }
});