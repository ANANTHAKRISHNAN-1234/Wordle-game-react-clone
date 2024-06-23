import "./App.css";
import Game from "./pages/Game/Game";
import Home from "./pages/Game/Home/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
