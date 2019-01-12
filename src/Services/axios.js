import axios from 'axios/dist/axios';

const BASE_URL = 'https://randomuser.me/api';
const request = axios.create({
    baseURL: BASE_URL
});

class Api {
    getNewPerson = async () => request.get()
        .then(function (response) {
            // handle success
            return response.data.results[0];
        });
}

export default new Api();