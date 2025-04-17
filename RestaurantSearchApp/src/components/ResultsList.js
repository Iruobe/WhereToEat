import React from "react"; 
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native'
import ResultDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({title,results, navigation}) => {
    //closes any section without search results
    if (!results.length){
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data= {results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    //id refers to the specific business id of the result clicked on
                    //here it is then passed to ResultsShowScreen to display more info of the business clicked on
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                );
            }}
        />
    </View>

};

const styles = StyleSheet.create({
    title:{
        fontSise:18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultList)