class ProductManager {
    constructor(title, description, price, thumbnail, stock, code) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock;
        this.code = code++;

        this.products = [];
    }


    getProducts = () => {
        return this.products;
    };

    getProductById = (id) => {
        let productCode = this.id;
        const idFind = this.products.filter(prdC => prdC.code === productCode)
        return idFind;
    };

    addProduct = (title, description, price, thumbnail, stock) => {
        let increaseCode = this.code;
        console.log(increaseCode);
        let newProduct = new ProductManager(title, description, price, thumbnail, stock, increaseCode);
        this.products.push(newProduct);

    };

};
let prueba = new ProductManager();
prueba.addProduct("Martin Fierro", "Obra tradicion Argentina", 7000, "/images/mf.jpg", 4);
//console.log(prueba.getProducts());

console.log(prueba.getProductById(1));