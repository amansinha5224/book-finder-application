import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <header>
      <nav className="fixed z-10 top-0 right-0 left-0 container mx-auto flex max-w-full flex-wrap items-center justify-between gap-4 px-10 py-4 bg-orange-100 shadow-2xl drop-shadow-xl">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="brand logo" />
          <h1 className="font-['Arial']-light text-2xl font- tracking-widest text-yellow-900">
            book<span className="font-bold">finder</span>
          </h1>
        </NavLink>
        <div className="grid grid-cols-3 gap-10 px-4">
          <NavLink to="/">
            <p className="font-semibold text-yellow-900 decoration-2 hover:underline">Home</p>
          </NavLink>
          <Link to="explore">
            <p className="font-semibold text-yellow-900 decoration-2 hover:underline">Explore</p>
          </Link>
          <Link to="about">
            <p className="font-semibold text-yellow-900 decoration-2 hover:underline">About Us</p>
          </Link>
        </div>
        <form
          method="get"
          className="flex items-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-full bg-white py-2 px-3  ring-1 hover:ring-2 ring-yellow-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-900"
            type="search"
            placeholder="Search Book(s)"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-yellow-700 px-4 py-2 font-semibold text-yellow-50 border-solid border-yellow-600 hover:border-2"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;