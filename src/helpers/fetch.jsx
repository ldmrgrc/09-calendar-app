const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutToken = async ( endpoint, data, method = 'GET' ) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const options = {
        method,
        headers
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    return await response.json();
}

const fetchWithToken = async (endpoint, data, method = 'GET' ) => {
    const token = localStorage.getItem('x-token');
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-token': token
    }

    const options = {
        method,
        headers
    }

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    return await response.json();
}


export { fetchWithoutToken, fetchWithToken };