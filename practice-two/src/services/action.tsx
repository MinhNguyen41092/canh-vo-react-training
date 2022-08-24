import axios from 'axios';

const API_URL = 'http://localhost:3000/users'

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log('Error while calling getUsers api')
  }
}

export const addUser = async (data: any) => {
  try {
      return await axios.post(API_URL, data);
  } catch (error) {
      console.log('Error while calling addUser api')
  }
}

export const getUser = async (data: any) => {
  try {
      return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
      console.log('Error while calling getUser api')
  }
}

export const editUser = async (data: any, id?: string) => {
  try {
      return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
      console.log('Error while calling editUser api')
  }
}

export const deleteUser = async (id?: number) => {
  try {
      return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
      console.log('Error while calling deleteUser api')
  }
}