import React, { useState }  from 'react'
import Nav from "../components/Nav"
import UrlForm from "../components/UrlForm"
import UrlList from '../components/UrlList'

const Dashboard = () => {
    const [ short, Setshort ] = useState("http://localhost:3000/89asd098") 
    
    return (
        <main className="dash-wraped">
            <section className="w-1/2">
                <UrlForm />
                <article className="shortener">
                    <a href="">{ short }</a>
                </article>
                <article className="mt-12">
                    Statistic link
                </article>
            </section>
            <aside className="w-1/2">
                <UrlList />
            </aside>
        </main>
    )
}

export default Dashboard