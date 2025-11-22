import { Link }  from "react-router-dom";

const Home = () => {
    return (
        <div id="home-page">
            <h1>Pick an Option:</h1>
            <div id="login-register">
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
            </div>
        </div>
    );
};

export default Home;