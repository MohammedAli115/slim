import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Team />
    </div>
  );
}

export default App;
