import "../css/Login.css";
import axios from 'axios';
import { useNavigate } from "react-router";

//var { globalVariable } = require("../shared/global");

function Login() {
    const google = () => {
        window.open("http://localhost:5000/authorised/google", "_self")
    }

    const navigate = useNavigate();

    const login = () => {
        let email = document.getElementById('txtEmail').value;
        let password = document.getElementById('txtPassword').value;
        let credentials = { email, password };

        axios.post('http://localhost:5000/authorised/local/validate', credentials)
            .then(res => {
                if (res.status === 200) {
                    //let url = `/loginwithOTP/${email}`;
                    //globalVariable.token = res.data.data;
                    //window.open(url, "_self");
                    //window.location.href = url;

                    navigate('/loginwithOTP', { state: { email: email, accessToken: res.data.data.accessToken } })

                } else {
                    window.open("http://www.google.com", "_self");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <button onClick={google}>Google Login</button>

            <div>
                <hr />
                <label htmlFor="txtEmail">Email address</label>
                <input type="email" id="txtEmail"/>
                <hr/>
                <label htmlFor="txtPassword">Password</label>
                <input type="password" id="txtPassword"/>
                <hr/>
                <button type="button" id="btnLogin" onClick={login}>Login</button>

            </div>

            {/*<section className="vh-100">*/}
            {/*    <img src="../shared/smartlogo.jpg" width="30" height="30" />*/}
            {/*    <h1>Welcome to the login page : Thank you for visiting.</h1>*/}
            {/*    <div className="container-fluid h-custom">*/}
            {/*        <div className="row d-flex justify-content-center align-items-center h-100">*/}
            {/*            <div className="col-md-9 col-lg-6 col-xl-5">*/}
            {/*                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"*/}
            {/*                    className="img-fluid" alt="Sample image" />*/}
            {/*            </div>*/}
            {/*            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">*/}


            {/*                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">*/}
            {/*                    <p className="lead fw-normal mb-0 me-3" style="font-family:Times New Roman">Sign in with</p>*/}
            {/*                    <button type="button" id="btnGoogle" onClick={google} className="btn btn-primary btn-floating mx-1">*/}
            {/*                        <i style="font-family:Times New Roman">Google</i>*/}
            {/*                    </button>*/}
            {/*                </div>*/}

            {/*                <div className="divider d-flex align-items-center my-4">*/}
            {/*                    <p className="text-center fw-bold mx-3 mb-0" style="font-family:Times New Roman">Or</p>*/}
            {/*                </div>*/}

            {/*                */}{/*<!-- Email input -->*/}
            {/*                <div className="form-outline mb-4">*/}
            {/*                    <input type="email" id="txtEmail" className="form-control form-control-lg"*/}
            {/*                        placeholder="Enter a valid email address" />*/}
            {/*                    <label className="form-label" htmlFor="txtEmail" style="font-family:Times New Roman">Email address</label>*/}
            {/*                </div>*/}

            {/*                */}{/*<!-- Password input -->*/}
            {/*                <div className="form-outline mb-3">*/}
            {/*                    <input type="password" id="txtPassword" className="form-control form-control-lg"*/}
            {/*                        placeholder="Enter password" />*/}
            {/*                    <label className="form-label" htmlFor="txtPassword" style="font-family:Times New Roman">Password</label>*/}
            {/*                </div>*/}

            {/*                <div className="d-flex justify-content-between align-items-center">*/}
            {/*                    <a href="#!" className="text-body" style="font-family:Times New Roman">Forgot password?</a>*/}
            {/*                </div>*/}

            {/*                <div className="text-center text-lg-start mt-4 pt-2">*/}
            {/*                    <button type="button" id="btnLogin" onClick={login} className="btn btn-primary btn-lg"*/}
            {/*                        style="padding-left: 2.5rem; padding-right: 2.5rem; font-family:Times New Roman;">Login</button>*/}
            {/*                    <p className="small fw-bold mt-2 pt-1 mb-0" style="font-family:Times New Roman">Don't have an account? <a href="#!"*/}
            {/*                        className="link-danger" style="font-family:Times New Roman">Register</a></p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div >
    );
}


export default Login;