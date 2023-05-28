// Prueba para los comandos del bot...

require('dotenv').config();

const { Client, GatewayIntentBits, Partials, MessageEmbed, EmbedBuilder, discordSort, messageLink } = require('discord.js');
// const { token } = require('./config.json');

const TOKEN = process.env.TOKEN;

//llamado a la API

async function getPictureAbout(tag = 'waifu', gif = false) {
    try {
        const response = await fetch(`https://api.waifu.im/search?included_tags=${tag}&gif=${gif}`);
        const data = await response.json();

        const { url, dominant_color, image_id, source } = data.images[0];

        return { url, dominant_color, image_id, source }

    } catch (error) {
        console.error('Ha ocurrido un error' + error)
    }
}

async function createEmbed({ message, nameAuthor, idFromImg, urlImg, colorForEmbed, source }) {
    await message.channel.send({
        embeds: [new EmbedBuilder()
            .setTitle(`URL: ${source}`)
            .setAuthor({ name: nameAuthor })
            .setDescription(`IMG-ID: ${idFromImg}`)
            .setImage(urlImg)
            .setColor(colorForEmbed)
        ]
    })
}
//definir cliente
const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)]
});


//contenido

client.on('ready', async (client) => {
    console.log('Estoy listo');

    client.user.setPresence({
        activities: { name: 'Write !help for more info...' },
        status: 'online'
    });
})


client.on('messageCreate', async message => {
    const messageContent = message.content.slice(1);

    let commandChannelId = null;

    if (message.content.startsWith('!')) {
        const nameLessTag = message.client.user.tag.split('#').shift();

        if (messageContent === "waifu") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout();
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (error) {
                console.error('Ha ocurrido un error' + error);
            }
        }

        if (messageContent === "waifu maid") {
            const { url, dominant_color, image_id, source } = await getPictureAbout("maid");
            await createEmbed({
                nameAuthor: nameLessTag,
                urlImg: url,
                colorForEmbed: dominant_color,
                idFromImg: image_id,
                message: message,
                source: source
            });
        }

        if (messageContent === "waifu uniform") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("uniform");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.error(err);
            }
        }

        if (messageContent === "waifu oppai") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("oppai");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.error('Ha ocurrido un error ' + err);
            }
        }


        //-----------------NFSW COMMANDS---------------

        if (messageContent === "waifuN") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("hentai");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.error('Ha ocurrido un error ' + err)
            }
        }

        if (messageContent === "waifuN gif") {
            const { url, dominant_color, image_id, source } = await getPictureAbout('hentai', true);
            await createEmbed({
                nameAuthor: nameLessTag,
                urlImg: url,
                colorForEmbed: dominant_color,
                idFromImg: image_id,
                message: message,
                source: source
            });
        }

        if (messageContent === "waifu ass") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("ass");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.err('Ha habido un error ' + err)
            }
        }

        if (messageContent === "waifu milf") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("milf");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.err('Ha habido un error ' + err)
            }
        }


        if (messageContent === "waifu paizuri") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("paizuri");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.err('Ha habido un error ' + err)
            }
        }

        if (messageContent === "waifu ecchi") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("ecchi");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.err('Ha habido un error ' + err)
            }
        }

        if (messageContent === "waifu ero") {
            try {
                const { url, dominant_color, image_id, source } = await getPictureAbout("ero");
                await createEmbed({
                    nameAuthor: nameLessTag,
                    urlImg: url,
                    colorForEmbed: dominant_color,
                    idFromImg: image_id,
                    message: message,
                    source: source
                });
            } catch (err) {
                console.err('Ha habido un error ' + err)
            }
        }


        // GENERAL COMMANDS

        if (messageContent === "saludo") {
            await message.reply(`Que pasa Teton? ${nameLessTag}`);
        }

        if (messageContent === "cleanChat") {
            await message.channel.bulkDelete(20).then((msj) => {
                message.reply(`Se eliminaron ${msj.size} mensajes del chat`);
            }).catch((err) => {
                console.error("Se produjo un error: " + err);
            });
        }

        if (messageContent === "help") {
            await message.author.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle('COMMANDS')
                        .setFields(
                            { name: '!saludo', value: 'El bot saluda.' },
                            { name: '!cleanChat', value: 'WARNING!! Borra 20 mensajes del canal donde se lo utilice.' },
                            { name: '!waifu', value: 'Muestra una imagen en chat de una waifu aleatoria' },
                            { name: '!waifu maid', value: 'Muestra una imagen en chat de una waifu con traje de maid.' },
                            { name: '!waifu uniform', value: 'Muestra una imagen en chat de una waifu con uniforme ya sea de trabajo o escuela.' },
                            { name: '!waifu oppai', value: 'Muestra una imagen en chat de una waifu con grandes atributos.' },

                        )
                        .setColor('Green')
                ],
            });
            await message.author.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle('NSFW COMMANDS')
                        .setFields(
                            { name: '!waifuN', value: 'Contenido NSFW sobre waifus en general.' },
                            { name: '!waifuN gif', value: 'Muestra un gif NSFW sobre waifus en general.' },
                            { name: '!waifu milf', value: 'Contenido NSFW sobre waifus milfs' },
                            { name: '!waifu ass', value: 'Contenido NSFW sobre waifus.' },
                            { name: '!waifu paizuri', value: 'Contenido NSFW sobre waifu.' },
                            { name: '!waifu oppai', value: 'Contenido NSFW sobre waifu.' },
                        )
                        .setColor('Red')
                ]
            })
        }
    }
})

//client.login sirve para iniciar la sesion con el bot y que comience a funcionar.
client.login(TOKEN);


