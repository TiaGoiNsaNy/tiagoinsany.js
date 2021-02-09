const generatePassword = require("../functions/generatePassword.js");

const Functions = () => {
    return {
        generatePassword: (Options) => {
            return generatePassword(Options);
        }
    }
};

module.exports = Functions();