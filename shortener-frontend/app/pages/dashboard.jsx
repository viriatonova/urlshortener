import React, { useState, useCallback, useEffect }  from 'react'
import UrlList from "../components/UrlList"
import UrlForm from "../components/UrlForm"
import { getData } from '../helpers/DataHelper';


const Dashboard = () => {
    const [ userSection, setUserSection ] = useState("")
    const [ urlList, setUrlList ] = useState([])

    const apiData =  async () => {
        const tokenLocal = window.localStorage.getItem('token');
        const response = await getData(tokenLocal);
        const data = await response
        setUrlList(data)
    }
    
    useEffect(() => {
        const usernameLocal = window.localStorage.getItem('username')
        setUserSection(usernameLocal);
        return () => apiData()
    },[urlList])
    

    return (
        <main className="dash-wraped">
            <p className="w-full h-full capitalize text-2xl font-semibold tracking-wider">Welcome { userSection }</p>
            <UrlForm />
            <aside className="w-full h-full space-y-2 flex flex-col items-center">
                {urlList.map((urlList) => (
                    <UrlList key={urlList.id} item={urlList.key} id={urlList.id} access={urlList.views_access}/>
                )).reverse()}
            </aside>
        </main>
    )
}

export default Dashboard