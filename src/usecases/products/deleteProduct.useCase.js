module.exports = dependencies =>{
    const {usersRepository} = dependencies;

    if(!userRepository){
        throw new Error("The users repository should be exist in dependencies")
    }

    const execute  = ({
        product = {}
    })=>{
        return usersRepository.delete(product);
    }

    return {execute}
}
