document.addEventListener('DOMContentLoaded', function() {
    var activeNumber = null;
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "11 or more"];
    var numberRow = document.getElementById('numberRow');
    var roomOptions = document.getElementById('roomOptions');

    numbers.forEach(function(num) {
        var numberBox = document.createElement('div');
        numberBox.className = 'number-box';
        numberBox.textContent = num;
        numberBox.onclick = function() { setActiveNumber(num); };
        numberRow.appendChild(numberBox);
    });

    function setActiveNumber(num) {
        activeNumber = num;
        renderContent();
    }

    function renderContent() {
        roomOptions.innerHTML = ''; // Clear previous content
        roomOptions.style.display = 'block'; // Show the room options

        // Add your logic to display different content based on the active number
        switch(activeNumber) {
            case 2:
                roomOptions.innerHTML = '<div>A content for 2</div>';
                break;
            case 3:
                roomOptions.innerHTML = '<div>A content for 3</div>';
                break;
            // Add cases for other numbers...
            default:
                roomOptions.innerHTML = '<div>Default content</div>';
        }
    }
});
