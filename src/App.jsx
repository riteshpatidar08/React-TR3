import React from 'react';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold m-4">PROPS DRILLING</h1>
      <Profile/>
      <Header/>
    </div>
  );
}

export default App;
