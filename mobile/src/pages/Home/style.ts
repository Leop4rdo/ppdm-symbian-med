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
        borderTopLeftRadius : 24,
        
        paddingHorizontal : 24
    },

    addButton : {
        borderRadius : 100,

        backgroundColor : colors.BLUE,

        position : 'absolute',
        right : 16,
        bottom : 16
    },

    search : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 12,
    },

    searchInput : {
        flexGrow : 1,
        color : colors.BLACK,
        borderBottomColor : colors.GRAY,
        borderBottomWidth : 1,
        marginRight : 16
    }
})

export default styles