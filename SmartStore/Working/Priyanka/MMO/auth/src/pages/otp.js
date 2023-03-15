import React from 'react';
import axios from 'axios';
const url1= "http://localhost:5000/auth/validate/otpvalidation";


class Otp extends React.Component{
    user={userOtp:""};
    state = {user: this.user}
    userAttributeChangeHandler = (event)=>{
        console.log("event passed");
        this.user[event.target.name] = event.target.value;
        this.setState({
            user: this.user
        });
    }

    onSubmitClickHandler = () => {
        console.log(this.user);
        axios.post(url1, this.user)
            .then(res => {
                console.log(res);
                //console.log("true block ");
                if(res.data){
                    window.location.href="/";
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
    render(){
        return (
            <div className='otpbox'>
                <div className='wrapper'>
                    <form className='otp'>
                    <div>
                        <input
                            type="Text"
                            name="Password"
                            placeholder="Otp"
                            value={this.state.user.userOtp}
                            onChange={this.userAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            value="Save"
                            className='submit'
                            onClick={this.onSubmitClickHandler}>Submit</button>
                    </div>
                </form>
        
                </div>
            </div>
        );
    }
}

export default Otp;