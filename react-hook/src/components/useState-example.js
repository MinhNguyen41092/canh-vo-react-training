import React, { useState} from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]


function UseStateExamples() {

  const [count, setCount] = useState(1)
  const [gift, setGift] = useState()
  const [job, setJob] = useState()
  const [jobs, setJobs] = useState([])

  const handleIncrease = () => {
    setCount(count + 1)
  }
  
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  const handleSubmit = () => {
    setJobs(prev => [...prev, job])
    setJob('')
  }

  return (
    <div className="App" style={{padding: 30}}>

      <div>
        <h1>useState Ex1</h1>
        <h3>{count}</h3>
        <button onClick={handleIncrease}>Increase</button>
      </div>

      <div>
        <h1>useState Ex2</h1>
        <h3>{gift || 'No gift yet'}</h3>
        <button onClick={randomGift}>Get Gift</button>
      </div>

      <div>
        <h1>useState Ex3</h1>
        <input
          value={job}
          onChange={e => setJob(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>  

    </div>
  );
}

export default UseStateExamples