import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
  // Touchable,
} from 'react-native'

const { width, height } = Dimensions.get('screen')

export default class Subcategory extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imageURI: this.props.imageURI,
      title: this.props.title,
      press: this.props.press
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this.state.press}>
        <View style={styles.containerItem}>
          <Image source={this.state.imageURI } style={styles.img} />
          <Text style={styles.text}>{this.state.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
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
