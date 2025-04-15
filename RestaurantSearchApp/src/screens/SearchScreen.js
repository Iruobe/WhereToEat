import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';


const SearchScreen =({})=>{
    //term referes to the value used to search the yelp API
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage]= useResults();
    //Funtion customises results displaced by price
    const filterResultsByPrice= (price) =>{
        //price === '$' || '$$' || '$$$' || '$$$$
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        //newTerm Refers to the value used to update setTerm
    <View style={{flex:1}}>
        <SearchBar term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}/>
        {errorMessage ?<Text>{errorMessage}</Text>: null}
        {/* <Text>The are the restaurants {results.length}</Text> */}
        <ScrollView>
            <ResultList  results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultList  results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultList  results={filterResultsByPrice('$$$')} title= "Big Spender"/>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;