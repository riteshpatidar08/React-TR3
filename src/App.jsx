import { useState } from "react";

function App(){
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) =>{
console.log(event.target.value)
setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
console.log(event.target.value)
  }
  return (
    <div>
      <h1>FORM HANDLING---</h1>
      <h1>GETTING VALUES OUT OF THE FORM INPUT FIELDS AND SUBMIT THE VALUES AS AN OBJECT</h1>
      <form>
        <label>Email</label>
        <input onChange={handleEmailChange} type="email" name="email"  />
        <label>Password</label>
        <input onChange={handlePasswordChange} type="password" name="password" />
      </form>
      <p>Email : {email}</p>
    </div>
  )
}

export default App;