const result = document.getElementById("result");

multiplyButton.addEventListener("click", () => {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    // Validate inputs
    if (!number1 || !number2) {
        result.innerHTML = "Please enter both numbers!";
        return;
    }

    result.innerHTML = "Calculating...";

    // Fetch multiplication result from a mock API
    fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(number1)}*${encodeURIComponent(number2)}`)
        .then(response => response.text())
        .then(data => {
            result.innerHTML = `The product of ${number1} and ${number2} is <strong>${data}</strong>.`;
        })
        .catch(error => {
            result.innerHTML = "Error calculating the result. Please try again.";
            console.error("Error:", error);
        });
});