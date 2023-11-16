import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  useColorScheme
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useContext } from 'react';

import { AppStyleContext } from '../contexts/AppContext';

type SectionProps = PropsWithChildren<{
  title: string;
  backgroundStyle: object;
}>;

function Section({children, title, backgroundStyle}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: backgroundStyle.binaryColor,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: backgroundStyle.lightColor,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home({ navigation }) {
    const backgroundStyle = useContext(AppStyleContext);

    return (
        <SafeAreaView style={{...backgroundStyle, flex: 1}}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
                Welcome!
            </Text>
          </View>
          <View style={styles.logInContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.signUpText}>Log In</Text>
            </View>
          </View>
          <Pressable
            title=''
            style={styles.signUpContainer}
            onPress={()=>navigation.navigate('Demo')}
            >
            <View style={styles.textContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </View>
          </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 493,
    marginHorizontal: 42,
    height: 45,
  },
  welcomeText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  logInContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    height: 43,
    marginHorizontal: 42,
  },
  signUpContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    height: 43,
    marginHorizontal: 42,
  },
  textContainer: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
    flex:1,
  },
  signUpText: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
  }
});

export default Home;
