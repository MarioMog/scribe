import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import Item from '../../components/Item'

const { width, height } = Dimensions.get('screen')

export default class Words extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subcategory: this.props.route.params.category,
      data: this.props.route.params.data
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{this.state.category}</Text>
          </View>
          <View style={styles.containerCategories}>
            {this.state.data.map((value, index) => {
              return (
                <Item
                  key={index}
                  imageURI={value.imageURI}
                  title={value.text}
                  press={() =>
                    this.props.navigation.navigate('OptionLetter', {
                      text: value.text
                    })
                  }
                />
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: '#fff'
  },
  containerTitle: {
    backgroundColor: '#4E4187',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20
  },
  title: {
    fontSize: width * 0.1,
    color: '#fff'
  },
  containerCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  }
})
