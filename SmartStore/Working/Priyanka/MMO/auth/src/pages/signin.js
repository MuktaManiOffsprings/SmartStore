import React from 'react';
import axios from 'axios';
const url = "http://localhost:5000/auth/validate";

class Signin extends React.Component {
    users = {
        Email: "",
        Password: ""
    };

    state = {
        users: this.users
    }
    usersAttributeChangeHandler = (event) => {
        this.users[event.target.name] = event.target.value;
        this.setState({
            users: this.users
        });

    }

    onSubmitClickHandler = () => {
        console.log(this.users);
        axios.post(url, this.users)
            .then(res => {
                console.log(res);
                //console.log("true block ");
                if(res.data){
                    window.location.href="/otp";
                }
                else{
                    console.log(res.data.message);

                }
            })
            .catch(err => {
                console.log(err);
                //console.log("false block ");

            })


    }

    render() {
        return (
            <div>
                <div>
                    <form className='sign-in'>
                    <div>
                        <input
                            type="text"
                            name="Email"
                            placeholder="Email Id"
                            value={this.state.users.Email}
                            onChange={this.usersAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="Password"
                            name="Password"
                            placeholder="Password"
                            value={this.state.users.Password}
                            onChange={this.usersAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            value="Save"
                            className='submit'
                            onClick={this.onSubmitClickHandler}>Sign In</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}


export default Signin;



