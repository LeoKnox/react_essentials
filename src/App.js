import './App.css';
import blob from "./blob.png";

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
        {funObjects.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      img src={blob};
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

const funObjects = funArray.map((item, i) => ({id: i, item: item}));
console.log(funObjects);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Middle name="contents" items={funObjects} />
        <Bottom year={new Date().getFullYear()} />
      </header>
    </div>
  );
}

export default App;
