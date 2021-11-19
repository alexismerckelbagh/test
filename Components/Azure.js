import React from "react";
import azure from '../assets/azure.png'
import { View, Text, StyleSheet, Image } from 'react-native'

const Azure = () =>{
    return (
    
    <Image source={azure} style={styles.image}/>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 220,
        borderRadius:10,
      }
})

export default Azure