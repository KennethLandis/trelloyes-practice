import './App.css';

function App(props) {
  const store = props.store
  console.log(store)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    </div>
  );
}

export default App;
