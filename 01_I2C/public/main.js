window.onload = () => {
    // Get the element with the "adc-value" ID
    const adcValueElement = document.getElementById('adc-value');

    // Send a GET request to the "/adc" route
    fetch('/adc')
        .then(response => response.json())
        .then(data => {
            // Set the innerHTML of the adcValueElement to the value from the server
            adcValueElement.innerHTML = data.value;
        })
        .catch(error => console.error(error));
}