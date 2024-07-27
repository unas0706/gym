import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [adminAutenticated, setAdminAutenticated] = useState(false);
  const [users, setUsers] = useState();
  const [filter, setFilter] = useState();
  const changeUsers = (arg) => {
    const newUsers = users.filter((ele) => {
      return ele.name.toLowerCase().includes(arg.toLowerCase());
    });
    setFilter(newUsers);
  };

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/allusers", {
        withCredentials: true,
      });
      if (res.data.sucess) {
        setUsers(res.data.data);
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.err}`);
      }
    }
  };

  useEffect(() => {
    const adminToken = Cookies.get("adminToken");
    if (adminToken) {
      setAdminAutenticated(true);
      fetchAllUsers();
      setFilter(users);
    } else {
      setAdminAutenticated(false);
    }
  }, [adminAutenticated]);
  return (
    <AdminContext.Provider
      value={{
        adminAutenticated,
        setAdminAutenticated,
        users,
        setUsers,
        changeUsers,
        filter,
        setFilter,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
