const db = require("../dbConfig.js");

module.exports = {
    getAll,
    getById,
    getByUserId,
    getBySchoolId,
    addNewDonation,
    updateDonation,
    deleteDonation,
};

function deleteDonation(id, user) {
    return db("donationsNeeded")
        .where({ id: id })
        .del();

    // .where({ id: id, userId: user.id })
}

function updateDonation(donationId, user, donationInfo) {
    console.log(donationId, user.id, donationInfo);
    return db("donationsNeeded")
        .where({
            id: donationId,
        })
        .update(donationInfo);

    // .where({
    //     id: donationId,
    //     userId: user.id,
    // })
}

function addNewDonation(schoolId, user, donationInfo) {
    return db("donationsNeeded").insert({
        ...donationInfo,
        userId: user.id,
        schoolId: schoolId,
    });
}

function getBySchoolId(id) {
    return db("donationsNeeded").where({ schoolId: id });
}

function getByUserId(id) {
    return db("donationsNeeded").where({ userId: id });
}

function getById(id) {
    return db("donationsNeeded").where({ id: id });
}

function getAll() {
    return db("donationsNeeded");
}
