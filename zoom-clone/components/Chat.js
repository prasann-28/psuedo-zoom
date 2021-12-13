import React, {useState} from 'react'
import {KeyboardAvoidingView,Modal ,View , Text, StyleSheet, TextInput, SafeAreaView} from 'react-native'
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import ChatHeader from './ChatHeader'

function Chat( {setModalVisible}) {

    const [messageText, setMessageText] = useState()

    return (
        <View style={styles.container}>
            {/* chat header */}
            <SafeAreaView style={{height: "100%"}}>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
            >
                <TouchableWithoutFeedback></TouchableWithoutFeedback>
            <ChatHeader setModalVisible={setModalVisible}/>
            {/* Chat Messages  */}
            <View style={styles.chatMessages}>

            </View>
            {/* Type Messages */}
            
            <View style={styles.chatFormContainer}>
                <Text style={{color: "white"}}>Send to: Everyone</Text>
                <View style={styles.chatForm}>
                    <TextInput
                    value={messageText}
                    onChangeText={text => setMessageText(text)}
                    style={styles.textInput}
                    placeholder="Tap here to Chat"
                    placeholderTextColor= "grey"
                    ></TextInput>
                    <TouchableOpacity
                    style={{...styles.button,
                        backgroundColor: messageText ? "#0B71EB" : "#373838",}}
                    >
                        <FontAwesome name={"send"} size={18} color="#efefef"></FontAwesome>
                    </TouchableOpacity>
                </View>

            </View>
            </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c"
    },
    chatFormContainer: {
        borderColor: "#2f2f2f",
        borderTopWidth: 1,
        padding: 12

    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderColor: "#595859",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1,
    },
    button: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    chatForm: {
        flexDirection: 'row'
    },
    chatMessages: {
        flex: 1
    }
})