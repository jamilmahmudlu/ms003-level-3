import ApiRequest from "./baseRequest.js";
import { SKILL_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest();

export const getSkills = async () => {
    const response = await _service.get(SKILL_ENDPOINT)
    return response.json()
}