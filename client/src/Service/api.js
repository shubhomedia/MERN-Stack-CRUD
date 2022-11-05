import axios from 'axios';

const URL = '';


export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log('Error Withle Calling and User API', error);
    }

}