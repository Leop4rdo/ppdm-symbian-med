import { useState } from "react"
import { FlatList, Text, View } from "react-native"
import Header from "../../components/shared/Header"
import IPatient from "../../interfaces/IPatient"
import styles from "./style"


const HomePage : React.FC<{ navigation : any }> = ({ navigation }) => {
    const [patients, setPatients] = useState<IPatient[]>([])

    return (
        <View style={styles.page}>
            <Header title="Listagem de pacientes" />

            <View style={styles.content}>
            </View>
        </View>
    )
}

export default HomePage