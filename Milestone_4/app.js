document.addEventListener('DOMContentLoaded', function () {
    var _a;
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        document.getElementById('name-display').innerText = name;
        document.getElementById('email-display').innerText = "Email: ".concat(email);
        document.getElementById('contact-display').innerText = "Contact: ".concat(contact);
        document.getElementById('education-display').innerText = education;
        document.getElementById('work-experience-display').innerText = workExperience;
        document.getElementById('skills-display').innerText = skills;
    });
    window['toggleEdit'] = function (element) {
        // Cast nextElementSibling to HTMLElement
        var section = element.nextElementSibling;
        var arrow = element.querySelector('.arrow');
        if (section && section.style.display === 'none') {
            section.style.display = 'block';
            arrow.innerHTML = '&#9660;'; // Arrow down
        }
        else if (section) {
            section.style.display = 'none';
            arrow.innerHTML = '&#9654;'; // Arrow right
        }
    };
});
