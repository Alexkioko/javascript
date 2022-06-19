document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        //send a get request to the url
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        //put response into json form
        .then(response => response.json())
        .then(data => {
            //get currency from user input  and convert into upper case
            const currency = document.querySelector('#currency').value.toUpperCase();
            //get rate from data
            const rate = data.rates[currency];

            //check if currency is valid:
            if (rate !== undefined) {
                //display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.tofixed(3)} ${currency}.`;
            }
            else {
                //display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        //catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });
        //prevent default submission
        return false;
    }
})