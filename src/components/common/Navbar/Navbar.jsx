import { Link, NavLink } from "react-router";
import userIcon from "../../../assets/icons/user.png"

function Navbar() {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

    return <nav className="mt-5 flex justify-between items-center">
        <div className="basis-40"></div>
        <ul className="flex items-center gap-4 text-base-300 text-lg leading-7">
            { navLinks}
        </ul>
        <section className="flex items-center gap-2.5">
            <img className="w-10" src={userIcon} alt="user-icon" />
            <Link to={"/auth"} className="bg-primary px-10 py-2 text-white">Login</Link>
        </section>
  </nav>;
}

export default Navbar;
