import { config } from "../config.js"

export default class ApiRequest{

    async get(endpoint) {
        return await fetch(`${config.baseUrl}${endpoint}`)
    }
}