import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../api/user"
import { getUserData } from "../../api/util"
import { AuthContext } from "../../authContext/AuthContext"

const Register = () => {

    const navigate = useNavigate()
    const { onLoginOrRegister } = useContext(AuthContext)

    const onRegisterHandler = async (event) => {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.target));

        const email = formData.email;
        const password = formData.password;
        const confPass = formData['confirm-pass'];

        if (password || email || confPass) {
            await register(email, password)
            const user = getUserData();
            if (user) {
                navigate('/')
                onLoginOrRegister(user)
            } else {
                return null;
            }
        }
    }

    return (
        <section id="register-page" className="register">
            <form onSubmit={onRegisterHandler} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}
export default Register