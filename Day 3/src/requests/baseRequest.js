import { config } from "../helpers/config.js"

export default class ApiRequest {
    async get(endpoint){
        return await fetch(`${config.baseUrl}${endpoint}`)
    }
    async insert(endpoint,data) {
        return await fetch(`${config.baseUrl}${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    async update(endpoint, data) {
        return await fetch(`${config.baseUrl}${endpoint}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    async delete(endpoint, id) {
        return await fetch(`${config.baseUrl}${endpoint}/${id}`, {
            method: "DELETE",
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })
    }
}