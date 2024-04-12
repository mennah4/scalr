import { Link } from "react-router-dom";
import PathConstants from "../routes/pathContants";
export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="shadow bg-gray-800 flex justify-between items-center py-4 px-4">
          <h1 className="text-white font-bold text-lg px-28">
            <Link to={PathConstants.OVERVIEW}>SCALR</Link>
          </h1>
          <div class="relative flex-1 pr-64">
            <input type="text" class="w-full bg-gray-50 border py-1 px-3 border-gray-300 text-gray-900 text-sm rounded block" placeholder="Search Mockups, Logos, Design Templates..." required />
          </div>
        <nav className="navbar">
          <ul className="nav-list flex justify-between items-center text-gray-400">
            <li className="nav-item mx-2">
              <Link to={PathConstants.OVERVIEW}>Overview</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={PathConstants.ANALYTICS}>Analytics</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to={"risk"}>Risk managment</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
