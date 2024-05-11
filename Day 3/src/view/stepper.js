const screens = document.querySelectorAll('.screen')
const steps = document.querySelectorAll('.md-step');



const addScreenChangeEventListener = () => {
    Array.from(steps).forEach(step => {
        step.addEventListener('click', (e) => {
            let screenId = e.target.closest('.md-step')
                .querySelector('.md-step-circle span')
                .textContent;
            changeScreen(screenId);

        }, true);
    });
}

const hideAllScreens = () => {
    Array.from(screens).forEach(x=>x.classList.add('hidden'))
    Array.from(steps).forEach(step => step.classList.remove('active'));
}

const changeScreen = screenId => {
    hideAllScreens();
    const selectedScreen = document.getElementById(`screen-${screenId}`);

    // defensive coding
    if (!selectedScreen) {
        throw new Error("Screen with this is does not exist");
    }
    selectedScreen.classList.remove('hidden') 
    selectedScreen.classList.add('visible') 
    document.getElementById(`step-${screenId}`).classList.add('active');


}


export const initStepper = () => {
    hideAllScreens();
    addScreenChangeEventListener();
    changeScreen('1');
}