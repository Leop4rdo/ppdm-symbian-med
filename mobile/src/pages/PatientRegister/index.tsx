import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, Pressable, Text, View } from "react-native"
import PatientRegisterFormStep1 from '../../components/forms/PatientRegister/Step1'
import PatientRegisterFormStep2 from '../../components/forms/PatientRegister/Step2'
import PatientRegisterFormStep3 from '../../components/forms/PatientRegister/Step3'
import Logo from '../../components/shared/Logo'
import StyledButton from '../../components/shared/StyledButton'
import colors from '../../styles/colors'
import { isEmail, isEmpty } from '../../utils/validation'
import styles from './style'


const PatientRegisterPage = () => {
    const [ currentStep, setCurrentStep ] = useState(0)

    const [ formValues, setFormValues ] = useState({
        patientName : "",
        patientEmail : "",
        patientPhone : "",
        patientCellphone : "",
        responsibleName : "",
        responsiblePhone : ""
    })
    
    const handleSubmit = () => {
        if (currentStep <= forms.length - 1) {
            if (forms[currentStep].isValid()) 
                setCurrentStep(currentStep + 1)

            return
        }
    }
    
    const handleChange = (key : keyof typeof formValues, value : string) => {
        setFormValues({
            ...formValues,
            [key] : value
        })
    }

    const forms = [
        {  
            component : <PatientRegisterFormStep1 onChange={handleChange} formValues={formValues}/>, 
            isValid : () => formValues.patientName.length >= 3 && isEmail(formValues.patientEmail)
        },
        {  
            component : <PatientRegisterFormStep2 onChange={handleChange} formValues={formValues}/>, 
            isValid : () => formValues.patientPhone.length >= 8 && formValues.patientCellphone.length >= 8
        },
        {  
            component : <PatientRegisterFormStep3 onChange={handleChange} formValues={formValues}/>, 
            isValid : () => formValues.responsibleName.length >= 3 && formValues.responsiblePhone.length >= 8
        }
    ]

    return (
        <View style={styles.page}>
            <Image style={styles.headerBg} source={require('../../../assets/geometric-background.png')}/>
            <View style={styles.header}>
                <Logo />  
                
                <View style={styles.titleContainer}>
                    {
                        currentStep > 0 &&
                        <Pressable onTouchStart={() => setCurrentStep(currentStep - 1)}>
                            <MaterialIcons style={styles.backButton} name="arrow-back" size={24} color={colors.BLUE} />
                        </Pressable>
                    }
                    <Text style={styles.pageTitle}>Cadastro de paciente</Text> 
                </View>         
            </View>

            {forms[currentStep].component}

            <StyledButton onPress={handleSubmit} text={currentStep < forms.length - 1 ? 'Proximo' : 'cadastrar'}/>
        </View>
    )
}

export default PatientRegisterPage