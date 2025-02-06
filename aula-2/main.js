// interface Pessoa {
//     nome: string
//     idade: number
// }
var johnson = {
    marca: "Ford",
    modelo: "Custom Sedan",
    ano: 1950,
};
var processPayment = function (payment) {
    switch (payment.method) {
        case "mbway":
            return "Payed with MBWAY";
        case "paypal":
            return "Payed with paypal";
        case "applepay":
            return "Payed with applepay";
        case "visa":
            return "Payed with visa";
        case "mastercard":
            return "Payed with mastercard";
        default:
            return "Invalid payment method";
    }
};
console.log(johnson);
console.log(processPayment({ value: 100, method: "mbway" }));
