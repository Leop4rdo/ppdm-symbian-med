import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";
import { clamp, screenHeight } from "../../styles/utils";

const styles = StyleSheet.create({
    page : {
        flex : 1,
        justifyContent : "space-between",
        alignItems : "center",
        paddingVertical : 64
    },

    header : {
        width : "100%",
        alignItems : "center",
    },

    headerBg : {
        width : "100%",
        position : "absolute",
        zIndex : -1,
    },

    pageTitle : {
        fontSize : 24,
        fontFamily : fonts.POPPINS_MEDIUM,
        color : colors.BLUE,
        marginVertical : 16
    },

    titleContainer : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
    },

    backButton : {
        marginRight : 8
    },

    formContainer : {
        flex : 2,
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
    }
})

export default styles;