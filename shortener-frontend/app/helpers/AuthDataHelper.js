export const getAllData = async () => {
    try {
        const api = await fetch('http://127.0.0.1:8181/api/v1/', {method:'GET'})
        const response = await api.json();
        return response
    } catch (e) {
        console.log(e);
    }
}


export const postData = async (data) => {
    try {
        const url = 'http://127.0.0.1:8181/api/v1/';

        let dataApi = {
            'url': data.url,
            'utl_temporaria':data.url_temporaria,
        }

        const api = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
        
        const response = await api.json()
        return response   

    } catch (e) {
        console.log(e);
    }
}

export const deleteData = async (id) => {
    try {
        const url = `http://127.0.0.1:8181/api/v1/${id}/`;

        const api = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

    } catch (e) {
        console.log(e);
    }
}

export const updateData = async (id) => {
    try {
        const url = `http://127.0.0.1:8181/api/v1/${id}/`;

        let dataApi = {
            'url': data.url,
        }

        const api = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })

    } catch (e) {
        console.log(e);
    }
}
