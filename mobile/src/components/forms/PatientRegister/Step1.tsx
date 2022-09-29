import { useEffect, useRef, useState } from "react"
import { Animated, Easing } from "react-native"
import { isEmail } from "../../../utils/validation"
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
            <StyledInput icon='person' value={formValues.patientName} onChangeText={(text) => onChange('patientName', text)} validate={() => formValues.patientName.trim().length >= 3} placeholder="Nome do paciente"/>

            <StyledInput icon='mail' keyboardType="email-address" value={formValues.patientEmail} onChangeText={(text) => onChange('patientEmail', text)} validate={() => isEmail(formValues.patientEmail)} placeholder="E-mail do paciente"/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep1
