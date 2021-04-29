import axios from 'axios';

export function fetchUrl(url){
    return axios.get(url);
}
// THIS IS THE WAY TO FETCH API -GOOD