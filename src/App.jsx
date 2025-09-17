import { useState } from 'react';
function App() {
  console.log(useState('REACT'));
  let [newTechnology, setNewTechnology] = useState('ANGULAR');
 const [name , setName] = useState('TEST')
 const [email,setEmail] = useState('test@gmail.com')
 const [password ,setPassword] = useState('2421@123') ;

  const handleClick = () => {
    setNewTechnology('REACT');
  };
  const handleUpdateClick = () => {
    setName('NEW-TEST')
    setPassword('12345')
    setEmail('newtest@gmail.com')
  }
  return (
    <div>
      <h1>{newTechnology}</h1>
      <h1>{`${name} ${email} ${password}`}</h1>
      <button onClick={handleUpdateClick}>Click to update</button>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;

//hooks  => js function
//create three state variables like name , email , password ;
// update all this at once when user click on a button