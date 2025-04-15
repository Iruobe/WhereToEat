import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',   
    headers: {
        Authorization: 'Bearer im not putting my key lol'
    }
});