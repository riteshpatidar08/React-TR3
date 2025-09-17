function App() {
  // NOTE event handler function which triggers on the button or element click  where you have passed this fn..
  //NOTE Event name always start with handle..
  
  const handleLoginClick = () => {
    alert('login click');
  };
  //NOTE event handler for another event
  const handlePrintName = (name) => {
    alert(`hi ${name}`);
  };
  return (
    <div>
      //NOTE directly pass handler function in button
      <button onClick={() => console.log('hi')}>Click</button>
      <button onClick={handleLoginClick}>Login</button>
      //NOTE if you have to pass argument in handler use a callback fn to call
      the handler which is accepting arguments
      <button
        onClick={() => {
          handlePrintName('test');
        }}
      >
        Print Name
      </button>
    </div>
  );
}

export default App;
