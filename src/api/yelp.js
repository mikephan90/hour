import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer DJonjKzB8UmeTdFlt-kebzNR20wKhuIetH3VAazV3Pr17n6iIaVupw7Xj9xn9YFc6Y66tiYUThSrYHyL7n6-fQbXsAGHIstDrkln6xJUyqMrrOEaX41j9JJlcBB5XnYx' 
    }
});