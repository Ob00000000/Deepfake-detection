// Learn More button action
function learnMore() {
    alert("Learn more about deepfake detection coming soon!");
}

// Form submit action for contact form
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you ${name}! Your message has been sent.`);
    } else {
        alert('Please fill out all the fields.');
    }
}

// Limit size to 100MB in bytes (100MB = 100 * 1024 * 1024 bytes)
const MAX_FILE_SIZE = 100 * 1024 * 1024;

// Video file submit handler
function handleVideoSubmit(event) {
    event.preventDefault();
    
    const videoInput = document.getElementById('videoFile');
    const errorMessage = document.getElementById('error-message');
    const file = videoInput.files[0];

    if (file) {
        if (file.size > MAX_FILE_SIZE) {
            // Show error message if file size exceeds 10MB
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert(`Video file "${file.name}" uploaded successfully!`);
        }
    }
}
