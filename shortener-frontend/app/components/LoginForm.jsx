import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
// import { LoginContext } from "../Context/LoginContext";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LoginUser from '../helpers/LoginHelper';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();

/**
 *
 * @returns Formulário Login da aplicação
 */
const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const router = useRouter();

    const onSubmit = async (data) => {
        const login = await LoginUser(data);
        if (login.token ) router.push('/dashboard')
    };
    
    return (
        <form
            onSubmit={ handleSubmit(onSubmit) }
            className="shortener-form w-2/3 space-y-10"
        >
            <fieldset className="input-text">
                <input 
                    name="username" 
                    className="w-full" 
                    type="username" 
                    placeholder="Ex.: viriatosampaio@mailinator.com" 
                    {...register ("username")}
                    />
                    {
                    errors.username && 
                    errors.username.type === "required" && 
                    <p className="erro-msg">Email is required</p> 
                    }
                <label htmlFor="username">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </label>
            </fieldset>
            <fieldset className="input-text">
                <input 
                    name="password" 
                    className="w-full" 
                    type="password" 
                    {...register ("password")}
                    />
                    {
                    errors.password && 
                    errors.password.type === "required" && 
                    <p className="erro-msg">Password is required</p> 
                    }
                <label htmlFor="password">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </label>
            </fieldset>
            <button type="submit" className="btn-primary">Login</button>
        </form>
    );
}


export default LoginForm;