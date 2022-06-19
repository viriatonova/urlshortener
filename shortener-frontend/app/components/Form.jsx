import React, { useState }  from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    url: yup.string().required(),
    url_temp: yup.string().required(),
}).required();

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
        console.log(checked)
    }

    const onSubmit = async (data) => {
        console.log(data)
    };

    return (
        <form action="" onSubmit={onSubmit} className="shortener-form">
            <fieldset className="input-text">
                <input 
                name="url" 
                className="w-full" 
                type="text" 
                placeholder="Ex.: www.google.com/asda809?search=coisa+nada" 
                {...register ("url")}
                />
                {
                errors.url && 
                errors.url.type === "required" && 
                <p className="erro-msg">Url is riquered</p> 
                }
                <label htmlFor="url">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                </label>
            </fieldset>
            <fieldset className="w-full flex justify-end items-center">
                <label htmlFor="url-temp" className="text-lg mr-4">Temporary URL </label>
                <input 
                type="checkbox"
                onChange={handleClick} 
                checked={checked} 
                name="url-temp" 
                id="url-temp" 
                className="temp-checkbox"/>
            </fieldset>
            <button type="submit" className="btn-primary">Click</button>
        </form>
    )
}

export default Form