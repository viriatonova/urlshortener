import React, { useState }  from 'react'
import Nav from "../components/Nav"
import UrlForm from "../components/UrlForm"

export default function Home() {
    const [ short, Setshort ] = useState("http://localhost:3000/89asd098") 
    
    return (
        <main className="main-wraped">
            <Nav />
            <UrlForm />
            <article className="shortener">
                <a href="">{ short }</a>
            </article>
        </main>
    )
}

