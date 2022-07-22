module.exports = dependencies =>{
    const {usersRepository} = dependencies;

    if(!userRepository){
        throw new Error("The users repository should be exist in dependencies")
    }

    const execute  = ({
        user = {}
    })=>{
        // business validation rules

        
        return usersRepository.delete(user);
    }

    return {execute}
}
