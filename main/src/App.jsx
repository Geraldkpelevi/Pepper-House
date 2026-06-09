import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Routing from "./components/routes/Routing";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />
      <Routing login={login} logout={logout} />
    </div>
  );
}

export default App;
