import { useEffect, useRef, useState } from "react"
import { Animated, Easing } from "react-native"
import { applyCellphoneMask, applyPhoneMask } from "../../../utils/masks"
import { isEmail } from "../../../utils/validation"
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
            <StyledInput icon='phone' keyboardType="numeric"  value={formValues.patientPhone} placeholder="Telefone do paciente" validate={() => formValues.patientPhone.length >= 8} onChangeText={(text) => { onChange('patientPhone', applyPhoneMask(text)) }} />

            <StyledInput icon='phone-iphone' keyboardType="numeric" value={formValues.patientCellphone} placeholder="Celular do paciente" validate={() => formValues.patientPhone.length >= 8} onChangeText={(text) => { onChange('patientCellphone', applyCellphoneMask(text)) }}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep2