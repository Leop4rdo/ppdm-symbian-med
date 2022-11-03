import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { screenWidth } from "../../styles/utils";

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.LIGHT_BLUE
    },

    content : {
        backgroundColor : '#FFF',
        flex : 1,
        borderTopRightRadius : 24,
        borderTopLeftRadius : 24
    }
})

export default styles