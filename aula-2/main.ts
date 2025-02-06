// Exercicio Interface Carro

interface Carro {
    marca: string
    modelo: string
    ano?: number
}

const johnson: Carro = {
    marca: "Ford",
    modelo: "Custom Sedan",
    ano: 1950,
}


// Exercicio  Interface Pagamentos

type paymentMethod = "mbway" | "paypal" | "applepay" | "visa" | "mastercard"

interface payment {
    value: number
    method: paymentMethod
}

const processPayment = (payment: payment):string => {
    
    switch(payment.method) {

        case "mbway": 
           return"Payed with MBWAY";

        case "paypal":
            return"Payed with paypal";

        case "applepay":
            return"Payed with applepay";
            
        case "visa":
            return"Payed with visa";

        case "mastercard":
            return"Payed with mastercard";

        default:
            return "Invalid payment method"
}}






console.log(johnson)

console.log(processPayment({value: 100, method: "mbway"}))