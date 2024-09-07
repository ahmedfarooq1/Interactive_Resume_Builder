var toggleEducationArrow = document.getElementById('toggle-education');
var educationList = document.getElementById('education-list');
var toggleSkillsArrow = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
var toggleWorkExperienceArrow = document.getElementById('toggle-work-experience');
var workExperienceList = document.getElementById('work-experience-list');
toggleEducationArrow.addEventListener('click', function () {
    toggleSection(educationList, toggleEducationArrow);
});
toggleSkillsArrow.addEventListener('click', function () {
    toggleSection(skillsList, toggleSkillsArrow);
});
toggleWorkExperienceArrow.addEventListener('click', function () {
    toggleSection(workExperienceList, toggleWorkExperienceArrow);
});
function toggleSection(section, arrow) {
    if (section.style.display === 'none') {
        section.style.display = 'block';
        arrow.innerHTML = '▼';
    }
    else {
        section.style.display = 'none';
        arrow.innerHTML = '►';
    }
}
