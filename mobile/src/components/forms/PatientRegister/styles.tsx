import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-evenly'
    },

    info : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.GRAY,
        textAlign : 'center'
    }
})

export default styles