const ProfileDB = require('../DB/models/ProfileDB');

async function addProfile(profileData) {
    let profile = await new ProfileDB({ name, imageUrl } = profileData)
    return profile.save();
}

 function getAll() {
    return ProfileDB.find({}).lean();
}

module.exports = {
    addProfile,
    getAll
}