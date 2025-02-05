// Loja Online

const user = {
    name: "",
    email: "",
    password: "",
}

const product = {
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
}

const cart = {
    products: [],
    total: 0,
}

const category = {
    id: 1,
    name: "Technology",
    description: "Computers, laptops, smartphones and acessories.",
    products: [
        "Macbook Pro", 
        "Macbook Air", 
        "iPhone X", 
        "Samsung Galaxy S21", 
        "Airpods Pro", 
        "Apple Vision Pro"
    ],
}

const order = {
    id: user.id,
    user: user.id,
    products: [cart.products],
    total: cart.total,
    status: undefined,
}