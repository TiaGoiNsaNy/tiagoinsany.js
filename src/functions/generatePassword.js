const Utils = require("../utils/TypeError.js");

module.exports = async (Options) => {
    if (Options === null) {
        throw new TypeError(Utils.null.Options);
    };

    let contentPassword = "";

    if (Options.numbers && typeof Options.numbers === "boolean") {
        contentPassword += "0123456789";
    };

    if (Options.symbols) {
        if (typeof Options.symbols === "string") {
            let SplitString = Options.symbols.split("");

            let Ability = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

            if (!Ability.includes(SplitString)) {
                throw new TypeError(Utils.array.NotIncluides(SplitString.filter((Tier) => !Ability.includes(Tier))));
            };

            contentPassword += `${SplitString.join("")}`;
        } else {
            contentPassword += '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
        };
    };

    if (Options.lowercase && typeof Options.lowercase === "boolean") {
        contentPassword += "abcdefghijklmnopqrstuvwxyz";
    };

    if (Options.uppercase && typeof Options.uppercase === "boolean") {
        contentPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    if (Options.exclude && typeof Options.exclude === "string") {
        let i = Options.exclude.length;
        while (i--) {
            contentPassword = contentPassword.replace(Options.exclude[i], '');
        };
    };

    let Count;
    if (Options.length && typeof Options.length === "number") {
        if (Options.length <= 0 || Options.length >= 257) {
            Count = 1;
        } else {
            Count = Math.floor(Options.length);
        };
    } else {
        Count = 1;
    };

    let content = "";

    for (let i = 0; i < Count; i++) {
        content += `${await contentPassword[Math.floor(Math.random() * contentPassword.length)]}`
    };

    return content;
};