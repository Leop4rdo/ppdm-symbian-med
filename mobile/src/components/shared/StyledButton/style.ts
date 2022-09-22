import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";


const buttonStyles = StyleSheet.create({
    base : {
        width : 200,
        height : 48,
        margin : 16,

        borderRadius : 12,

        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor: colors.BLUE
    },

    text : {
        color : '#FFF',
        textTransform: "uppercase",
        fontSize: 18
    },
})

export default buttonStyles
