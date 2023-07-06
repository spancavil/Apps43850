import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';

export default function App() {
  //Acá se manejará el estado para seleccionar una category y un producto
  
  return (
    <View style = {styles.container}>
      <Header/>
      <ItemListCategory/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
