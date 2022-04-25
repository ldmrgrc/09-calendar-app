import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LoginScreen.css";

export const LoginScreen = () => {
    return (
        <>
            <div className="container">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="card shadow-lg">
                        <div class="row g-0">

                            <div className="col-lg-5 col-md-5 d-none d-sm-block">
                                <img className="img-login rounded-start" src="https://res.cloudinary.com/dbjzts2r9/image/upload/v1650391975/cld-sample.jpg" alt="loginImage" />
                            </div>

                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="card-body">
                                    {/* login */}
                                    <h2 className="card-title text-center mb-5">Bienvenido</h2>
                                    <form>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="email"
                                                className="visually-hidden-focusable form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="form-control"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="password"
                                                className="visually-hidden-focusable form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="form-control"
                                                id="password"
                                                type="password"
                                                placeholder="password"
                                            />
                                        </div>

                                        <div className="mb-4 form-checkbox">
                                            <input
                                                className="form-checkbox-input"
                                                id="remember"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-checkbox-label ms-2"
                                                htmlFor="remember"
                                            >
                                                Recordarme
                                            </label>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                    <div className="my-3">
                                        <span>No tienes una cuenta? <Link to='/register' >Registrate</Link> </span>
                                    </div>

                                    {/* Redes Sociales */}
                                    <div className="contianer w-100 my-3">
                                        <div className="row text-center">
                                            <div className="col-12">Iniciar Sesión</div>
                                        </div>

                                        <div className="d-flex justify-content-evenly mt-3">

                                            <button className="btn btn-floating twitter " type="button">
                                                <i className="bi bi-twitter"></i>
                                            </button>

                                            <button className="btn btn-floating apple" type="button">
                                                <i className="bi bi-apple"></i>
                                            </button>

                                            <button className="btn btn-floating github" type="button">
                                                <i className="bi bi-github"></i>
                                            </button>

                                            <button className="btn btn-floating google" type="button">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 48 48"
                                                    className="LgbsSe-Bz112c"
                                                >
                                                    <g>
                                                        <path
                                                            fill="#EA4335"
                                                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                                        ></path>
                                                        <path
                                                            fill="#4285F4"
                                                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                                        ></path>
                                                        <path
                                                            fill="#FBBC05"
                                                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                                        ></path>
                                                        <path
                                                            fill="#34A853"
                                                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                                        ></path>
                                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                                    </g>
                                                </svg>
                                            </button>

                                            <button className="btn btn-floating facebook" type="button">
                                                <i className="bi bi-facebook"></i>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
