import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()
  return (
    <View style = {{width: width, alignItems: 'center'}}>
      <Pressable
        onPress={()=>navigation.navigate('ItemListCategory', {category: item})}
      >
        <Card
          additionalStyle={styles.additionalStyle}
        >
            <Text style={styles.textCategory}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
    },
    textCategory: {
        fontSize: 18
    },
    additionalStyle: {
      borderRadius: 15
    }
})