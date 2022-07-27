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

const Subcategory = ({title, press, imageURI}) => {
  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.containerItem}>
        <Image source={imageURI } style={styles.img} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    marginVertical: 5,
    alignItems: 'center',
    width: width * 0.28
  },
  text: {
    marginTop: height * 0.01,
    fontSize: width * 0.04,
    textAlign: 'justify'
  },
  img: {
    borderRadius: 50,
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain'
  }
})

export default Subcategory