import React from "react";
import settings from '../assets/settings.jpg'
import { View, Text, StyleSheet, Image } from 'react-native'

const Settling = () =>{
    return (
        <Image source={settings} style={styles.image}/>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 220
      }
})

export default Settling