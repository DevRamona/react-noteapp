import { NavLink } from "react-router-dom";

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
         textDecoration: "underline",
          color: " #161616"
    }
  return (
    <header className="flex justify-between bg-orange-50">
      <NavLink to="/" className="text-5xl">
        #vanlife
      </NavLink>
      <nav>
        <div className="text-2xl ">
          <NavLink to="/host" className="mr-4" style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
          <NavLink to="/van" className="pl-4" style={({isActive}) => isActive ? activeStyle : null }>
            Van
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
