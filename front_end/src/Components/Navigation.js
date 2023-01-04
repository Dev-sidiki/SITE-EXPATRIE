import React from "react";
import { Link } from "react-router-dom";

// ce composant notre menu de navigation
const Navigation = () => {
  return (
    <nav>
      <div>
        <ul className="center-menu">
          <li>
            {/* une navigation qui mène à la page 1 */}
            <Link to={"/"}>page1</Link>
          </li>

          <li>
            {/* une navigation qui mène à la page 2 */}
            <Link to={"/page-2"}>page2</Link>
          </li>

          <li>
            {/* une navigation qui mène à la page 3 */}
            <Link to={"/page-3"}>page3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
