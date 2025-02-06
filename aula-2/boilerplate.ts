// Loja Online



// const user = {
//     id: "",
//     name: "",
//     email: "",
//     password: "",
// }

// const product = {
//     id: 1,
//     name: "Computer",
//     price: 1500,
//     description: "A computer.",
//     properties: {
//         brand: "Apple",
//         model: "Macbook Pro",
//         year: 2025,
//         color: "Silver",
//         RAM: "16GB",
//         storage: "1TB",
//         processor: "M1",
//     },
//     stock: 300,
// }

// const cart = {
//     products: [],
//     total: 0,
// }

// const category = {
//     id: 1,
//     name: "Technology",
//     description: "Computers, laptops, smartphones and acessories.",
//     products: [
//         "Macbook Pro", 
//         "Macbook Air", 
//         "iPhone X", 
//         "Samsung Galaxy S21", 
//         "Airpods Pro", 
//         "Apple Vision Pro"
//     ],
// }

// const order = {
//     id: user.id,
//     user: user.id,
//     products: [cart.products],
//     total: cart.total,
//     status: undefined,
// }


type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

interface User {
    id: number; 
    name: string;
    email: string;
    password: string;
}


interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    properties: ProductProperties;
    stock: number;
}


interface ProductProperties {
    brand: string;
    model: string;
    year: number;
    color: string;
    RAM: string;
    storage: string;
    processor: string;
}


interface Cart {
    products: Product[];
    total: number;
}


interface Category {
    id: number;
    name: string;
    description: string;
    products: string[]; 
}

interface Order {
    id: number;
    user: number; 
    products: Product[];
    total: number;
    status?: OrderStatus;
}



// Declaração de variáveis
const user: User = {
    id: 1,
    name: "Rafael",
    email: "rafa@mail.com",
    password: "1234",
};

const product: Product = {
    id: 1,
    name: "Computer",
    price: 1500,
    description: "A computer.",
    properties: {
        brand: "Apple",
        model: "Macbook Pro",
        year: 2025,
        color: "Silver",
        RAM: "16GB",
        storage: "1TB",
        processor: "M1",
    },
    stock: 300,
};

const cart: Cart = {
    products: [],
    total: 0,
};

const category: Category = {
    id: 1,
    name: "Technology",
    description: "Computers, laptops, smartphones and accessories.",
    products: [
        "Macbook Pro",
        "Macbook Air",
        "iPhone X",
        "Samsung Galaxy S21",
        "Airpods Pro",
        "Apple Vision Pro",
    ],
};

const order: Order = {
    id: 1,
    user: user.id,
    products: cart.products,
    total: cart.total,
    status: undefined, 
};
