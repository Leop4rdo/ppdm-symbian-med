import { Button, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.LIGHT_BLUE
    },

    content : {
        backgroundColor : '#FFF',
        flex : 1,

        borderTopRightRadius : 24,
        borderTopLeftRadius : 24,
        
        paddingTop : 16,
        paddingHorizontal : 24
    },

    header : {
        width : '100%',

        justifyContent  : 'center',
        alignItems  : 'center',
    },

    infoContainer : {
        flexDirection : "column",
        marginVertical : 48,
    },

    info : {
        marginVertical : 12,
    },

    label : {
        color : colors.GRAY,
        fontSize : 14,
    },

    infoValue : {
        color : colors.LIGHT_BLUE,
        fontSize : 20,
        fontWeight : '500'
    },

    name : {
        color : colors.LIGHT_BLUE,
        fontSize : 24,
        fontWeight : '500'
    },

    buttonContainer : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },

    button : {
        padding: 8,
        flexDirection : 'row',
        borderRadius : 8,
        justifyContent : 'center',
        alignItems : 'center',
    },

    buttonText : {
        marginLeft : 8,
        color : '#FFF',
        fontSize : 20,
        fontWeight : 'bold'
    }
})

export default styles