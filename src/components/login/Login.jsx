import React, { useRef } from "react";

import "./login.scss";
export default function Login() {
  let email = useRef();
  let password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"login"}>
      <div className={"heading"}>Login</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor={"email"}>Email</label>

        <input required ref={email} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input required ref={password} type="password" name="password" />
        <input className={"blue"} type="reset" value="Reset" />
        <input className={"blue"} type="submit" value="Submit" />
      </form>
      <div className={"change"}>
        Dont have account? <span> Register</span>
      </div>
    </div>
  );
}
