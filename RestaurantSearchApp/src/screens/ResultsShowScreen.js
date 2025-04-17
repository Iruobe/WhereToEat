import React, {useState,useEffect} from "react";
import {View,StyleSheet,Text,FlatList,Image} from 'react-native';
import yelp from "../api/yelp";


const ResultShowScreen = ({navigation}) => {
    //null indicates when the screen is first rendered there is no data yet available
    //upon rerendering result retrieves a value
    const[result,setResult]= useState(null);
    //business id of result clicked on in ResultsList 
    //within SearchScreen parent component
    const id = navigation.getParam('id');


    //Result refer to the business
    //uses business id to append yelp.js url for future api requests to name,photos,etc
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    //Runs get result just once to prevent multiple api requests
    useEffect(()=>{getResult(id)}, []);

    //return null in the event result has no value 
    // to prevent error on first render
    if (!result){
        return null;
    }

    return (
        <View>
            <Text>Results extra info Show Screen </Text>
            <Text> Business ID: {id}</Text>
            <Text>{result.name}</Text>
            <FlatList
            horizontal 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item})=> {
                return <Image style={styles.image} source={{uri:item}}/>
            }}
            ></FlatList>
        </View>
    );
}

const styles =StyleSheet.create ({
    image:{
        height:200,
        width:300
    }
});

export default ResultShowScreen;