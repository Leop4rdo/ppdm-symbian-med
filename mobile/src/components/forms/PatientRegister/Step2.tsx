import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import StyledInput from "../../shared/StyledInput"
import { IPatientRegisterFormProps } from "./Step1"
import styles from "./styles"

const PatientRegisterFormStep2 : React.FC<IPatientRegisterFormProps> = ({ onChange, formValues }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue : 1,
                useNativeDriver : true,
                duration : 750,
                easing : Easing.out(Easing.ease)
            }
        ).start()
    }, [fadeAnim])

    return (
        <Animated.View style={{
            ...styles.container,
            opacity : fadeAnim,
        }}>
            <StyledInput icon='phone' placeholder="Telefone do paciente" onChangeText={(text) => { onChange('patientPhone', text) }}/>

            <StyledInput icon='phone-iphone' placeholder="Celular do paciente" onChangeText={(text) => { onChange('patientCellphone', text) }}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep2