import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [autenticated, setautenticated] = useState(false);
  const [user, setuser] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/singleUser`,
        {
          withCredentials: true,
        }
      );
      setuser(res.data.user);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        alert(`Error: ${error.response.data.err}`);
      }
      setautenticated(false);
    }
  };

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    console.log(userToken);
    if (userToken) {
      setautenticated(true);
      fetchData();
    } else {
      setautenticated(false);
    }

    // localData = localStorage.getItem("autenticated");
    // if (localData === null || localData === false || localData === "false") {
    //   setautenticated(false);
    // }
    // if (localData === true || localData === "true") {
    //   setautenticated(true);
    //   fetchData();
    //   localData = localStorage.getItem("autenticated");
    //   setautenticated(localData);
    // }
  }, [autenticated]);

  return (
    <authContext.Provider
      value={{ autenticated, setautenticated, user, setuser }}
    >
      {children}
    </authContext.Provider>
  );
};
