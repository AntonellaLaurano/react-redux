import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import GoogleButton from "react-google-button";

import { googleLogin, emailAndPasswordLogin } from "../actions/auth";



const LoginScreen = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        password: ""
        
    });

    const { email, password } = data;

    const handleChange = (event) => {
        const value = event.target.value;

        setData({
            ...data, //copia de la data
            [event.target.name]: value,
        })
    }

    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    }

    const handleEmailLogin = (event) => {
        event.preventDefault();

        if (email.trim() === "" || !email.trim().includes("@")) {
            return;
        }

        if (password.trim().length < 6 ) {
            return;
        }

        dispatch(emailAndPasswordLogin(email, password))
    }

    return (
        <div className="container animate__animated animate__zoomIn">
            <h3>Login</h3>
            <hr/>
            <div className="row container">
                <form onSubmit={handleEmailLogin} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input 
                                onChange={handleChange}
                                value={email}
                                id="icon_prefix1" 
                                className="materialize-textarea" 
                                type="email" 
                                name="email"
                            />
                            <label htmlFor="icon_prefix1">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input 
                                onChange={handleChange}
                                value={password}
                                id="icon_prefix2" 
                                className="materialize-textarea"  
                                type="password" 
                                name="password"
                            /> 
                            <label htmlFor="icon_prefix2">Password</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light btn" type="submit">Enviar</button>
                    <hr/>
                    <GoogleButton onClick={handleGoogleLogin} />
                    <Link to="/auth/register">Register in the platform</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen