import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



class Dictaphone extends React.Component{
    render(){
        const title = 'Dictaphone'
        return(
            <View style={styles.container}>
            
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text>Dictaphone</Text>
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
      backgroundColor: "yellow",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
    },
    
  });

export default Dictaphone