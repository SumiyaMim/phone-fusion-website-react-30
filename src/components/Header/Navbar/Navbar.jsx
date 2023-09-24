import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="flex justify-between max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto items-center py-6">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>            
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-600 font-semibold" : "font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>            
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-600 font-semibold" : "font-semibold"
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>            
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-600 font-semibold" : "font-semibold"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
