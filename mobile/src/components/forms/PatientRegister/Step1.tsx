import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import StyledInput from "../../shared/StyledInput"
import styles from "./styles"

const PatientRegisterFormStep1 : React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue : 1,
                useNativeDriver : true,
                duration : 250,
                easing : Easing.out(Easing.ease)
            }
        ).start()
    }, [fadeAnim])

    return (
        <Animated.View style={{
            ...styles.container,
            opacity : fadeAnim,
        }}>
            <StyledInput icon='person-outline' onChangeText={() => {}}/>

            <StyledInput icon='mail-outline' onChangeText={() => {}}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep1