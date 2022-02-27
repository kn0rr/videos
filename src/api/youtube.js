import axios from 'axios';

const KEY = 'AIzaSyC8sZ57cPPzkXsvQONBelLD4_6_l0uaK8w';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})