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
    var sections = document.querySelectorAll('.toggle-section');
    sections.forEach(function (section) {
        section.addEventListener('click', function () {
            var content = section.nextElementSibling;
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                section.innerHTML = section.innerHTML.replace('&#9656;', '&#9662;');
            }
            else {
                content.style.display = 'none';
                section.innerHTML = section.innerHTML.replace('&#9662;', '&#9656;');
            }
        });
    });
});
