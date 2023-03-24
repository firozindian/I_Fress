import { StyleSheet, ActivityIndicator, View, Modal } from 'react-native';
import React, { memo } from 'react';
import Colors from '../contexts/Colors';
const Loader = ({ loading = false, close = () => { } }) => {
    return (
        <Modal
            transparent
            visible={loading}
            onRequestClose={close}
        >
            <View
                style={[styles.loader]}>
                {loading && <ActivityIndicator size={'large'} color={Colors.white} />}
            </View>
        </Modal>
    );
};

export default memo(Loader);

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black + '70',
        ...StyleSheet.absoluteFillObject,
    },
});