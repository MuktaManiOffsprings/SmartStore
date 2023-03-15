import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    //Navigate to Smart Auth 
    //const auth = () => {
    //    let callbackURL = "http://localhost:3500/land"
    //    navigate('http://localhost:3000/login', { state: { callbackURL: callbackURL} })
    //}

    return (
        <div>
            {/*//Screen with a button to navigate to Auth*/}
        </div>
    );
}

export default Home;