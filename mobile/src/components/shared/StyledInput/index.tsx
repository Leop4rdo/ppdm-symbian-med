import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { TextInput, View } from "react-native"
import colors from "../../../styles/colors"

interface IStyledInput {
    value ?: string
    placeholder ?: string
    keyboardType ?: "default" | "numeric" | "email-address"
    onChangeText : (value : string) => void
    icon? : keyof typeof MaterialIcons.glyphMap
    error ?: string
    onBlur ?: () => void
}

const StyledInput : React.FC<IStyledInput> = ({value, placeholder, keyboardType, onChangeText, icon, error, onBlur}) => {
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
        <View>
            { icon && <MaterialIcons name={icon} size={24} color={getColor()}/> }
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