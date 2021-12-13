import React from 'react'
import {View, SafeAreaView, StyleSheet} from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

function Home({navigation}) {
    return (
        <View style={styles.container}>
        <SafeAreaView style={{height:'100%'}}>
            {/* Header */}
            <Header/>
            {/* Search Bar */}
            <SearchBar/>
            {/* Menu Buttons */}
            <MenuButtons navigation={navigation}/>
            {/* Contacts Menu */}
            <ContactsMenu/>
        </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15,

    }
})