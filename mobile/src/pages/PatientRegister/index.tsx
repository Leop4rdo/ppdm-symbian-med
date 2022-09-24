import React from 'react'
import { Image, Text, View } from "react-native"
import PatientRegisterFormStep1 from '../../components/forms/PatientRegister/Step1'
import PatientRegisterFormStep2 from '../../components/forms/PatientRegister/Step2'
import Logo from '../../components/shared/Logo'
import StyledButton from '../../components/shared/StyledButton'
import styles from './style'

const PatientRegisterPage = () => {

    return (
        <View style={styles.page}>
            <Image style={styles.headerBg} source={require('../../../assets/geometric-background.png')}/>
            <View style={styles.header}>
                <Logo />  
                <Text style={styles.pageTitle}>Cadastro de paciente</Text>          
            </View>

            {/* <PatientRegisterFormStep1 /> */}
            <PatientRegisterFormStep2 />

            <StyledButton onPress={() => {}} text='Proximo'/>
        </View>
    )
}

export default PatientRegisterPage