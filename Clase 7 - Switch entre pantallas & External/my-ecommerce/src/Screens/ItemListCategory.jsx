import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListCategory = () => {

  const [categorySelected, setCategorySelected] = useState("smartphones")
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(()=> {
    //Lógica de manejo de category
    const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.includes(keyword))
    setProducts(productsFiltered)

  }, [categorySelected, keyword])

  const onSearch = (input) => {
    setKeyword(input)
  }  

  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => ProductItem({item})}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        alignItems: 'center'
    }
})