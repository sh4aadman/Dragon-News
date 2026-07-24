function Login() {
  return (
    <section className="bg-base-100 flex justify-center items-center min-h-screen">
      <section>
        <h1>Login your account</h1>
        <section className="">
          <fieldset className="fieldset">
            <label className="label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
            <section>
              <a className="link link-hover">Don't have an account? Register</a>
            </section>
          </fieldset>
        </section>
      </section>
    </section>
  );
}

export default Login;
