module.exports = dependencies =>{
   const {ordersRepository} = dependencies;

   if(!ordersRepository){
    throw new Error("OrderRepository should be exist in a dependencies")
   }

   const execute = ({id})=>{
   return ordersRepository.getById(id)
    
   }


   return {execute}
}