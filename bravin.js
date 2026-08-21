'use strict';

const { zokou } = require("../framework/zokou"); // ZOKOU BASE
const os = require('os');
const moment = require("moment-timezone");
const set = require("../set");
moment.tz.setDefault(set.TIMEZONE || 'Africa/Nairobi');

zokou({
    nomCom: "bravin",
    categorie: "Bravin",
    reaction: "👑",
    desc: "Show AURA-BXMD bravin base info"
}, async (dest, zk, commandeOptions) => {
    const { ms, repondre } = commandeOptions;
    
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const time = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    const bravinMsg = `
╭━━〔 *AURA-BXMD BASE* 〕━━⊷
┃👑 *BASE NAME* : *bravin*
┃🤖 *BOT* : ${set.BOT || 'AURA-BXMD'}
┃👨‍💻 *OWNER* : ${set.OWNER_NAME || 'sir bravin'}
┃📟 *MODE* : ${set.MODE === 'yes' ? 'Public' : 'Private'}
┃⏱️ *UPTIME* : ${hours}h ${minutes}m ${seconds}s
┃💾 *RAM* : ${ram} MB / ${totalRam} GB
┃📅 *DATE* : ${date}
┃⏰ *TIME* : ${time}
┃🌍 *PLATFORM* : ${os.platform()}
╰━━━━━━━━━━⊷

> *POWERED BY BRAVIN TECH*
`;

    await zk.sendMessage(dest, {
        text: bravinMsg,
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363366284524544@newsletter",
                newsletterName: "bravin", // BASE NAME
                serverMessageId: 143
            },
            externalAdReply: {
                title: "AURA-BXMD | bravin base",
                body: "Made by sir bravin",
                thumbnailUrl: "https://files.catbox.moe/a4q16k.jpg",
                sourceUrl: "https://whatsapp.com/channel/0029VawCel7GOj9ktLjkxQ3g",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: ms });
});

zokou({
    nomCom: "pingb",
    aliases: ["bping"],
    categorie: "Bravin",
    reaction: "⚡",
    desc: "Check bravin base speed"
}, async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;
    const start = new Date().getTime();
    
    await zk.sendMessage(dest, { text: "*bravin base checking...*" }, { quoted: ms });
    
    const end = new Date().getTime();
    const speed = end - start;
    
    await zk.sendMessage(dest, {
        text: `*Bravin Base Pong* ⚡\n\nSpeed: ${speed}ms\nBase: *bravin*\nBot: *AURA-BXMD*`,
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363366284524544@newsletter",
                newsletterName: "bravin",
                serverMessageId: 143
            }
        }
    }, { quoted: ms });
});
