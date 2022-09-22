import { MaterialIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import colors from "../../../styles/colors"
import styles from "./styles"

const Logo = () => {
    return (
        <View style={styles.logo}>
            <MaterialIcons name="healing" size={80} color={colors.BLUE}/>
            <Text style={styles.smallText}>Symbian</Text>
            <Text style={styles.bigText}>MED</Text>
        </View>
    )
}

export default Logo