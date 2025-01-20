// script.js

// Event listener for the 'Get Started' button
const getStartedButton = document.querySelector('button');
getStartedButton.addEventListener('click', () => {
    alert('Redirecting to the registration page...');
});

// Dynamic feature highlight
const features = [
    'Track income and expenses in real-time.',
    'Manage loans and subsidies effortlessly.',
    'Generate detailed financial reports.',
    'Stay informed with budget alerts and notifications.'
];

let featureIndex = 0;
const featureElement = document.createElement('p');
const featuresSection = document.querySelector('#features');
featuresSection.appendChild(featureElement);

function updateFeature() {
    featureElement.textContent = features[featureIndex];
    featureIndex = (featureIndex + 1) % features.length;
}

// Rotate features every 3 seconds
setInterval(updateFeature, 3000);
updateFeature();

// Scroll-to-section functionality for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
