import './App.css';
import List from './components/List';

function App(props) {
  const store = props.store
  const arrayOfLists = store.lists.map((list) =>
    <List key={list.id}
          header={list.header}
          cards={list.cardIds.map((id) => store.allCards[id])}
    />)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
        <div className="App-list">
          {arrayOfLists}
        </div>
    </div>
  );
}

export default App;
