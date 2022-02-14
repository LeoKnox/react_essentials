import './App.css';

function SecretComponent() {
  return <h1>Hidden data for secret members</h1>
}

function RegularComponent() {
  return <h1>Public Message</h1>
}

function App(props) {
  if (props.secret) {
    return <SecretComponent />
  } else {
    return <RegularComponent />
  }
}

export default App;
