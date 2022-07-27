import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const { width, height } = Dimensions.get('screen')

const Item = ({title, press, imageURI}) => {

  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.containerItem}>
        <Image source={imageURI} style={styles.img} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  containerItem: {
    marginVertical: 5,
    alignItems: 'center',
    width: width * 0.3
  },
  text: {
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    textAlign: 'justify'
  },
  img: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain'
  }
})

export default Item;