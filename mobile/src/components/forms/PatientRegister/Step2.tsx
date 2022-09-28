import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import StyledInput from "../../shared/StyledInput"
import styles from "./styles"

const PatientRegisterFormStep2 : React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue : 1,
                useNativeDriver : true,
                duration : 500,
                easing : Easing.out(Easing.ease)
            }
        ).start()
    }, [fadeAnim])

    return (
        <Animated.View style={{
            ...styles.container,
            opacity : fadeAnim,
        }}>
            <StyledInput icon='phone' onChangeText={() => {}}/>

            <StyledInput icon='phone-iphone' onChangeText={() => {}}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep2