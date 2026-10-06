const userModel = require('../model.js/user.model')


module.exports.createUser = async({
    firstname, lastname, email, password
})=>{
    if(!firstname ||!email ||!password){
        throw new Error('All fields ar required')
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}