import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  // Image,
  Dimensions,
  Alert
  // TouchableOpacity,
  // Touchable,
} from 'react-native'
import Subcategory from './Subcategory'

const { width, height } = Dimensions.get('screen')

export default class Category extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subcategories: this.props.subcategories,
      category: this.props.category
    }
  }

  render () {
    return (
      <View style={styles.containerCategory}>
        <Text style={styles.text}>{this.state.category}</Text>
        <View style={styles.containerSubategories}>
          {this.state.subcategories.map((subcategory, index) => {
            // Alert.alert(subcategory.text)
            return index < 3
              ? <Subcategory
                key={subcategory.text + index}
                imageURI={subcategory.image}
                title={subcategory.text}
                press={() =>
                  this.props.navigation.navigate('Word', {
                    text: subcategory.text
                  })
                }
              />
              : null
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerCategory: {

    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: width * 0.04
  },
  img: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain'
  },
  containerSubategories: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})
