module.exports = async (Options, Message) => {
    if (Options.ability && typeof Options.ability === "boolean" && Options.ability === true) {
        if (Options.permissions && typeof Options.permissions === "object") {
            if (!Message.member.permissions.has(Options.permissions)) {
                const contentRegex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;

                if (contentRegex.exec(Message.content)) {
                    await Message.delete({ timeout: 1000 });

                    if (Options.replyMessage && typeof Options.replyMessage === "string" && Options.replyMessage.length > 0) {
                        var placeholders = {
                            "{user}": `${Message.author}`,
                            "{username}": `${Message.author.username}`
                        };

                        let contentMsg = Options.replyMessage;

                        contentMsg = contentMsg.replace(/{\w+}/g, function (holder) {
                            return placeholders[holder] || holder;
                        });

                        await Message.channel.send(`${contentMsg}`);
                    };
                };
            } else {
                return;
            };
        } else {
            const contentRegex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;

            if (contentRegex.exec(Message.content)) {
                await Message.delete({ timeout: 1000 });

                if (Options.replyMessage && typeof Options.replyMessage === "string" && Options.replyMessage.length > 0) {
                    var placeholders = {
                        "{user}": `${Message.author}`,
                        "{username}": `${Message.author.username}`
                    };

                    let contentMsg = Options.replyMessage;

                    contentMsg = contentMsg.replace(/{\w+}/g, function (holder) {
                        return placeholders[holder] || holder;
                    });

                    await Message.channel.send(`${contentMsg}`);
                };
            };
        };
    } else {
        return;
    };
};