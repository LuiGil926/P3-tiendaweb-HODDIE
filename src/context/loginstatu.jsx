import { createContext, useState, useEffect } from "react";

export const LoginStatusContext = createContext();

export const LoginStatusProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(() => {
    const savedStatus = localStorage.getItem("loginStatus");
    return savedStatus
      ? JSON.parse(savedStatus)
      : { status: false, message: "", user: null };
  });

  useEffect(() => {
    if (localStorage.getItem("loginStatus")) {
      localStorage.removeItem("loginStatus");
    }

    localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  }, [loginStatus]);

  return (
    <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginStatusContext.Provider>
  );
};
