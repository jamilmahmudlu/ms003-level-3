const skillItems = document.querySelector('.skill-items')

const createSkill = (skillName, skillLevel) => {
    return `<li class="skill-item">
    <h5>${skillName}</h5>
    <div class="progress">
        <div class="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style="width: ${skillLevel};">
        <span>${skillLevel}</span>
        </div>
    </div>
</li>`
}

export const bindSkillData = (skills) => {
    skillItems.innerHTML = ''
    skills.forEach(element => {
        const ulLi = createSkill(element.name, element.level)
        skillItems.innerHTML += ulLi;
    });
}