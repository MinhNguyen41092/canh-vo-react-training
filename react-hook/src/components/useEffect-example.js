import React, {useState ,useEffect} from 'react';

const tabs = ['posts', 'comments', 'albums']

function UseEffectExample() {
  const [arrays, setArrays] = useState([])
  const [type, setType] = useState('posts')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(arrays => setArrays(arrays))
  }, [type])

  return (
    <div>
      <h1>useEffect Ex</h1>
      <div>
      {tabs.map(tab => (
        <button 
          key={tab}
          style={type === tab? {
            color: '#fff',
            backgroundColor: '#333',
          } : {}}
          onClick={() => setType(tab)}
        >

          {tab}
        </button>
      ))}
    </div>
    <ul>
      {arrays.map(array => (
        <li key={array.id}>{array.title || array.name}</li>
      ))}
    </ul>
    </div>
  )
} 

export default UseEffectExample