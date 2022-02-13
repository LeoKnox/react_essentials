import logo from './logo.svg';
import './App.css';

function Top() {
  return (
    <header>
      <h1>This is the top of the page</h1>
    </header>
  );
}

function Middle() {
  return (
    <section>
      <p>This is where content goes</p>
    </section>
  );
}

function Bottom() {
  return (
    <footer>
      <p>That's all</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Middle />
        <Bottom />
      </header>
    </div>
  );
}

export default App;
