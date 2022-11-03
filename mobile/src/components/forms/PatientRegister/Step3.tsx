import { useEffect, useRef, useState } from "react"
import { Animated, Easing, Text } from "react-native"
import { applyPhoneMask } from "../../../utils/masks"
import { isEmpty } from "../../../utils/validation"
import StyledInput from "../../shared/StyledInput"
import { IPatientRegisterFormProps } from "./Step1"
import styles from "./styles"

const PatientRegisterFormStep3 : React.FC<IPatientRegisterFormProps> = ({ onChange, formValues }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const [errors, setErrors] = useState({
        name : "",
        phone : ""
    })

    const validate = () => {
        let newErrors = {
            name : "",
            phone : ""
        }
        
        if (formValues.responsibleName.trim().length < 3)
            newErrors.name = "Nome Inválido"
        else if (formValues.responsiblePhone.length < 8)
            newErrors.phone = "Telefone Inválido"

        setErrors(newErrors)

    }

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
            <Text style={styles.info}>Os campos abaixo são opcionais</Text>

            <StyledInput icon='person' value={formValues.responsibleName} placeholder="Nome do responsável" validate={() => (formValues.responsibleName > 0) ? formValues.responsibleName > 3 : true}   onChangeText={(text) => { onChange('responsibleName', text) }}/>

            <StyledInput icon='phone' value={formValues.responsiblePhone} placeholder="Telefone do responsável" keyboardType="numeric" validate={() => (formValues.responsiblePhone > 0) ? formValues.responsiblePhone >= 8 : true} onChangeText={(text) => { onChange('responsiblePhone', applyPhoneMask(text)) }}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep3