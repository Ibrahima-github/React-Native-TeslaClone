import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../CarItem/styles';
import StyledButton from '../StyledButton/Index';

const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>
        <ImageBackground style={styles.image} source={require('../../assets/images/ModelS.jpeg')}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model s</Text>
          <Text tsyle={styles.subTitle}>Starting at 69 000€</Text>
        </View>
        <StyledButton/>‡
        
      </View>
    )
}

export default CarItem;