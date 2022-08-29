import axios from 'axios';

// Interface
import { IUser } from '../interfaces/IUser';

const API_URL = 'https://canh-fake-user-api.herokuapp.com/users'

export const getUsers = async (): Promise<IUser[]> => {
  const res =  await axios.get(API_URL);
  return res.data
}

export const addUser = async (data: IUser) => {
  return await axios.post(API_URL, data);
}

export const getUser = async (id: string | undefined) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data
}

export const editUser = async (data: IUser, id?: string) => {
  return await axios.put(`${API_URL}/${id}`, data);
}

export const deleteUser = async (id?: number) => {
  return await axios.delete(`${API_URL}/${id}`);
}