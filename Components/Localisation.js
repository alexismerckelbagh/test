import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



class Localisation extends React.Component{
    render(){
        
        return(
            <View style={styles.container}>
            
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text>Localisation</Text>
              </TouchableOpacity>

          </View>
        )
    }
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "green",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
    },
    
  });

export default Localisation