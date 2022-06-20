import React from 'react'

const LoginUser = async (data) => {
    try {
        const url = 'http://127.0.0.1:8181/login/';

        let dataApi = {
            'username': data.username,
            'password': data.password,
        }

        const api = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
        
        const response = await api.json();

        return response

    } catch (e) {
        console.log(e);
    }
}

export default LoginUser;
