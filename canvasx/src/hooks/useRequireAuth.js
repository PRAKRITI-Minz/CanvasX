import { useEffect, useState } from "react";

export default function useRequireAuth() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setShowLogin(true);
    }
  }, []);

  return {
    showLogin,
    closeLogin: () => setShowLogin(false)
  };
}
