import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'

const Home = ({
  navigation
}) => {
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()
  
  return (
    <View style={styles.container}>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.wrapper}
            horizontal={true}
            style={styles.flatlist}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
      gap: 20,
    },
    container: {
        backgroundColor: colors.lightPink,
        alignItems: 'center',
    },
    flatlist: {
      width: '80%'
    }
})