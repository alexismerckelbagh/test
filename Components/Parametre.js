import React from 'react'
import { View,TextInput,Button, Image, flexDirections } from 'react-native'
import settlings from '../assets/settlings.png'

class Parametre extends React.Component{
    render(){
        return(
            <View>
                <Button style = {styles.textinput} title='Paramètres' onPress={() => {}}/>
                <Image source={settlings} style={styles.image}/>
            </View>
        )
    }
}

const styles = {
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      borderRadius:10,

    },
    image: {
        width: 50,
        height: 50,

      }
  }
export default Parametre