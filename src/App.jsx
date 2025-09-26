import React from 'react';
import Profile from './components/Profile';
import Header from './components/Header';
import { useState } from 'react';
 function App() {
    const [username , setUsername] = useState("test@123")
    console.log('app is running')
  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-4">PROPS DRILLING</h1>
      <Profile username={username}/>
      <Header username={username}/>

      <button className='px-10 py-4 bg-sky-500 rounded-xl text-white font-medium' onClick={()=>setUsername('newtest@123')}>Click</button>
    </div>
  );
}

export default App;
