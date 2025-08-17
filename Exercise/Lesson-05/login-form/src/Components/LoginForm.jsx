import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handlClick = () => {
    setShowPassword(!showPassword);

    /*
            Another solution is:
            if (showPassword) {
              setShowPassword(false);
            } else {
              setShowPassword(true);
            }
          */
  };

  return (
    <>
      <div>
        <input type="email" placeholder="Email" className="email-input" />
      </div>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="password-input"
        />
        <button onClick={handlClick} className="show-button">
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="signup-button">Sign up</button>
    </>
  );
}
