import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
    const [user, addUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    });

    const { name, email, password, confirmPass } = user;

    const onChange = (e) => {
        addUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        //validate empty fields

        //password min 6 characters

        //verify 2 passwords

        //pass to action
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Create Account</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPass"
                            name="confirmPass"
                            placeholder="repeat password"
                            value={confirmPass}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register"
                        />
                    </div>
                </form>

                <Link to={"/"} className="enlace-cuenta">
                    Go back to login...
                </Link>
            </div>
        </div>
    );
};

export default NewAccount;
