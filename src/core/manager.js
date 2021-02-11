const generatePassword = require("../functions/generatePassword.js");
const InviteBlock = require("../functions/InviteBlock.js");

const Functions = () => {
    return {
        generatePassword: (Options) => {
            return generatePassword(Options);
        },
        DiscordJS: {
            InviteBlock: (Options, Message) => {
                return InviteBlock(Options, Message);
            }
        }
    }
};

module.exports = Functions();