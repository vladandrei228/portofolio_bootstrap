// Set the date and time when the element should be shown
const showDateTime = new Date('2024-11-23T04:55:00');

// Function to check the current date and time
function checkDateTime() {
    const currentDateTime = new Date();
    if (currentDateTime >= showDateTime) {
        document.getElementById('hiddenobject').style.display = 'block';
    }
}

// Check the date and time every second
setInterval(checkDateTime, 1000);