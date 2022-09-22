import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Children, useState } from "react";
import buttonStyles from "./style";
import colors from "../../../styles/colors";

interface IButtonProps {
    onPress : () => void,
    text? : string,
}

const StyledButton : React.FC<IButtonProps> = ({onPress, text}) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={buttonStyles.base}>
            <View >
                <Text style={[buttonStyles.text]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default StyledButton;
