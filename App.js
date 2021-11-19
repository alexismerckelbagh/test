import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Components/Menu';
import Affichage from './Components/Affichage'
import Recherche from './Components/Recherche';
import Parametre from './Components/Parametre';
import Creation from './Components/Creation';
import Dictaphone from './Components/Dictaphone';
import Scanner from './Components/Scanner';
import Localisation from './Components/Localisation';
import Son from './Components/Son';
import Visionneuse from './Components/Visionneuse';




export default function App() {
  return (
    
  <div>
    


    <View style={styles.param} flexDirection='row' >
       <Creation/>
       <Recherche/>
       <Parametre/>
     </View>

     <View style={styles.container}>
        <Affichage/>
        <StatusBar style="auto" />
     </View>

     <View style={styles.dictaphone}>
       <Dictaphone/>
     </View>

     <View style={styles.scanner}>
       <Scanner/>
     </View>

     <View style={styles.localisation}>
       <Localisation/>
     </View>

     <View style={styles.son}>
       <Son/>
     </View>

     <View style={styles.visionneuse}>
       <Visionneuse/>
     </View>

     
  </div>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'
  },
  param:{
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search:{
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dictaphone: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  },
  scanner: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
    
  },
  localisation: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  son: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  visionneuse: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
});
