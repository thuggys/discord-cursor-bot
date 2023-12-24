const Discord = require('discord.js');

module.exports = {
    name: 'game1',
    description: 'This is a mini game command for the bot',
    execute(message, args) {
        // Your game logic goes here
        // For example, a simple number guessing game
        const numberToGuess = Math.floor(Math.random() * 10) + 1;
        const filter = m => m.author.id === message.author.id;

        message.channel.send('Welcome to Game 1! Guess a number between 1 and 10.');

        message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {
                const guessedNumber = parseInt(collected.first().content);

                if (guessedNumber === numberToGuess) {
                    message.channel.send('Congratulations! You guessed the number correctly.');
                } else {
                    message.channel.send(`Sorry, you guessed wrong. The correct number was ${numberToGuess}.`);
                }
            })
            .catch(collected => {
                message.channel.send('You did not guess in time.');
            });
    },
};
