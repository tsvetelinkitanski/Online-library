import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";

const Logout = () => {
  const { logoutHandler, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    logoutHandler();
  }, []);
};

export default Logout;
