const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://0.0.0.0:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("pizzeria-marta").collection("products");
        const categoriesCollection = client.db("pizzeria-marta").collection("categories");

        productsCollection.drop();

        let categories = ['breakfast', 'pizza', 'desert', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dumalrroh/image/upload/v1669890708/margaharita-modified_kx2h85.png',
            'https://res.cloudinary.com/dumalrroh/image/upload/v1669890445/salami-pizza_slr6jw-modified_uvfqmk.png',
            'https://res.cloudinary.com/dumalrroh/image/upload/v1668106208/pizza-fantazia_jd9unz.png',
        ]

        let products = [];
        for (let i = 0; i < 25; i += 1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
