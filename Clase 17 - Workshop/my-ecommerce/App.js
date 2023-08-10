import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import Navigator from './src/Navigation/Navigator';
import store from './src/Store/store';
import { init } from './src/SQLite';
import { fonts } from './src/Assets/Fonts';


export default function App() {
  
  useEffect(()=> {
    init()
      .then((result)=> {
      })
      .catch(err => {
    })
  }, [])
  
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
