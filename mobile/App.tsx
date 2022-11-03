import { useFonts } from '@expo-google-fonts/poppins';
import { fontsToImport } from './src/styles/typography';
import PatientRegisterPage from './src/pages/PatientRegister';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  return (
    <SafeAreaView style={{flex : 1}}>
      {/* <PatientRegisterPage /> */}
      <HomePage navigation={{}}/>
    </SafeAreaView>
  );
}


