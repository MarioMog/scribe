import React from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'

import Category from '../../components/Category'

import { categories, subcategories } from '../../data/resources'

const { width, height } = Dimensions.get('screen')

const Home = () => {
  return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Scribe</Text>
          </View>
          <View style={styles.containerCategories}>
            {
              categories.map((categoryActual) => {
                return <Category
                key={categoryActual}
                category={categoryActual}
                subcategories={subcategories.filter(
                  value => value.category === categoryActual
                )}/>
              })
            }
          </View>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: '#000'
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
  // containerSectionlearning: {
  //   alignItems: 'center'
  // },
  containerCategories: {
    marginHorizontal: 20
  }
})

export default Home
