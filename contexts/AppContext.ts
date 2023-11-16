import { createContext } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const AppStyleContext = createContext({
    backgroundColor: Colors.lighter,
    contentColor: 'dark-content',
    binaryColor: Colors.black,
    lightColor: Colors.dark,
  });
