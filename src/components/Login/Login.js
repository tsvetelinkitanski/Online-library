import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../api/util";

import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { onLoginOrRegister } = useContext(AuthContext);

  const onLoginHandler = async (event) => {
    event.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(event.target));

    if (password || email) {
      await login(email, password);
      const user = getUserData();
      if (user) {
        navigate("/");
        onLoginOrRegister(user);
      } else {
        return null;
      }
    }
  };

  return (
    <section id="login-page" className="login">
      <form onSubmit={onLoginHandler} id="login-form" action="" method="">
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </span>
          </p>
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};
export default Login;
