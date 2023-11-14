const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.content === "ping") {
      message.reply("pong");
    }
  },
};
