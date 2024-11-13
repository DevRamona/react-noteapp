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
        #vanlife in the city. What do you think about this
      </NavLink>
      <nav>
        <div className="text-2xl flex ">
          <NavLink to="/host" className="mr-4" style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
          <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
          <NavLink to="/van" className="pl-4" style={({isActive}) => isActive ? activeStyle : null }>
            Van
          </NavLink>
          <NavLink to="/login" ><img src="./icons8-login-48.png" alt="login" className="w-10 ml-3"/></NavLink>
        </div>
      </nav>
    </header>
  );
}
