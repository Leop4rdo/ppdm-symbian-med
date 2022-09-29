import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    fieldContainer : {
        width : "80%",
        flexDirection: "column",
        margin : 16,
    },

    errorMessage : {
        fontSize : 14,
        color : colors.RED,
        fontFamily : fonts.POPPINS_MEDIUM,
        marginTop : 8
    },

    inputContainer : {
        height : 56,
        paddingHorizontal : 8,
        borderRadius : 12,
        borderWidth : 2,

        flexDirection : "row",
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    input : {
        width : '100%',
        height : '100%',
    }
})

export default styles