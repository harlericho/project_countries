import logo from "./logo.svg";
import "./App.css";
import Country from "./components/Country";

function App() {
  return (
    <div className="container">
      <header className="row justify-content-center p-2">
        <hr />
        <h3 className="text-center display-5">Countries</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <hr />
        <Country />
      </header>
    </div>
  );
}

export default App;
