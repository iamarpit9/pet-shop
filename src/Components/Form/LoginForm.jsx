import { useState } from "react";
import "./style.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    pass: "",
  });

  const [err, setErr] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!credentials.pass || !credentials.email)
      setErr("Enter email and password");
    else setErr("");

    createUserWithEmailAndPassword(auth, credentials.email, credentials.pass)
      .then(async (res) => {
        // eslint-disable-next-line no-unused-vars
        const user = res;
        // console.log(user);
        setActive(!active);
        navigate("/account");
        setCredentials({ email: "", pass: "" });
      })
      .catch((errr) => {
        console.log(errr);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (!credentials.pass || !credentials.email)
      setErr("Enter email and password");
    else setErr("");

    signInWithEmailAndPassword(auth, credentials.email, credentials.pass)
      .then(async (res) => {
        // eslint-disable-next-line no-unused-vars
        const user = res;
        // console.log(user);
        setActive(!active);
        navigate("/account");
        setCredentials({ email: "", pass: "" });
      })
      .catch((errr) => {
        console.log(errr);
      });
  };

  const handleSubmit = (e) => {
    login ? handleLogIn(e) : handleSignUp(e);
  };

  return (
    <div>
      <form className={active ? "login-form active" : "login-form"}>
        <h3>{login ? "sign in" : "sign up"}</h3>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          id="email"
          className="box"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          id="password"
          className="box"
          value={credentials.pass}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, pass: e.target.value }))
          }
        />
        <input
          type="submit"
          value={login ? "sign in" : "sign up"}
          onClick={(e) => handleSubmit(e)}
          className="btn sign-in"
        />
        <p className="errMsg">{err}</p>
        <button
          className="link"
          onClick={(e) => {
            e.preventDefault();
            setLogin(!login);
          }}
        >
          {login ? "sign up" : "sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
