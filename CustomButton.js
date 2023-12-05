import React from "react";
import { TouchableOpacity, Text} from "react-native";

export default function CustomButton(props){
    return (
        <TouchableOpacity 
            onPress={props.action}
            style={{
                backgroundColor: props.color,
                width: 170,
                height: 55,
                borderRadius: 27.5, // La mitad de la altura para hacerlo ovalado
                justifyContent: 'center',
                alignItems: "center"  
            }}
        >
            <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}
