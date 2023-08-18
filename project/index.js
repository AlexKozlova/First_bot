const axios = require('axios');

const TelegramApi = require('node-telegram-bot-api');

const token = '6017420526:AAEKgE_CzHTSIPHKem5iIot29W85pDzIEgY';

const CAT_API = 'https://cataas.com/cat?json=true';
const CAT_API_FOR_USER = 'https://cataas.com';

const bot = new TelegramApi(token,{polling:true});

bot.setMyCommands([
    {command: "/start", description: 'Приветствие'},
    {command: "/cat", description: 'Получить фото кота'}
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text == '/start') {
        await bot.sendMessage(chatId, "Добро пожаловать в Телеграм бот для отправки фоток котов");
    }
    else if (text == '/cat') {
        await bot.sendMessage(chatId, "Кот почти готов");
            const response = await axios(CAT_API);
            responsePhotoURL = CAT_API_FOR_USER + response.data.url;
            await bot.sendPhoto(chatId,responsePhotoURL);
    }
    else {
        await bot.sendMessage(chatId, "Неправильная команда, попробуйте еще раз!");
    }
})