import { useEffect, useRef, useState } from "react"
import { Animated, Easing, Text } from "react-native"
import { isEmpty } from "../../../utils/validation"
import StyledInput from "../../shared/StyledInput"
import { IPatientRegisterFormProps } from "./Step1"
import styles from "./styles"

const PatientRegisterFormStep3 : React.FC<IPatientRegisterFormProps> = ({ onChange, formValues }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const [ errors, setErrors ] = useState(["",""])
    
    const handleError = (index : number, error : string) => [
        setErrors(
            errors.map((err, idx) => 
                (idx === index) ? error : err
            )
        )
    ]

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

            <StyledInput icon='person' placeholder="Nome do responsável" error={errors[0]} onChangeText={(text) => { onChange('responsibleName', text) }} onBlur={() => { if (isEmpty(formValues.patientName) || formValues.patientName.length <= 3) handleError(0, "Nome Inválido!")}}/>

            <StyledInput icon='phone' placeholder="Telefone do responsável" error={errors[1]} onChangeText={(text) => { onChange('responsiblePhone', text) }} onBlur={() => { if (isEmpty(formValues.responsiblePhone)) handleError(1, "Telefone Invalido!")}}/>
        </Animated.View>
    )
}

export default PatientRegisterFormStep3