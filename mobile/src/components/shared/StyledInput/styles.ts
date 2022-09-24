import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
    container : {
        height : 56,
        width : '80%',
        margin : 12,
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