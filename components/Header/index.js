import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles'
const Header = () => {
    return(
        <View>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>
        </View>
    )
}

export default Header;