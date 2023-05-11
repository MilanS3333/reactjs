import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {}
    })
}


//get all data from api
const GetApiDetails = () => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details', 'GET', headers, {})
}

// for deleteing data
const DeleteApiDetails = (id) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest(`http://localhost:3000/details/${id}`, 'DELETE', headers, {})
}

// post/add data
const PostApiDetails = (data) => {
    return axios.post('http://localhost:3000/details/', data)
}

// Edit data
const EditApiDetails = (id) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest(`http://localhost:3000/details/${id}`, 'GET', headers, {})
}

const NewApiDetails = (data, id) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest(`http://localhost:3000/details/${id}`, 'PUT', headers, data)
}

export { GetApiDetails, DeleteApiDetails, PostApiDetails, EditApiDetails, NewApiDetails };