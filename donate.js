document.getElementById('donate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const medicineName = document.getElementById('medicine-name').value;
    const contactInfo = document.getElementById('contact-info').value;
    const address = document.getElementById('address').value;

    // Create an object for the donated medicine
    const donation = {
        name: medicineName,
        contact: contactInfo,
        address: address,
    };

    // Get existing donations from local storage or initialize an empty array
    const donations = JSON.parse(localStorage.getItem('donations')) || [];

    // Add the new donation to the array
    donations.push(donation);

    // Save updated donations array to local storage
    localStorage.setItem('donations', JSON.stringify(donations));

    // Clear form fields
    document.getElementById('donate-form').reset();

    alert('Thank you for your donation! Your details have been saved.');
});
