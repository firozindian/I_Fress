import { SafeAreaView, View } from 'react-native';
import React from 'react';
import Container from './Container';
import Colors from '../contexts/Colors';
import { globalStyle } from '../contexts/globalStyle';


const ViewContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
    useSafeArea = false,
    
}) => {
    console.log("==children========>", children)
    return (
        <Container>
            {
                useSafeArea
                    ? <SafeAreaView style={[globalStyle.container(backgroundColor), style]}>
                        {children}
                    </SafeAreaView>
                    : <View style={[globalStyle.container(backgroundColor), style]}>
                        {children}
                    </View>
            }
        </Container>
    );
};

export default ViewContainer;