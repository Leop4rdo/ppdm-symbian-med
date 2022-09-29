import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import colors from "../../../styles/colors"
import styles from "./styles"

interface IStyledInput extends React.ComponentProps<typeof TextInput>{
    icon? : keyof typeof MaterialIcons.glyphMap
    validate ?: () => boolean
}

const StyledInput : React.FC<IStyledInput> = (props) => {
    const [hasFocus, setFocus] = useState(false);
    const [hasError, setError] = useState(false)
    
    const getColor = () => {
        if (hasFocus)
            return colors.BLUE
        else if (hasError)
            return colors.RED
        else 
            return colors.GRAY
    }

    const handleBlur = () => {
        if (props.validate) 
            setError(!props.validate())

        setFocus(false)
    }

    return (
        <View style={styles.fieldContainer}>
            <View style={{ ...styles.inputContainer, borderColor : getColor() }}>
                { props.icon && <MaterialIcons name={props.icon} size={32} color={getColor()} style={{marginRight : 8}}/> }
                <TextInput
                    { ...props}
                    style={styles.input}
                    placeholderTextColor={colors.LIGHT_GRAY}
                    onFocus={() => setFocus(true)}
                    onBlur={handleBlur}
                />
            </View>
        </View>
    )
}

export default StyledInput
