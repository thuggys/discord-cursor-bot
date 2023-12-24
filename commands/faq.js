module.exports = {
    name: 'faq',
    description: 'Answer common questions about Cursor AI.',
    aliases: ['questions'],
    cooldown: 5,
    execute(message, args) {
        const data = [];

        if (!args.length) {
            data.push('Here are some frequently asked questions about Cursor AI:');
            data.push('1. What is Cursor AI?');
            data.push('Cursor AI is an IDE that helps you write code more efficiently.');
            data.push('2. How do I use Cursor AI?');
            data.push('You can use Cursor AI by installing it and following the instructions provided in the documentation.');
            data.push('3. Where can I download Cursor AI?');
            data.push('You can download Cursor AI from the official website.');
            data.push('4. Who developed Cursor AI?');
            data.push('Cursor AI was developed by a team of dedicated programmers.');
            data.push('5. Is Cursor AI free?');
            data.push('Yes, Cursor AI is free to use.');

            return message.channel.send(data, { split: true });
        }

        const questionNumber = parseInt(args[0]);

        if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > 5) {
            return message.reply('please provide a valid question number (1-5).');
        }

        switch (questionNumber) {
            case 1:
                message.reply('Cursor AI is an IDE that helps you write code more efficiently.');
                break;
            case 2:
                message.reply('You can use Cursor AI by installing it and following the instructions provided in the documentation.');
                break;
            case 3:
                message.reply('You can download Cursor AI from the official website.');
                break;
            case 4:
                message.reply('Cursor AI was developed by a team of dedicated programmers.');
                break;
            case 5:
                message.reply('Yes, Cursor AI is free to use.');
                break;
        }
    },
};
