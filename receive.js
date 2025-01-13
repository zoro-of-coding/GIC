// Load donations from local storage
const donations = JSON.parse(localStorage.getItem('donations')) || [];

// Function to display the list of medicines
function displayMedicines(filter = "") {
    const medicineList = document.getElementById('medicine-list');
    medicineList.innerHTML = ""; // Clear the list

    // Filter and display medicines
    donations
        .filter(donation => donation.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(donation => {
            const item = document.createElement('div');
            item.className = 'medicine-item';

            item.innerHTML = `
                <h3>${donation.name}</h3>
                <p><strong>Contact:</strong> ${donation.contact}</p>
                <p><strong>Address:</strong> ${donation.address}</p>
            `;
            medicineList.appendChild(item);
        });
}

// Initialize the list
displayMedicines();

// Add event listener for search functionality
document.getElementById('search-bar').addEventListener('input', (event) => {
    displayMedicines(event.target.value);
});
