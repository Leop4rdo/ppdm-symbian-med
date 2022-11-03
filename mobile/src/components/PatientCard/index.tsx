import { Pressable, Text, View } from "react-native"
import IPatient from "../../interfaces/IPatient"
import styles from "./style"

interface IPatientCardProps {
    data : IPatient
    onPress : () => void
}

const PatientCard : React.FC<IPatientCardProps> = ({ data, onPress }) => {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.blueSide}></View>
            <View style={styles.content}>
                <Text style={styles.label}>Paciente</Text>
                <Text style={styles.name}>Sr(a) {data.name}</Text>
                <Text style={styles.email}>{data.email}</Text>
            </View>
        </Pressable>
    )
}

export default PatientCard
