import { MaterialIcons } from "@expo/vector-icons"
import { useIsFocused } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from "react-native"
import PatientCard from "../../components/PatientCard"
import Header from "../../components/shared/Header"
import StyledInput from "../../components/shared/StyledInput"
import IPatient, { IPatientMinimal } from "../../interfaces/IPatient"
import patientService from "../../services/PatientService"
import colors from "../../styles/colors"
import styles from "./style"


const HomePage : React.FC<{ navigation : any }> = ({ navigation }) => {
    const [patients, setPatients] = useState<IPatientMinimal[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [patientSearch, setPatientSearch] = useState('')

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

    const getMorePatients = async () => {
        if (loading || patients.length < 24)
            return

        setLoading(true)

        const res = await patientService.list({ limit : 24, offset : patients.length, name : (patientSearch.length > 0) ? patientSearch : undefined})
        setPatients(res.data)

        setLoading(false)
    }

    const searchPatients = async (text : string) => {
        setPatientSearch(text)
        setLoading(true)

        const res = await patientService.list({limit : 24, name : text})
        setPatients(res.data)


        setLoading(false)
    }

    useEffect(() => {getPatients()}, [isFocused])

    return (
        <View style={styles.page}>
            <Header title="Listagem de pacientes" />

            

            <View style={styles.content}>
                <View style={styles.search}>
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Pesquise um paciente" 
                        onChangeText={searchPatients}
                        value={patientSearch}
                    />
                    <MaterialIcons name="search" size={24} color={colors.GRAY} />
                </View>
                <FlatList
                    data={patients}
                    refreshing={refreshing}
                    onRefresh={refreshPatients}
                    renderItem={({ item }) => 
                        <PatientCard key={`${item.id}-${Date.now()}`}  data={item} onPress={() => navigation.navigate('patient-details', { patientId : item.id })}/>
                    }
                    onEndReached={getMorePatients}
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