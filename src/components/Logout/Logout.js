import { useNavigate } from "react-router-dom"
import { logout } from "../../api/user"


const Logout = async () => {
await logout()
const navigate = useNavigate();
navigate('/')
}

export default Logout;