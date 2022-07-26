import React, { useEffect} from 'react';

function UseEffectExample() {
  useEffect(() => {
    //Được gọi khi component render
    console.log('render!');
    // useEffect trả về một hàm ,
    // hàm trả về đó là đóng vai trò như
    // là componentWillUnmount
    return () => console.log('unmounting...');
  })
  return (
    <h1>Hello</h1>
  )
} 

export default UseEffectExample