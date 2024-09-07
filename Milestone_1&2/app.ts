const toggleEducationArrow = document.getElementById('toggle-education')!;
const educationList = document.getElementById('education-list')!;

const toggleSkillsArrow = document.getElementById('toggle-skills')!;
const skillsList = document.getElementById('skills-list')!;

const toggleWorkExperienceArrow = document.getElementById('toggle-work-experience')!;
const workExperienceList = document.getElementById('work-experience-list')!;

toggleEducationArrow.addEventListener('click', () => {
    toggleSection(educationList, toggleEducationArrow);
});

toggleSkillsArrow.addEventListener('click', () => {
    toggleSection(skillsList, toggleSkillsArrow);
});

toggleWorkExperienceArrow.addEventListener('click', () => {
    toggleSection(workExperienceList, toggleWorkExperienceArrow);
});

function toggleSection(section: HTMLElement, arrow: HTMLElement) {
    if (section.style.display === 'none') {
        section.style.display = 'block';
        arrow.innerHTML = '▼';
    } else {
        section.style.display = 'none';
        arrow.innerHTML = '►';
    }
}
