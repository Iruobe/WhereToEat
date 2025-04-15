import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default ()=> {
    //Results refer to the restaurants obtained from the API
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage]= useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);

        } catch  (err){
            setErrorMessage('Something Went Wrong Try Again Later')
        }
    };
    useEffect(()=> {
        searchApi('pasta');
    },[])

    return [searchApi,results,errorMessage];
};