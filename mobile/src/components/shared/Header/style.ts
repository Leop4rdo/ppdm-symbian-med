import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : 80,
        paddingHorizontal : 24,

        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    logo : {
        height : 64,
        width : 64,
        resizeMode : 'contain'
    },

    title : {
        color : '#FFF',
        fontSize : 24,
        fontWeight : "bold",

        width : '75%'
    }
})

export default styles