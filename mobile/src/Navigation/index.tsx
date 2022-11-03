import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from "../pages/Home"
import PatientPage from "../pages/Patient"
import PatientRegisterPage from "../pages/PatientRegister"

const AppNavigation : React.FC = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{animation : "slide_from_bottom", headerShown : false}}>
                <Stack.Screen name='home' component={HomePage}/>
                <Stack.Screen name='patient-register' component={PatientRegisterPage}/>
                <Stack.Screen name='patient-details' component={PatientPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation