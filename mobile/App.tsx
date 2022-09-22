import { Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/poppins';
import { fontsToImport } from './src/styles/typography';
import PatientRegisterPage from './src/pages/PatientRegister';

export default function App() {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen

  return (
    <PatientRegisterPage />
  );
}




