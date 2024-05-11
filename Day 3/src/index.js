import { initStepper } from "./view/stepper.js";
import { initalizeSubjects } from "./view/subject.js";

const onLoad = () => {
    initStepper();
    initalizeSubjects()
}

document.addEventListener('DOMContentLoaded', onLoad)