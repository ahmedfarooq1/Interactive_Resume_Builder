document.addEventListener('DOMContentLoaded', function () {
 
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


    window['toggleEdit'] = function (element: HTMLElement) {
        // Cast nextElementSibling to HTMLElement
        const section = element.nextElementSibling as HTMLElement | null;
        const arrow = element.querySelector('.arrow') as HTMLElement;

        if (section && section.style.display === 'none') {
            section.style.display = 'block';
            arrow.innerHTML = '&#9660;'; // Arrow down
        } else if (section) {
            section.style.display = 'none';
            arrow.innerHTML = '&#9654;'; // Arrow right
        }
    };
});
