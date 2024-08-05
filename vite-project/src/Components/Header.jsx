import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between bg-orange-50">
      <Link to="/" className="text-5xl">
        #vanlife
      </Link>
      <nav>
        <div className="text-2xl ">
          <Link to="/about">About</Link>
          <Link to="/van" className="pl-4">
            Van
          </Link>
        </div>
      </nav>
    </header>
  );
}
