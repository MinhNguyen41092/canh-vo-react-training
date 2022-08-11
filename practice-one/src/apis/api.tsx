import axios from 'axios';


async function getData() {
  let res = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple');
  return res.data.results
}

export const data = getData()