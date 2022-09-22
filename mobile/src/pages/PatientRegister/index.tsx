import React from 'react'
import { Image, Text, View } from "react-native"
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


            <StyledButton onPress={() => {}} text='Proximo'/>
        </View>
    )
}

export default PatientRegisterPage