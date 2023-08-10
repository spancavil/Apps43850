import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Shop/shopSlice'

const CategoryItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelectCategory = () => {
    dispatch(setCategorySelected(item))
    navigation.navigate('ItemListCategory', {category: item})
  }
  return (
      <Pressable
        onPress={onSelectCategory}
      >
        <Card
          additionalStyle={styles.additionalStyle}
        >
            <Text style={styles.textCategory}>{item}</Text>
        </Card>
      </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({

    textCategory: {
        fontSize: 18
    },
    additionalStyle: {
      borderRadius: 15
    }
})