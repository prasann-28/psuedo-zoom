import React from 'react'
import {Modal ,View , Text, StyleSheet, TextInput, SafeAreaView, Pressable} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

function ChatHeader({setModalVisible}) {
    return (
        <View style={styles.container}>
           <Pressable
           onPress={() => setModalVisible(false)} 
           >
               <Text style={styles.buttonText}>Close</Text>
           </Pressable>
           <Text style={styles.heading} >Chat</Text>
           <Entypo name="bell" size={25} color="#efefef"></Entypo>
            
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center'
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})