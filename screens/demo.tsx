import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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

function Demo() {
    const backgroundStyle = useContext(AppStyleContext);

    return (
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={backgroundStyle.contentColor}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <View
              style={{
                backgroundColor: backgroundStyle.binaryColor,
              }}>
              <Section title="Step One" backgroundStyle={backgroundStyle}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Section>
              <Section title="See Your Changes" backgroundStyle={backgroundStyle}>
                <ReloadInstructions />
              </Section>
              <Section title="Debug" backgroundStyle={backgroundStyle}>
                <DebugInstructions />
              </Section>
              <Section title="Learn More" backgroundStyle={backgroundStyle}>
                Read the docs to discover what to do next:
              </Section>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Demo;
