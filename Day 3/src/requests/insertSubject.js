import ApiRequest from "./baseRequest.js";
import { SUBJECT_ENDPOINT } from "../helpers/urlHelper.js";

const _service = new ApiRequest();

export const getAllSubjects = async() => {
    const result = await _service.get(SUBJECT_ENDPOINT)
    return await result.json()
}

export const insertSubject = async data => {
    const result = await _service.insert(SUBJECT_ENDPOINT, data)
    return await result.json()
}

export const deleteSubject = async id => {
    const result = await _service.delete(SUBJECT_ENDPOINT, id)
    return await result.json()
}