import './App.css';

function SecretComponent() {
  return <h1>Hidden data for secret members</h1>
}

function RegularComponent() {
  return <h1>Public Message</h1>
}

function App(props) {
  return (
    <>
      {props.secret ? <SecretComponent /> :
      <RegularComponent />}
    </>
  );
}

export default App;
