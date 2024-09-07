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

        const uniqueUrl = `${window.location.origin}/resume/${name.toLowerCase().replace(/ /g, '-')}`;
        document.getElementById('resume-link')!.innerText = uniqueUrl;
        document.getElementById('resume-link')!.href = uniqueUrl;

        document.getElementById('generated-url-section')!.style.display = 'block';
    });

    window['toggleEdit'] = function (element: HTMLElement) {
        const section = element.nextElementSibling as HTMLElement | null;

        if (section && section.style.display === 'none') {
            section.style.display = 'block';
            element.innerHTML = element.innerHTML.replace('&#9654;', '&#9660;'); // Arrow down
        } else if (section) {
            section.style.display = 'none';
            element.innerHTML = element.innerHTML.replace('&#9660;', '&#9654;'); // Arrow right
        }
    };

    document.getElementById('copy-link-button')?.addEventListener('click', () => {
        const resumeLink = (document.getElementById('resume-link') as HTMLAnchorElement).href;
        navigator.clipboard.writeText(resumeLink).then(() => {
            alert('Resume link copied to clipboard');
        });
    });

    document.getElementById('download-pdf-button')?.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const name = document.getElementById('name-display')!.innerText;
        const email = document.getElementById('email-display')!.innerText;
        const contact = document.getElementById('contact-display')!.innerText;
        const education = document.getElementById('education-display')!.innerText;
        const workExperience = document.getElementById('work-experience-display')!.innerText;
        const skills = document.getElementById('skills-display')!.innerText;

        doc.text(20, 20, `Name: ${name}`);
        doc.text(20, 30, `Email: ${email}`);
        doc.text(20, 40, `Contact: ${contact}`);
        doc.text(20, 50, `Education: ${education}`);
        doc.text(20, 60, `Work Experience: ${workExperience}`);
        doc.text(20, 70, `Skills: ${skills}`);

        // Save the PDF
        doc.save(`${name}-resume.pdf`);
    });
});
