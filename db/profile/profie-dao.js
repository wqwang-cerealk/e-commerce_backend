const model = require('./profile-model');
const findAllProfile = () =>
    model.find();

const updateProfile = (id, profile) =>

    model.updateOne({_id: id}, {$set: profile});
module.exports = {
    findAllProfile, updateProfile
}