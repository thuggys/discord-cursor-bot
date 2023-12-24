const Discord = require('discord.js');
const capitals = require('./trivia/capitals');
const literature = require('./trivia/literature');
const math = require('./trivia/math');

function playTriviaGame(message) {
    const questions = [...capitals, ...literature, ...math];

    const item = questions[Math.floor(Math.random() * questions.length)];
    const filter = response => {
        return item.answer.toLowerCase() === response.content.toLowerCase();
    };

    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                       .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
                       })
            .catch(collected => {
                message.channel.send('Looks like nobody got the answer this time.');
            });
    });
}

module.exports = {
    name: 'game2',
    description: 'This is another mini game command for the bot',
    execute(message, args) {
        playTriviaGame(message);
    },
};
