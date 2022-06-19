import React, { useState }  from 'react'
import Nav from "../components/Nav"
import Form from "../components/Form"

export default function Home() {
    const [ short, Setshort ] = useState("http://localhost:3000/89asd098") 
    
    return (
        <main className="main-wraped">
            <Nav />
            <Form />
            <article className="shortener">
                <a href="">{ short }</a>
            </article>
        </main>
    )
}

