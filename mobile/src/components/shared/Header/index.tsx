import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import styles from "./style"


interface IHeaderProps {
    title : string
    onReturn ?: () => void
}

const Header : React.FC<IHeaderProps> = ({ title, onReturn }) => {

    return (
        <View style={styles.header}>
            <View style={{flexDirection : "row", alignItems : 'center'}}>
                {onReturn && <Pressable onPress={onReturn}><MaterialIcons name="arrow-back-ios" size={24} color='#FFF' /></Pressable>}
                <Text style={styles.title}>{title}</Text>
            </View>

            <Image style={styles.logo} source={require('../../../../assets/logo/logo-white.png')}/>
        </View>
    )
}

export default Header