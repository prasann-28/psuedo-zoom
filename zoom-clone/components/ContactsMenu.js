import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
    {
        type: "starred",

    },
    {
        type: "contact",
        name: "Tanvi Shimpi",
        photo: require('../assets/tanvi.png')
    },
    {
        type: "contact",
        name: "Aditya Dev",
        photo: require('../assets/aditya.jpg')
    },
    {
        type: "contact",
        name: "Michael Scott",
        photo: require('../assets/michael.jpg')
    }
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {/* Contacts Container  */}
            {contactsMenuButtons.map((contact,index) => 
                <View
                key={index}
                 style={styles.row}> 
                {/* Image */}
                {contact.type == 'starred' ? (
                <View style={styles.starredIcon}>
                    <AntDesign name="star" size={30} color="#efefef"></AntDesign>
                </View>
                )
                 : 
                (
                    <Image source={contact.photo} style={styles.image}></Image>
                )
                }
                
                 {/* Text */}
                 <Text style={styles.text}>
                     {contact.name ? contact.name : "Starred"} 
                 </Text>
             </View>   
            )}
                 
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
  
    starredIcon: {
        backgroundColor: '#333333',
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18,

        
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    }
})