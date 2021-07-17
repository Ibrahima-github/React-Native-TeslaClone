import React from 'react';
import { View, Text, FlatList, Dimensions} from 'react-native';
import styles from '../CarItem/styles';
import cars from '../Carslist/cars';
import CarItem from '../CarItem/Index';

const Carslist = (props) => {
    return(
        <View style={styles.container}>

            <FlatList
            data={cars}
            renderItem={({item}) =><CarItem car={item} />}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Carslist;
