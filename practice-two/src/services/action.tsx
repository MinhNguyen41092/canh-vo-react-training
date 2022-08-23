import axios from 'axios';

const API_URL = 'http://localhost:3000/users'

export const addUser = async (data: any) => {
  try {
      return await axios.post(API_URL, data);
  } catch (error) {
      console.log('Error while calling addUser api')
  }
}

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log('Error while calling getUsers api')
  }
}