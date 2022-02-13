import logo from './logo.svg';
import './App.css';

function Top() {
  return (
    <header>
      <h1>This is the top of the page</h1>
    </header>
  );
}

function Middle(props) {
  return (
    <section>
      <p>This is where {props.name} goes</p>
      <ul style={{ textAlign:"left"}}>
        {funArray.map((item) => <li>{item}</li>)}
      </ul>
    </section>
  );
}

function Bottom(props) {
  return (
    <footer>
      <p>That's all {props.year}</p>
    </footer>
  );
}

const funArray = [
  "one",
  "ni",
  "trois"
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Middle name="contents" items={funArray} />
        <Bottom year={new Date().getFullYear()} />
      </header>
    </div>
  );
}

export default App;
