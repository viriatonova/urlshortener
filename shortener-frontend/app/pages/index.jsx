import React, { useState, useContext }  from 'react'
import Nav from "../components/Nav"
import UrlForm from "../components/UrlForm"
import { UrlContext } from '../contexts/UrlContext'

export default function Home() {
    const { url, setUrl } = useContext(UrlContext)
    
    return (
        <main className="main-wraped">
            <Nav />
            <UrlForm />
            <article className="shortener">
                <a  className="text-xl tracking-wider text-white" href="">{ url }</a>
            </article>
        </main>
    )
}

