function App(){

    // NOTE event handler function which triggers on the button or element click  where you have passed this fn
    // Event name always start with handle 

  const handleLoginClick = ()=>{
    alert('login click')
  }
  //NOTE event handler for another event 
  const handlePrintName = (name)=>{
    alert(`hi ${name}`)
  }
  return <div>
    //directly pass handler function in button
<button onClick={()=>console.log('hi')}>Click</button>
<button onClick={handleLoginClick}>Login</button>
//if you have to pass arugment in handler
<button onClick={()=>{handlePrintName('test')}} >Print Name</button>
  </div>
}

export default App