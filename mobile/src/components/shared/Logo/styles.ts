import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    logo : {
        justifyContent : "center",
        alignItems : "center",
        
    },

    smallText : {
        fontSize : 22,
        textAlignVertical : 'center',
        color : colors.BLUE,
        fontFamily : fonts.POPPINS_SEMIBOLD,
        margin: 0,
        padding: 0,
    },

    bigText : {
        fontSize : 48,
        color : colors.BLUE,
        fontFamily : fonts.POPPINS_SEMIBOLD,
        margin: 0,
        marginTop : -20,
        padding: 0
    }
})

export default styles