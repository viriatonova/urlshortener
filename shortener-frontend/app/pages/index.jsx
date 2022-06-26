import React, { useState, useContext }  from 'react'
import Nav from "../components/Nav"
import UrlForm from "../components/UrlForm"
import { UrlContext } from '../contexts/UrlContext'

/**
 * 
 * Home page
 */
export default function Home() {
    const { url, setUrl } = useContext(UrlContext)

    
    return (
        <main className="main-wraped">
            <Nav />
            <UrlForm />
            <article className="shortener">
                <a  
                className="text-md tracking-wider text-white 
                hover:text-pink-300 hover:underline" 
                href={`http://localhost:8181/${url}`} target="_blank">{ `http://localhost:8181/${url}`}</a>
            </article>
        </main>
    )
}

