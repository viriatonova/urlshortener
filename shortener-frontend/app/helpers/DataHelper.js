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
        const url = 'http://http://127.0.0.1:8181/api/v1/';

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
    } catch (e) {
        console.log(e);
    }
}
