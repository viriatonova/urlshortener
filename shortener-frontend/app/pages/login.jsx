import LoginForm from "../components/LoginForm";

/**
 * 
 * Login page
 */
const Login = () => {

    return (
        <main className="main-wraped">
            <nav className="w-full py-6">
                <a className="btn-login" href="/">Home</a>
            </nav>
            <LoginForm />
        </main>
    );
}


export default Login;