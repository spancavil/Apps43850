import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card>
        <Text style={styles.textCategory}>{item.title}</Text>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({})