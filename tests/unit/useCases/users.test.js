const {user: {addUserUseCase}} = require("../../../src/usecases");
const {User, constants : {userConstants: genders}} = require("../../../src/entities");
const {v4: uuidv4} = require("uu")
const Chance = require("chance");
const chance = new Chance("uuid");


describe('User Use cases', () => { 

    const mockUserRepo = {
        add : jest.fn(async user =>({
            ...user,
            id : uuidv4()

        }))
    }

    const dependencies = {
        userRepository : mockUserRepo
    }
    
    describe('Add user use Case', () => { 
        test("User should be added", async ()=>{
            // create a user useCase
            const testUserData = {
                name : chance.name(),
                lastName : chance.last(),
                gender : genders.MALE,
                meta: {
                    hair : {
                        color: "Blonde"
                    }
                }
            }
            // add a user using the usecase
            const addedUser = await addUserUseCase(dependencies).execute(testUserData);

            // check the received data
            expect(addedUser).toBeDefined();
            expect(addedUser.id).toBeDefined(testUserData)
            expect(addedUser.name).toBe(testUserData.name)
            expect(addedUser.lastName).toBe(testUserData.lastName)
            expect(addedUser.gender).toBe(testUserData.gender)
            expect(addedUser.meta).toEqual(testUserData.meta)
            // check that the dependencies called as expected

        })
        //create user data
        
     })

 })