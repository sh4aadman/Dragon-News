import { Link, NavLink } from "react-router";
import userIcon from "../../../assets/icons/user.png";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import { use } from "react";

function Navbar() {
  const { user, signoutUser } = use(AuthContext);

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

  const handleLogout = () => {
    signoutUser()
      .then(() => alert("Logged out successfully"))
      .catch((error) => alert(error));
  };

  return (
    <nav className="my-6 flex justify-between items-center">
      <div className="basis-40"></div>
      <ul className="flex items-center gap-4 text-base-300 text-lg leading-7">
        {navLinks}
      </ul>
      <section className="flex items-center gap-2.5">
        <Link to={"/auth/update"}>
          <img
            className="w-10 rounded-full border border-primary"
            src={user ? user.photoURL : userIcon}
            alt="user-icon"
          />
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-primary px-10 py-2 text-white font-semibold text-xl"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth"}
            className="bg-primary px-10 py-2 text-white font-semibold text-xl"
          >
            Login
          </Link>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
