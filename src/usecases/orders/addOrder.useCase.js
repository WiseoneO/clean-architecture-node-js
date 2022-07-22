const {Order} = require("../../entities")

module.exports = dependencies =>{
   const {ordersRepository} = dependencies;

   if(!ordersRepository){
    throw new Error("OrderRepository should be exist in a dependencies")
   }

    const execute = ({userId, productsIds,date,isPayed,meta})=>{
    const order = new Order({userId, productsIds,date,isPayed,meta});

   return ordersRepository.add(order)

   }


   return {execute}
}