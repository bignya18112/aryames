document.addEventListener('DOMContentLoaded', function () {
    const complaintForm = document.getElementById('complaintForm');
    const message = document.getElementById('message');

    complaintForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get user input
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const complaint = document.getElementById('complaint').value;
        const submit = document.getElementById('submitButton');
        
        // Get the current date
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        
        // Prepare complaint data
        const complaintData = {
            name,
            phone,
            complaint,
            date: dateString,
        };
        
        // Create a JSON string from the complaint data
        const complaintJSON = JSON.stringify(complaintData, null, 2);

        //TODO: Save this complaint data on server-side ( DATABASE: my-sql )

        // For demonstration purposes, we'll log the JSON data to the console.
        console.log(complaintJSON);

        // Display a success message
        message.textContent = 'Complaint submitted successfully. Thank you!';
        var defmargin = submit.style.marginBottom;
        submit.style.marginBottom = "10%";
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
            submit.style.marginBottom = defmargin;
        }, 3000); // Hide the message after 3 seconds

        // Clear the form
        complaintForm.reset();
    });
});
