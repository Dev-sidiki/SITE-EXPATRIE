import Routers from "./Components/Routes/Routers.js";
import "./Styles/App.css";

// le composant qui contient toute la logique de notre application
function App() {
  return (
    <div className="App">
      {/* le composant de route */}
      <Routers />
    </div>
  );
}

export default App;
