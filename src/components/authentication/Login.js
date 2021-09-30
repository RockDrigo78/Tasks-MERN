import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [user, addUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;

    const onChange = (e) => {
        addUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log-in</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log-in"
                        />
                    </div>
                </form>

                <Link to={"/new-account"} className="enlace-cuenta">
                    Create New Account
                </Link>
            </div>
        </div>
    );
};

export default Login;
