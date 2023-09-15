import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageViewer = ({imageSource}) => {
  return (
    <View>
        <Image style={styles.image} source={{uri:imageSource}}></Image>
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
    image : {
        width : 300,
        height : 440,
        borderRadius : 15
    },
})