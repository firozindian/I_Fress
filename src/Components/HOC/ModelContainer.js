// import React, { memo, useEffect, useState } from 'react';
// import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
// // import Colors from '../Constants/Colors';
// import Colors from '../contexts/Colors';

// const ModalContainer = ({
//     show = false,
//     onClose = () => { },
//     style = {},
//     children,
//     animationType = 'fade',
//     transparent = true,
//     ...props
// }) => {
//     const [ShowModal, setShowModal] = useState(show);
//     useEffect(() => {
//         setShowModal(show);
//     }, [show]);

//     const onCloseHandler = () => {
//         setShowModal(false);
//         onClose();
//     };

//     return (
//         <Modal
//             transparent={transparent}
//             animationType={animationType}
//             visible={ShowModal}
//             onRequestClose={onCloseHandler}
//             {...props}>
//             <View style={[styles.view, style]}>
//                 <TouchableOpacity style={styles.dismiss} onPress={onCloseHandler} />
//                 {children}
//             </View>
//         </Modal>
//     );
// };

// export default memo(ModalContainer);

// const styles = StyleSheet.create({
//     view: {
//         backgroundColor: Colors.black + '70',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
//     dismiss: {
//         ...StyleSheet.absoluteFillObject,
//     },
// });


// import React from 'react';
// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
// } from 'react-native';

// const Refresing = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };



// export default Refresing;
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     scrollView: {
//       flex: 1,
//       backgroundColor: 'pink',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });




import React, { useState, useEffect } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ImagePath } from '../Assest/Image/ImagePath';
const ModalContainer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    // const [name, setname] = useState('')
    const [count, setcount] = useState(1);
    // useEffect(() => {
    //     // Alert.alert('Modal has been Open.');
    //     if (count < 11) {
    //         let timer = setInterval(() => {
    //             setcount(count + 1);
    //         }, 1000)
    //         return () => { clearInterval(timer) }
    //     }
    //     if (count == 11) {
    //         setModalVisible(false)
    //     }
    // }, [count])
    //<TextInput style={{backgroundColor:'black',width:'20%',borderRadius:10}}/>

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ borderColor: 'orange', height: 120, borderWidth: 1.5, width: '50%', borderRadius: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'orange' }}>!</Text>
                        </View>
                        <Text style={{ fontSize: 24, color: 'red', fontWeight: 'bold', marginTop: 10 }}>Shopeein</Text>
                        <Text style={{ color: "black", fontSize: 20, textAlign: "center", fontWeight: 'bold', marginTop: 20 }}>Are you sure want to logout?</Text>
                       
                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-evenly' }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>

                                <View style={styles.textStyle}>
                                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18 }}>No</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => { setModalVisible(false) }} style={[styles.buttonClose, styles.button]}>
                                <View style={styles.textStyle}>

                                    <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Yes</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
          
            {modalVisible == false ? (<Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => { setModalVisible(true), setcount(1) }}>
                <Text style={styles.textStyle}>Continues</Text>
            </Pressable>) : ("")}
        </View>
    )
}

export default ModalContainer

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        width: '40%'
        // elevation: 2,
    },
    buttonOpen: {
        // backgroundColor: '#F194FF',
    },
    buttonClose: {
        // width: '30%',
        backgroundColor: '#2196F3',
        marginTop: 10
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});