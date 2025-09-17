function App() {
  // Event handler function that triggers when the button is clicked.
  // Conventionally, event handler names start with "handle".
  const handleLoginClick = () => {
    alert('login click');
  };

  // Event handler function that accepts an argument.
  const handlePrintName = (name) => {
    alert(`hi ${name}`);
  };

  return (
    <div>
      {/* Directly passing an inline function as the event handler */}
      <button onClick={() => console.log('hi')}>Click</button>

      {/* Passing a predefined handler function without arguments */}
      <button onClick={handleLoginClick}>Login</button>

      {/* If the handler requires arguments, use an arrow function to pass them */}
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
