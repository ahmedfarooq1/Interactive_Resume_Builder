document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    // Get form data and populate resume
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        // Dynamically populate the resume with form data
        document.getElementById('name-display').innerText = name;
        document.getElementById('email-display').innerText = "Email: ".concat(email);
        document.getElementById('contact-display').innerText = "Contact: ".concat(contact);
        document.getElementById('education-display').innerText = education;
        document.getElementById('work-experience-display').innerText = workExperience;
        document.getElementById('skills-display').innerText = skills;
        // Generate unique URL based on the username
        var uniqueUrl = "".concat(window.location.origin, "/resume/").concat(name.toLowerCase().replace(/ /g, '-'));
        document.getElementById('resume-link').innerText = uniqueUrl;
        document.getElementById('resume-link').href = uniqueUrl;
        // Display the generated URL section
        document.getElementById('generated-url-section').style.display = 'block';
    });
    // Function to toggle section visibility on click
    window['toggleEdit'] = function (element) {
        var section = element.nextElementSibling;
        if (section && section.style.display === 'none') {
            section.style.display = 'block';
            element.innerHTML = element.innerHTML.replace('&#9654;', '&#9660;'); // Arrow down
        }
        else if (section) {
            section.style.display = 'none';
            element.innerHTML = element.innerHTML.replace('&#9660;', '&#9654;'); // Arrow right
        }
    };
    // Copy link to clipboard
    (_b = document.getElementById('copy-link-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var resumeLink = document.getElementById('resume-link').href;
        navigator.clipboard.writeText(resumeLink).then(function () {
            alert('Resume link copied to clipboard');
        });
    });
    // Download the resume as a PDF using jsPDF
    (_c = document.getElementById('download-pdf-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        var name = document.getElementById('name-display').innerText;
        var email = document.getElementById('email-display').innerText;
        var contact = document.getElementById('contact-display').innerText;
        var education = document.getElementById('education-display').innerText;
        var workExperience = document.getElementById('work-experience-display').innerText;
        var skills = document.getElementById('skills-display').innerText;
        // Add content to PDF
        doc.text(20, 20, "Name: ".concat(name));
        doc.text(20, 30, "Email: ".concat(email));
        doc.text(20, 40, "Contact: ".concat(contact));
        doc.text(20, 50, "Education: ".concat(education));
        doc.text(20, 60, "Work Experience: ".concat(workExperience));
        doc.text(20, 70, "Skills: ".concat(skills));
        // Save the PDF
        doc.save("".concat(name, "-resume.pdf"));
    });
});
