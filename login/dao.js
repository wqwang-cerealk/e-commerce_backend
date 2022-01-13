const model = require('./model');

// const findUserByEmail = (email) =>  model.find

const findAllUsers = () => model.find();

const findUserById = (userId) =>
    model.findById(userId);

const findByUsernameAndPassword = ({username, password}) =>
    model.findOne({username, password});

const findByUsername = ({username}) =>
    model.findOne({username});

const createUser = (user) =>
    model.create(user);

const updateUser = (user) =>
    model.updateOne({_id: user._id}, {
        $set: user
    });

const deleteUser = (userId) =>
    model.deleteOne({_id: userId});

const putProduct = (user, product) => model.updateOne({_id:user._id},{$push : { product : product }});

// const updateLoginStatus = (user) =>{
//     return model.updateOne({_id: user._id}, {$set: user});
// }


module.exports = {
    findAllUsers, findUserById, findUserById, findByUsernameAndPassword, findByUsername,
    createUser, deleteUser, updateUser, putProduct
};

// const model = require('./model');
//
// // const findUserByEmail = (email) =>  model.find
//
// const findAllUsers = () => model.find();
//
// const findUserById = (userId) =>
//     model.findById(userId);
//
// const findByUsernameAndPassword = ({username, password}) =>
//     model.findOne({username, password});
//
// const findByUsername = ({username}) =>
//     model.findOne({username});
//
// const createUser = (user) =>
//     model.create(user);
//
// const updateUser = (user) =>
//     model.updateOne({_id: user._id}, {
//         $set: user
//     });
//
// const deleteUser = (userId) =>
//     model.deleteOne({_id: userId});
//
// const putProduct = (user, product) => model.updateOne({_id:user._id},{$push : { product : product }});
//
// // const updateLoginStatus = (user) =>{
// //     return model.updateOne({_id: user._id}, {$set: user});
// // }
//
//
// module.exports = {
//     findAllUsers, findUserById, findUserById, findByUsernameAndPassword, findByUsername,
//     createUser, deleteUser, updateUser, putProduct
// };
