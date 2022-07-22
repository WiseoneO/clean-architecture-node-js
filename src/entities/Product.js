module.exports.Product = class Product {
    constructor({
        id,
        name = null,
        price = null,
        images = null,
        color = null,
        description = null,
        meta = {}
    }) {
        this.id = id;
        this.name = name;
        this.images = images,
        this.price = price;
        this.color = color;
        this.description = description;
        this.meta = meta;

    }
}