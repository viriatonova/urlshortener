import React, { useState, useContext, useCallback, useEffect }  from 'react'
import UrlForm from "../components/UrlForm"
import UrlList from '../components/UrlList'
import { UserContext } from '../contexts/UserContext';
import { getAllData } from '../helpers/AuthDataHelper';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [ short, Setshort ] = useState("http://localhost:3000/89asd098")
    const [ acess, Setacess ] = useState(0)
    const [urlList, setUrlList] = useState([]);
    
    const handleList = useCallback( async () => {
        const dataList = await getAllData();
        setUrlList(dataList)
    })
    
    useEffect(() => {
        handleList()
    },[])


    return (
        <main className="dash-wraped">
            <section className="w-1/2">
                <p className="capitalize text-2xl font-semibold tracking-wider">Welcome { user }</p>
                <UrlForm />
                <article className="shortener">
                    <a href="">{ short }</a>
                </article>
                <article className="mt-12">
                    <p>Link amount acess: {acess}</p>
                </article>
            </section>
            <aside className="w-1/2 space-y-4">
                {urlList.map((urlList) => (
                    <UrlList key={urlList.id_shortener} url_shortener={urlList.url_shortener}/>
                ))}
            </aside>
        </main>
    )
}

export default Dashboard