import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({
  item,
  navigation
}) => {
  return (
    <Pressable
      onPress={()=>navigation.navigate('ItemListCategory', {category: item})}
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