import { useState } from 'react';
function App() {
  console.log(useState('REACT'));
  let [newTechnology, setNewTechnology] = useState('ANGULAR');
  console.log(newTechnology);

  const handleClick = () => {
    setNewTechnology('REACT');
  };
  return (
    <div>
      <h1>{newTechnology}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;

//hooks  => js function


//create three state variables like name , email , password ;

// update all this at once when user click on a button