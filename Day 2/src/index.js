import { getAboutDetail } from "./requests/aboutService.js";
import { getSkills } from "./requests/skillService.js";
import { bindBannerPart } from "./creators/bannerCreators.js";
import { bindAboutPart } from "./creators/aboutCreators.js";
import { bindSkillData } from "./creators/skillCreators.js";

async function LoadMyData () {
    const aboutService = await getAboutDetail();
    const skillService = await getSkills();
    // console.log(final_result)
    console.log(skillService)
    bindAboutPart(aboutService[0]);
    bindBannerPart(aboutService[0].fullName, aboutService[0].professions)
    bindSkillData(skillService)
    
}

document.addEventListener('DOMContentLoaded', LoadMyData)