import { Alert, Pressable, Text, TextInput, View } from "react-native"
import styles from "./style"
import Header from "../../components/shared/Header"
import { useState } from "react"
import IPatient from "../../interfaces/IPatient"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "../../styles/colors"
import patientService from "../../services/PatientService"
import { useEffect } from "react"
import { useIsFocused } from "@react-navigation/native"


const PatientPage : React.FC<{ route : any, navigation : any }> = ({ route, navigation }) => {
    const { patientId } = route.params
    const isFocused = useIsFocused()

    const [data, setData] = useState<IPatient>()

    const getPatient = async () => {
        const res = await patientService.findById(patientId)

        setData(res.data)
    }

    const deletePatient = async () => {
        if (!data) return

        const res = await patientService.remove(data.id)

        if (res.errors)
            Alert.alert(res.errors[0])

        navigation.goBack()
    }

    useEffect(() => { getPatient() }, [isFocused])

    return (
        <View style={styles.page}>
            <Header onReturn={() => navigation.goBack()} title="Listagem de pacientes" />
            

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.label}>Paciente</Text>
                    <Text style={styles.name}>{data?.name}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text style={styles.label}>E-mail</Text>
                        <Text style={styles.infoValue}>{data?.email}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.label}>Telefone</Text>
                        <Text style={styles.infoValue}>{data?.phone}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.label}>Celular</Text>
                        <Text style={styles.infoValue}>{data?.cellphone}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.label}>Nome do responsável</Text>
                        <Text style={styles.infoValue}>{data?.responsibleName}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.label}>Telefone do responsável</Text>
                        <Text style={styles.infoValue}>{data?.responsiblePhone}</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, { backgroundColor : colors.GREEN }]} onPress={() => navigation.navigate('patient-register', data)}>
                        <MaterialIcons name='edit' size={24} color='#FFF'/>
                        <Text style={styles.buttonText}>Editar</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={deletePatient}>
                        <MaterialIcons name='delete-forever' size={24} color={colors.RED}/>
                        <Text style={[styles.buttonText, {color : colors.RED}]}>Excluir</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default PatientPage