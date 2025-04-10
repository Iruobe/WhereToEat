import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar =({term,onTermChange,onTermSubmit})=>{
    return (
    <View style={styles.backgroundStyle}>
        {/* Feather icon */}
        <Feather name="search"  color="black" style={styles.iconStyle} />
        <TextInput 
        autoCapitalize='none'
        //autoCorrect={false}
        style= {styles.inputStyle} 
        placeholder='Search' 
        value={term} 
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}/>
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal:15,
        flexDirection: 'row',

    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15
    }
});

export default SearchBar;