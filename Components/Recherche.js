import React from 'react'
import { View,TextInput,Button } from 'react-native'


class Recherche extends React.Component{
    render(){
        return(
            <View>
                <Button style = {styles.textinput} title='Rechercher' onPress={() => {}}/>
                <TextInput placeholder='Module souhaité' style = {{borderWidth:1}}/>
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
    }
  }
export default Recherche