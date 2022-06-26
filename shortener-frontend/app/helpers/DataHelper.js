/**
 * GET method to private api
 * 
 * @param {string} token backend token to access
 * @returns response from api
 */
export const getData = async (token) => {
    try {
        const url = 'http://127.0.0.1:8181/api/v1/';

        const api = await fetch(url, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
        const response = await api.json();
        return response
    } catch (e) {
        console.log(e);
    }
}


/**
 *  POST method to public api
 * 
 * @param {Array} data Data from url form 
 * @returns 
 */
export const postData = async (data) => {
    try {
        const url = 'http://127.0.0.1:8181/api/public/';

        let dataApi = {
            'url': data.url,
            'utl_temporary':data.utl_temporary
        }

        const api = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
        
        const response = await api.json()
        return response.key

    } catch (e) {
        console.log(e);
    }
}


/**
 * GET method to public api
 * 
 * @param {Array} data Data from the url form 
 * @returns 
 */
export const authPostData = async (data) => {
    try {
        const url = 'http://127.0.0.1:8181/api/public/';

        let dataApi = {
            'url': data[0],
            'utl_temporary':data[1]
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

/**
 * DELETE method to pivate api
 * 
 * @param {integer} id id to the especific element 
 * @param {string} token tocke for authorization
 */
export const deleteData = async (id, token) => {
    try {
        const url = `http://127.0.0.1:8181/api/v1/${id}/`;

        const api = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })

    } catch (e) {
        console.log(e);
    }
}

/**
 * PUT method to the private api
 * 
 * @param {integer} id id to the especific element
 */
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
