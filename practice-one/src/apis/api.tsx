import axios from 'axios';

export const getData = async () => {
  const res = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple');
  return res.data.results
}

