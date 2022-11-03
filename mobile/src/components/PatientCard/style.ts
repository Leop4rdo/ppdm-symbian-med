import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    card : {
        width : '100%',
        height : 100,

        flexDirection : 'row',

        borderRadius : 8,
        borderWidth : 1,
        borderColor : colors.LIGHT_BLUE,

        overflow : 'hidden',

        marginVertical : 8
    },

    blueSide : {
        width : 24,
        height : "100%",

        backgroundColor : colors.LIGHT_BLUE
    },

    content : {
        height : "100%",

        justifyContent : 'space-around',
        gap : 32,

        padding : 16
    },

    label : {
        fontSize : 10,
        color : colors.LIGHT_GRAY
    },

    name : {
        color : colors.LIGHT_BLUE,
        fontWeight : "bold",
        fontSize : 20
    },

    email : {
        color : colors.GRAY
    }
})

export default styles