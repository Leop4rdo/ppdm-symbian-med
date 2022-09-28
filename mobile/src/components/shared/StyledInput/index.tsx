import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { TextInput, View } from "react-native"
import colors from "../../../styles/colors"
import styles from "./styles"

interface IStyledInput {
    value ?: string
    placeholder ?: string
    style ?: any
    keyboardType ?: "default" | "numeric" | "email-address"
    onChangeText : (value : string) => void
    icon? : keyof typeof MaterialIcons.glyphMap
    error ?: string
    onBlur ?: () => void
}

const StyledInput : React.FC<IStyledInput> = ({value, placeholder, keyboardType, onChangeText, icon, error, onBlur, style}) => {
    const [hasFocus, setFocus] = useState(false);
    
    const getColor = () => {
        if (hasFocus)
            return colors.BLUE
        else if (error)
            return colors.RED
        else 
            return colors.GRAY
    }

    const handleBlur = () => {
        setFocus(false);
        if (onBlur) onBlur()
    }

    return (
        <View style={{ ...styles.container, ...style, borderColor : getColor() }}>
            { icon && <MaterialIcons name={icon} size={32} color={getColor()} style={{marginRight : 8}}/> }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType || "default"}
                placeholderTextColor={colors.LIGHT_GRAY}
                onFocus={() => setFocus(true)}
                onBlur={handleBlur}
            />
        </View>
    )
}

export default StyledInput