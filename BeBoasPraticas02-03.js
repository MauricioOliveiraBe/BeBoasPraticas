function calculadora(p, q) {
    let result = 0;
    for (let i = 0; i <= p; i++)
    {
        result += q[i];
    }
    return result;
}

function calculateTotal(p, q) {
    // CALCULA O TOTAL DE UM ARRAY
    let total = 0;
    for (let i = 0; i < p.length; i++) {
        total = total + q[i];
    }
    return total;
}

const API_KEY = 'YOUR_API_KEY';
const API_ENDPOINT = 'https://api.example.com';

function callAPI() {
    // FAÇA UMA CHAMADA À API AQUI
    fetch(`${API_ENDPOINT}/data?key=${API_KEY }`)
    .then(response => response.json())
    .then(data => console.log(data));
}

const PERCENTAGE_DISCOUNT = 0.1;
function calculateDiscount(price) {
    return price - PERCENTAGE_DISCOUNT * price;
}