import React, { useContext }from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { postData } from '../helpers/DataHelper';
import { UrlContext } from '../contexts/UrlContext'

const schema = yup.object({
    url: yup.string().required(),
    url_temporary: yup.string().required(),
}).required();

const UrlForm = () => {
    const { url, setUrl } = useContext(UrlContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = async (data) => {
        const response = await postData(data);
        const urlResponse = await response
        setUrl(urlResponse)
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="shortener-form">
            <p className="self-start mt-6">Insert Url here</p>
            <fieldset className="input-text">
                <input 
                name="url"
                id="url"
                className="w-full" 
                type="text" 
                placeholder="Ex.: www.google.com/asda809?search=coisa+nada" 
                {...register ("url")}
                />
                {
                errors.url && 
                errors.url.type === "required" && 
                <p className="erro-msg">Url field is riquered</p> 
                }
                <label htmlFor="url">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                </label>
            </fieldset>
            <fieldset className="w-full flex justify-end items-center">
                <label htmlFor="url_temporary" className="text-lg mr-4">Temporary URL</label>
                <input 
                type="checkbox"
                name="url_temporary" 
                id="url_temporary" 
                className="temp-checkbox"
                {...register ("url_temporary")}
                />
            </fieldset>
            <button type="submit" className="btn-primary">Enviar</button>
        </form>
    )
}

export default UrlForm