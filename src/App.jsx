function App(){
  const handleLoginClick = ()=>{
    alert('login click')
  }
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