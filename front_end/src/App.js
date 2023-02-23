import Routers from "./Components/Routes/Routers.js";

import "./Styles/app.css";
import "./Styles/profil.css";

// le composant qui contient toute la logique de notre application
function App() {
  return (
    <div className="app">
      {/* le composant de route */}
      <Routers />
    </div>
  );
}

export default App;
