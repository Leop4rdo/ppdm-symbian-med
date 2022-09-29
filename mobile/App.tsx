import { useFonts } from '@expo-google-fonts/poppins';
import { fontsToImport } from './src/styles/typography';
import PatientRegisterPage from './src/pages/PatientRegister';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  return (
    <PatientRegisterPage />
  );
}



