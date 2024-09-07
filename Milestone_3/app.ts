document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const contact = (document.getElementById('contact') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        document.getElementById('name-display')!.innerText = name;
        document.getElementById('email-display')!.innerText = `Email: ${email}`;
        document.getElementById('contact-display')!.innerText = `Contact: ${contact}`;
        document.getElementById('education-display')!.innerText = education;
        document.getElementById('work-experience-display')!.innerText = workExperience;
        document.getElementById('skills-display')!.innerText = skills;
    });

    const sections = document.querySelectorAll('.toggle-section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const content = section.nextElementSibling as HTMLElement;
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                section.innerHTML = section.innerHTML.replace('&#9656;', '&#9662;');
            } else {
                content.style.display = 'none';
                section.innerHTML = section.innerHTML.replace('&#9662;', '&#9656;');
            }
        });
    });
});
