import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/user";
import { AuthContext } from "../../authContext/AuthContext";

const Logout = () => {
  const { logoutHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => {
      console.log("logout");
      navigate("/");
      logoutHandler();
    });
  }, []);
};

export default Logout;
