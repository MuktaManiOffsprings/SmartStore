import { useLocation, useParams } from 'react-router';
import axios from 'axios';

//var { globalVariable } = require("../shared/global");

function LoginWithOTP() {
    //const { userName } = useParams();
    const location = useLocation();

    const loginWithOTP = () => {
        let email = document.getElementById('txtEmail').value;
        let otp = document.getElementById('txtOTP').value;
        let accessToken = location.state.accessToken;

        let credentials = { email: email, otp: otp };
        let config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        axios.post('http://localhost:5000/authorised/local/validateWithOTP', credentials, config)
            .then(res => {
                if (res.status === 200) {
                    //store token and add it to request header
                    console.log(res.data)

                    window.location.href = '/landing';
                } else {
                    alert("Verification Failed.");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <hr />
            <label htmlFor="txtEmail">Email address</label>
            {/*<input type="email" id="txtEmail" value={userName} readOnly={true} />*/}
            <input type="email" id="txtEmail" value={location.state.email} readOnly={true} />
            <hr />
            <label htmlFor="txtOTP">OTP</label>
            <input type="text" id="txtOTP" />
            <hr />
            <button type="button" id="btnLogin" onClick={loginWithOTP}>Submit OTP</button>

        </div>
    )
}

export default LoginWithOTP;