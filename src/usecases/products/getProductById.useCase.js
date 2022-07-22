module.exports = dependencies => {
    const {
        productsRepository
    } = dependencies;

    if (!productsRepository) {
        throw new Error("productRepository should be in depenedncies");
    }
    const execute = ({id}) => {
        return productsRepository.getById(id);
    }

    return {execute}
}