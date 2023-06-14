import Routers from "./Components/Routes/Routers.js";

import "./Styles/css/app.css";
import "./Styles/css/profil.css";

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
