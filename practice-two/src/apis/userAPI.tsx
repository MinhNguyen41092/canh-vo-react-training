import axios from 'axios';

export const getData = async () => {
  const userData = await axios.get('http://localhost:3000/user');
  return userData.data.results
}