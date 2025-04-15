import React from "react";
import {View,StyleSheet,Text} from 'react-native';


const ResultShowScreen = ({navigation}) => {
    //business id of result clicked on in ResultsList 
    //within SearchScreen parent component
    const id = navigation.getParam('id');
    return (
        <View>
            <Text>Results extra info Show Screen </Text>
            <Text> Business ID: {id}</Text>
        </View>
    );
}

const styles =StyleSheet.create ({

});

export default ResultShowScreen;