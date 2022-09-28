import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Pressable, Text, Touchable, View } from "react-native"
import PatientRegisterFormStep1 from '../../components/forms/PatientRegister/Step1'
import PatientRegisterFormStep2 from '../../components/forms/PatientRegister/Step2'
import Logo from '../../components/shared/Logo'
import StyledButton from '../../components/shared/StyledButton'
import colors from '../../styles/colors'
import styles from './style'

const forms = [
    <PatientRegisterFormStep1 />,
    <PatientRegisterFormStep2 />,
]

const PatientRegisterPage = () => {
    const [ currentStep, setCurrentStep ] = useState(0)

    const handleSubmit = () => {
        if (currentStep <= forms.length - 1)
            setCurrentStep(currentStep + 1)
    }

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

            {forms[currentStep]}

            <StyledButton onPress={handleSubmit} text='Proximo'/>
        </View>
    )
}

export default PatientRegisterPage