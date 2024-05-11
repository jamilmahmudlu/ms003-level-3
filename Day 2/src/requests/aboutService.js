import ApiRequest from "./baseRequest.js";
import { ABOUT_ENDPOINT } from "../url_helper.js";

const _service = new ApiRequest();

export const getAboutDetail = async () => {
    const resp =  await _service.get(ABOUT_ENDPOINT)
    return resp.json()
}