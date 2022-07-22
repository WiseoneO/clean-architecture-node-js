
module.exports = dependencies => {
    const {
        productsRepository
    } = dependencies;

    if (!productsRepository) {
        throw new Error("productRepository should be in depenedncies");
    }
    const execute = ({product = {}}) => {
        return productsRepository.update(product);
    }

    return {execute}
}