import { MaterialIcons } from "@expo/vector-icons"
import { useIsFocused } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native"
import PatientCard from "../../components/PatientCard"
import Header from "../../components/shared/Header"
import IPatient, { IPatientMinimal } from "../../interfaces/IPatient"
import patientService from "../../services/PatientService"
import styles from "./style"


const HomePage : React.FC<{ navigation : any }> = ({ navigation }) => {
    const [patients, setPatients] = useState<IPatientMinimal[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(false)

    const isFocused = useIsFocused()

    const getPatients = async () => {
        setLoading(true)

        const res = await patientService.list()
        setPatients(res.data)

        setLoading(false)
    }

    const refreshPatients = async () => {
        setRefreshing(true)

        const res = await patientService.list()
        setPatients(res.data)

        setRefreshing(false)
    }

    useEffect(() => {getPatients()}, [isFocused])

    return (
        <View style={styles.page}>
            <Header title="Listagem de pacientes" />

            <View style={styles.content}>
                <FlatList
                    data={patients}
                    refreshing={refreshing}
                    onRefresh={refreshPatients}
                    renderItem={({ item }) => 
                        <PatientCard key={`${item.id}-${Date.now()}`}  data={item} onPress={() => navigation.navigate('patient-details', { patientId : item.id })}/>
                    }
                />
                { loading && <ActivityIndicator/> }
            </View>

            <Pressable style={styles.addButton} onPress={() => navigation.navigate('patient-register')}>
                <MaterialIcons name="add" size={48} color="#FFF" />
            </Pressable>
        </View>
    )
}

export default HomePage