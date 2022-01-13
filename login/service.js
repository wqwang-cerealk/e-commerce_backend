const dao = require('./dao');
const orderlistdao = require("../db/order/order.js")
module.exports = (app) => {
    const findAllUsers = (req, res) =>
        dao.findAllUsers()
            .then(users => res.json(users));

    const findUserById = (req, res) =>
        dao.findUserById(req.id)                        //
            .then(user => res.json(user));

    const deleteUser = (req, res) =>                    //
        dao.deleteUser(req.params.id)
            .then(status => res.send(status));

    const updateUser = (req, res) =>                //
    {
        console.log("==============this is updateUser from service", req.body);
        return dao.updateUser(req.body)
            .then(status => res.send(status));
    }

    const updateUser2 = (req, res) =>                //
    {
        console.log("==============this is updateUser2 from service", req.body);

        return dao.updateUser(req.body)
            .then(status => res.send(status));
    }

    const login = (req, res) => {
        dao.findByUsernameAndPassword(req.body)
            .then(user => {
                if(user) {
                    req.session['profile'] = user;
                    res.json(user);
                    return;
                }
                res.sendStatus(403); //unauthorized
            })
    }

    const register = (req, res) => {
        dao.findByUsername(req.body)
            .then(user => {
                console.log(user);
                if(user) {
                    res.sendStatus(404); //stay in the page and not go anywhere
                    return;
                }
                dao.createUser(req.body)
                    .then(user => {
                        req.session['profile'] = user;
                        res.json(user)
                    });
            })
    }

    const profile = (req, res) => {
        dao.findByUsernameAndPassword(req.session['profile'])
            .then(user => {
                if (user) {
                    req.session['profile'] = user;
                    res.json(req.session['profile']);                   //res.json(user);
                }
            })
    }
    const setorderbyuser = (req,res,next)=>{
        console.log("---------gogogogogogo")
        let {orderlist,userid} = req.body
        let order = new orderlistdao({userid,orderlist:JSON.stringify(orderlist) })
        order.save(function(err){
            console.log(err,"-----err")
            if(!err){
                res.json({code:1,msg:"add success"})
            }
        })
    }
    const findorderbyuserid = (req,res,next)=>{
        console.log("========find")
        let {userid} = req.body
        orderlistdao.find({userid}).then(result=>{
            res.json({code:1,msg:"success",result})
        })
    }
    const deleteorderbyid = (req,res,next)=>{
        let {orderid} = req.body
        orderlistdao.deleteOne({_id:orderid}).then(ress=>{
            res.json({code:1,message:"success"})
        })
    }
    const logout = (req, res) =>
        res.send(req.session.destroy());

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
    app.put('/api/users', updateUser);
    app.put('/api/profile',updateUser2);
    app.delete('/api/users/:userId', deleteUser);
    app.get('/api/users', findAllUsers);
    app.post("/api/setorder",setorderbyuser)
    app.post("/api/getorderbyuserid",findorderbyuserid)
    app.post("/api/deleteorderbyid",deleteorderbyid)
    app.get('/api/users/:userId', findUserById);
};


// const dao = require('./dao');
//
// module.exports = (app) => {
//     const findAllUsers = (req, res) =>
//         dao.findAllUsers()
//             .then(users => res.json(users));
//
//     const findUserById = (req, res) =>
//         dao.findUserById(req.id)                        //
//             .then(user => res.json(user));
//
//     const deleteUser = (req, res) =>                    //
//         dao.deleteUser(req.params.id)
//             .then(status => res.send(status));
//
//     const updateUser = (req, res) =>                //
//     {
//         console.log("==============this is updateUser from service", req.body);
//         return dao.updateUser(req.body)
//             .then(status => res.send(status));
//     }
//
//     const updateUser2 = (req, res) =>                //
//     {
//         console.log("==============this is updateUser2 from service", req.body);
//
//         return dao.updateUser(req.body)
//             .then(status => res.send(status));
//     }
//
//     const login = (req, res) => {
//         dao.findByUsernameAndPassword(req.body)
//             .then(user => {
//                 if(user) {
//                     req.session['profile'] = user;
//                     res.json(user);
//                     return;
//                 }
//                 res.sendStatus(403); //unauthorized
//             })
//     }
//
//     const register = (req, res) => {
//         dao.findByUsername(req.body)
//             .then(user => {
//                 console.log(user);
//                 if(user) {
//                     res.sendStatus(404); //stay in the page and not go anywhere
//                     return;
//                 }
//                 dao.createUser(req.body)
//                     .then(user => {
//                         req.session['profile'] = user;
//                         res.json(user)
//                     });
//             })
//     }
//
//     const profile = (req, res) => {
//         dao.findByUsernameAndPassword(req.session['profile'])
//             .then(user => {
//                 if (user) {
//                     req.session['profile'] = user;
//                     res.json(req.session['profile']);                   //res.json(user);
//                 }
//             })
//     }
//
//     const logout = (req, res) =>
//         res.send(req.session.destroy());
//
//     app.post('/api/login', login);
//     app.post('/api/register', register);
//     app.post('/api/profile', profile);
//     app.post('/api/logout', logout);
//     app.put('/api/users', updateUser);
//     app.put('/api/profile',updateUser2);
//     app.delete('/api/users/:userId', deleteUser);
//     app.get('/api/users', findAllUsers);
//     app.get('/api/users/:userId', findUserById);
// };



