
import React from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    View,
} from 'react-native';
// import Colors from '../Constants/Colors';
import Colors from '../contexts/Colors';
// import { globalStyle } from '../Constants/globalStyle';
import { globalStyle } from '../contexts/globalStyle';

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const FormContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
}) => {
    return (
        <View
            style={{
                flex: 1,
                ...globalStyle.container(backgroundColor)
            }}>
            <KeyboardAvoidingView
                style={[globalStyle.container(backgroundColor)]}
                behavior={behavior}>
                <ScrollView style={[globalStyle.container(backgroundColor)]}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default FormContainer;