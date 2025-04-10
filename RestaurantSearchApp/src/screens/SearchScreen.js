import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen =()=>{
    //term referes to the value used to search the yelp API
    const [term,setTerm] = useState('');
    return (
        //newTerm Refers to the value used to update setTerm
    <View>
        <SearchBar term={term} 
        onTermChange={newTerm=> setTerm(newTerm)} 
        onTermSubmit={() => console.log('Term Submitted Successfully') }/>
        <Text>Search Screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;