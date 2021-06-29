import logo from "./logo.svg";
import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "./components/Container/Container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container />
    </div>
  );
};

export default App;
