import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../CarItem/styles';
import styles from '../CarItem/styles';

const StyleButton = (props) => {
    const {type, content, onPress} = props;
    const backgrounColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? 'FFFFFF' : '171A20';
    return(
        
        <View style= {styles.container}>
            <Pressable 
            style={[styles.button, {backgroundColor: backgrounColor}]} 
            onPress={() => console.warn("hey, pressed")} >
                <Text style={[styles.text, {color: textColor}]}>{content} </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton; 