import axios from 'axios';
const KEY = 'AIzaSyAKMPel7wpoOoHnChabKVx6NJQY8FZ3kPw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})