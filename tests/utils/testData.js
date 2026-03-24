const testData = {

    // Vakud yser credentials
    validUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    },

    //Invalid user credentials
    invalidUser: {
        username: 'worng_user',
        password: 'wrong_password'
    },

    // Locked out user
    lockedUser: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    }
};

module.exports = testData;