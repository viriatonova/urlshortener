import React, { useState, useContext, useCallback, useEffect }  from 'react'
import UrlForm from "../components/UrlForm"
import UrlList from '../components/UrlList'
import { UserContext } from '../contexts/UserContext';
import { getData } from '../helpers/DataHelper';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [urlList, setUrlList] = useState([]);
    
    const handleList = useCallback( async () => {
        const dataList = await getData(user[1]);
        setUrlList(dataList)
    })
    
    useEffect(() => {
        handleList()
    },[])


    return (
        <main className="dash-wraped">
            <section className="w-1/2">
                <p className="capitalize text-2xl font-semibold tracking-wider">Welcome { user[0] }</p>
                <UrlForm />
            </section>
            <aside className="w-1/2 space-y-4">
                {urlList.map((urlList) => (
                    <UrlList key={urlList.id} url_shortener={urlList.url} id={urlList.id}/>
                ))}
            </aside>
        </main>
    )
}

export default Dashboard