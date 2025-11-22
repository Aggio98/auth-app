
const Login = () => {
    return (
        <div id="container">
            <h1>Login</h1>
            <form id='login-form'>
                <label>Username</label>
                <input id="username" type='text' placeholder="Username" autoComplete="off" required></input>
                <label>Password</label>
                <input id="password" type='password' placeholder="Password" required></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;