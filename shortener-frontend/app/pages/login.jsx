import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
        <main className="main-wraped">
            <nav className="w-full py-6">
                <a href="/">Home</a>
            </nav>
            <LoginForm />
        </main>
    );
}

export default Login;