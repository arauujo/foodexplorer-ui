import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password });
      handleSignInSuccess(response.data);
    } catch (error) {
      handleSignInError(error);
    }
  }

  function handleSignInSuccess(data) {
    const { user, token } = data;
    localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
    localStorage.setItem("foodexplorer:token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setData({ user, token });
    alert(data.message);
  }

  function handleSignInError(error) {
    if (error.response?.data) {
      alert(error.response.data.message);
    } else {
      alert("Não foi possível autenticar.");
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("foodexplorer:token");

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
