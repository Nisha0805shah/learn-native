import { Pressable, StyleSheet, Text, View,Button,Alert} from 'react-native'
import React from 'react'


 const createTwoButtonAlert = () =>
    Alert.alert('Alert', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

const OnClickButton = ({label}) => {
  return (
    <View style={styles.buttonContainer}>
        {/* <Pressable style={styles.button} onPress={()=>alert("You have clicked button")}> */}
        <Button title={`${label}`} style={styles.buttonLabel} onPress={createTwoButtonAlert} color="#e9967a"></Button>
      {/* <Text style={styles.buttonLabel}>{label}</Text> */}
      {/* </Pressable> */}
    </View>
  )
}

export default OnClickButton

const styles = StyleSheet.create({
    button : {
       height : '100%',
       width : '100%',
       borderRadius : 10,
       alignItems : 'center',
       justifyContent : 'center',
       flexDirection : 'row',
    },
    buttonContainer : {
        width : 350,
        height : 60,
        marginHorizontal : 10,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 3
    },
    buttonLabel : {
        color : '#5f9ea0',
        fontSize : 20
    }
})