import React from 'react'

export const RegisterScreen = () => {
    return (
        <>
            <div className="bg-primary">
                <div className="position-absolute top-50 start-50 translate-middle">

                    <div className="card shadow-lg">
                        <div className="row g-0">
                            <div className="col-lg-5 col-md-5 d-none d-sm-block">
                                <img src="https://res.cloudinary.com/dbjzts2r9/image/upload/v1650404484/minion-4_zfsswz.jpg" className="img-register rounded-start" alt="..." />
                            </div>

                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="card-body">
                                    <h2 className="card-title text-center mb-5">Register</h2>
                                    <form>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="First Name"
                                                        placeholder="name@example.com"
                                                        autoComplete='off' />
                                                    <label htmlFor='First Name'>First Name</label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="Last Name" placeholder="Password" />
                                                    <label htmlFor="Last Name">Last Name</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row mt-3">
                                            <div className='col-12'>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="form-floating">
                                                    <input type="password" className="form-control" id="Password" placeholder="Password" />
                                                    <label htmlFor="Password">Password</label>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className="form-floating">
                                                    <input type="password" className="form-control" id="Re-Password" placeholder="Password" />
                                                    <label htmlFor="Re-Password">Password</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-grid my-3">
                                            <button className="btn btn-primary" type='submit'>Register</button>
                                        </div>
                                    </form>

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
    )
}
