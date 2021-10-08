import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';

import {} from "dotenv/config";

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_EDU, {polling: true});


bot.onText(/\/test/, (msg => {
    const chatId = msg.chat.id;
    return bot.sendMessage(chatId, 'Hello! Bot is working')
}))

// bot.command('photo',  async (ctx) => {
//     const response = await fetch('https://aws.random.cat/meow');
//     const data = await response.json();
//     return ctx.replyWithPhoto(data.file)
// })

//
// const keyboard = [
//     [
//         {
//             text: 'Хочу кота', // текст на кнопке
//             callback_data: 'moreKeks' // данные для обработчика событий
//         }
//     ],
//     [
//         {
//             text: 'Хочу песика',
//             callback_data: 'morePes'
//         }
//     ],
//     [
//         {
//             text: 'Хочу проходить курсы',
//             url: 'https://htmlacademy.ru/courses' //внешняя ссылка
//         }
//     ]
// ];


// bot.onText(/\/keyboard/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'Alternative keybaord layout', {
//         'reply_markup': {
//             'keyboard': [['Sample text', 'Second sample'], ['Keyboard'], ['I\'m robot']],
//             resize_keyboard: true,
//             one_time_keyboard: true,
//             force_reply: true,
//         }
//     });
// });

// bot.launch();

