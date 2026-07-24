import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar/Navbar";

function AuthLayout() {
  return (
    <section className="w-5/6 mx-auto bg-base-100">
      <Navbar />
      <Outlet></Outlet>
    </section>
  );
}

export default AuthLayout;
