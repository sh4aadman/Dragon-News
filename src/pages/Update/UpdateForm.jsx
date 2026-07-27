import { useState } from "react";
import { Link } from "react-router";

function UpdateForm({ user, setUser, signinUser, updateUser, navigate }) {
  const [name, setName] = useState(user.displayName ?? "");
  const [photoUrl, setPhotoUrl] = useState(user.photoURL ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser(email, password)
      .then((response) => {
        const signedInUser = response.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...signedInUser, displayName: name, photoURL: photoUrl });
            alert("User information updated successfully");
            navigate("/");
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  return (
    <section className="mt-10 mb-10 bg-base-100 flex justify-center">
      <section className="p-20 w-1/2 bg-white rounded-sm">
        <h1 className="text-primary font-semibold text-4xl text-center ">
          Update your account
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your name"
              required
            />

            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your photo url"
              required
            />

            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your email address"
              required
            />

            <label className="label mt-6 mb-3 text-primary font-semibold text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full p-5 border-0 rounded-sm placeholder:text-neutral"
              placeholder="Enter your password"
              required
            />

            {errorMessage && (
              <p className="text-secondary text-xs">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="my-7 mt-4 bg-primary py-4.5 text-white font-semibold text-xl rounded-sm"
            >
              Update
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

export default UpdateForm;
