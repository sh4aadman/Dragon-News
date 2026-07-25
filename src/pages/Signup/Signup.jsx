import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/Auth/AuthProvider";

function Signup() {
  const { setUser, createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((response) => {
        const user = response.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
      });
  };

  return (
    <section className="mt-10 mb-10 bg-base-100 flex justify-center">
      <section className="p-20 w-1/2 bg-white rounded-sm">
        <h1 className="text-primary font-semibold text-4xl text-center ">
          Register your account
        </h1>
        <hr className="my-12 w-full mx-auto text-base-200" />
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="label mb-3 text-primary font-semibold text-xl">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your name"
              required={true}
            />
            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your photo url"
              required={true}
            />
            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your email address"
              required={true}
            />
            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your password"
              required={true}
            />
            <button
              type="submit"
              className="my-7 mt-4 bg-primary py-4.5 text-white font-semibold text-xl rounded-sm"
            >
              Register
            </button>
            <section>
              <p className="text-center font-semibold text-base-300 leading-6">
                Already have an account?{" "}
                <Link to={"/auth"} className="text-[#F75B5F]">
                  Login
                </Link>
              </p>
            </section>
          </fieldset>
        </form>
      </section>
    </section>
  );
}

export default Signup;
