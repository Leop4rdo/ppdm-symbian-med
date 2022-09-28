import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import StyledInput from "../../shared/StyledInput"
import styles from "./styles"

export interface IPatientRegisterFormProps {
    onChange : (key : any, value : any) => void,
    formValues : any
}

const PatientRegisterFormStep1 : React.FC<IPatientRegisterFormProps> = ({ onChange, formValues }) => {
    const fadeOpacityAnim = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(
            fadeOpacityAnim,
            {
                toValue : 1,
                useNativeDriver : true,
                duration : 750,
                easing : Easing.out(Easing.ease)
            }
        ).start()
    }, [fadeOpacityAnim])

    return (
        <Animated.View style={{
            ...styles.container,
            opacity : fadeOpacityAnim,
        }}>
            <StyledInput icon='person' onChangeText={(text) => onChange('patientName', text)} placeholder="Nome do paciente"/>

            <StyledInput icon='mail' onChangeText={(text) => onChange('patientEmail', text)}  placeholder="E-mail do paciente"/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep1