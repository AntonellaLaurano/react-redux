import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"

import { register } from "../actions/auth"; 
import PasswordVisibility from "../components/PasswordVisibility";

import "../css/RegisterScreen.css";
import "../css/Buttons.css";

const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        username: "",
        password: "",
        password2: ""
        
    });

    const { email, username, password, password2 } = data;

    const handleChange = (event) => {
        const value = event.target.value;

        setData({
            ...data, //copia de la data
            [event.target.name]: value,
        })
    }

    const handleRegister = (event) => {
        event.preventDefault(); //Evitar refresh

        if (email.trim() === "" || !email.trim().includes("@")) {
            return;
        }

        if (username.trim().length < 2) {
            return;
        }

        if (password.trim().length < 6 ) {
            return;
        } else {
            if (password.trim() !== password2.trim()) {
                return;
            }
        }

        dispatch(register(email, password, username));
    }

    return (
        <div className="RegisterScreen">
            <div className="container RegisterCard animate__animated animate__zoomIn">
                <h3>Register</h3>
                <hr/>

                <div className="row container">
                    <form onSubmit={handleRegister}  className="col s12">
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
                                <i className="material-icons prefix">assignment_ind</i>
                                <input 
                                    onChange={handleChange} 
                                    value={username}
                                    id="icon_prefix2" 
                                    className="materialize-textarea" 
                                    type="text"
                                    name="username" 
                                />
                                <label htmlFor="icon_prefix2">Username</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <PasswordVisibility />
                                <input 
                                    onChange={handleChange} 
                                    value={password}
                                    id="icon_prefix3" 
                                    className="materialize-textarea" 
                                    type="password"
                                    name="password" 
                                />
                                <label htmlFor="icon_prefix3">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <PasswordVisibility />
                                <input 
                                    onChange={handleChange} 
                                    value={password2}
                                    id="icon_prefix4" 
                                    className="materialize-textarea" 
                                    type="password"
                                    name="password2" 
                                />
                                <label htmlFor="icon_prefix4">Confirm Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light btn buttons btnRegister" type="submit">Register</button>   
                        <hr/>
                        <Link to="/auth/login">Login into account</Link>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegisterScreen;
