import React from 'react';
import axios from 'axios';
const url = "https://localhost:5000/auth/a";

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

    onSaveClickHandler = () => {
        console.log(this.users);
        axios.post(url, this.users)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
                            onClick={this.onSaveClickHandler}>Sign In</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}


export default Signin;
