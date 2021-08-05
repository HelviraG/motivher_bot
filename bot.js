
/********************************************* MOTIV'HER - ADA BOT ***********************************************/
/********************************************/
/********* Developed by Helvira G ***********/
/********************************************/


/****************** Constantes **************************/

const Discord                   = require('discord.js')
const fetch                     = require('node-fetch')

const bot                       = new Discord.Client()
const cron                      = require('node-cron')

   

const welcome_msgs              = [
                                    [
                                      "Bienvenue chez Motiv'Her",
                                      " 😁! Présentes-toi dans <#822548203333353492>. Je suis Ada, à ton service 😉. Suis les <#821876233817948178> pour être au courant des dernières publications / events, <#824974137650315265>, tes meilleurs lofi pour se concentrer, de la dancehall pour décompresser 😉"
                                    ],
                                    [  
                                      "Hello",
                                      " et bienvenue chez Motiv'Her 👋. Ada, la petite fée 🧚. Tiens toi au courant de nos <#821876233817948178>, dis-nous tout sur toi dans <#822548203333353492> et <#824974137650315265> à fond !"
                                    ],
                                    [ 
                                      "Coucou",
                                      " 🖖. Je suis Ada, le tamagotchi de Motiv'Her 👾. Bienvenue chez Motiv'Her 🥳. Découvres nos <#821876233817948178>, parles nous de toi dans <#822548203333353492> et viens nous faire bouger dans <#824974137650315265>"
                                    ],
                                    [ 
                                      "Salut",
                                      " ✌️! Bienvenue chez Motiv'Her 🥳. Ici Ada, le Alexia de Motiv'Her 🤓. Ne loupes pas une miette de nos <#821876233817948178>, dis nous en plus sur toi dans <#822548203333353492> et partages ton dernier son préféré en codant dans <#824974137650315265>"
                                    ]
]
const new_mentor_msg             = [
                                    [
                                      "Bienvenue à toi",
                                      "🥳! Merci de faire partie de cette merveilleuse aventure en tant que mentor 🤩."
                                    ],
                                    [
                                      "Coucou à toi",
                                      "! Pas trop stressée d'être mentor ? T'inquiètes, ça va bien se passer 😉?"
                                    ]
]
const ada_msgs_here              = [
                                      [
                                        "Chut",
                                        " 🤫! Je suis en mode incognito 😎"
                                      ],
                                      [
                                        "Je peux pas discuter",
                                        " 🤷‍♀️. J'ai piscine 🏊‍♀️."
                                      ],
                                      [
                                        "Toujours là pour toi",
                                        " 😉 et les Motiv'Hers 💪"
                                      ],
                                      [
                                        "Je te manque",
                                        " 😘? Je ne suis jamais bien loin va 😁!"
                                      ]
]
const ada_msgs_where               = [
                                      [
                                        "Tu le sais pourtant ",
                                        " 😜. Quelque part au-dessus de ta tête 🛸!"
                                      ],
                                      [
                                        "Comme souvent ",
                                        " 🤭. Dans mon nuage, en train de chiller ☁️."
                                      ],
                                      [
                                        "En soirée avec des coupines ",
                                        " 👯, je boirais un verre à ta santé 🍸!"
                                      ],
                                      [
                                        "Je suis à la bibliothèque ",
                                        " 🤓. Il faut bien se ~~culturer~~ cultiver 📚!"
                                      ]
]
const ada_msgs_hello              = [
                                      [
                                        "Hello",
                                        " 👋. Heureuse de vous retrouver pour de nouvelles aventures 🚀"
                                      ],
                                      [
                                        "Bien le bonjour également ",
                                        " 🖖. La journée s'annonce fantastique 🤩!"
                                      ],
                                      [
                                        "Coucou",
                                        " 🤟. Je vous souhaite une excellente journée 😊"
                                      ],
                                      [
                                        "Salut",
                                        " 🙋‍♀️! Toujours un plaisir d'être parmi vous 😁"
                                      ]
]
const ada_ok                      = [
                                      [
                                        "J'suis un peu rouillée aujourd'hui",
                                        "😥! Fallait pas me laisser sous la pluie hier ☔️!"
                                      ],
                                      [
                                        "En pleine forme",
                                        "🤸‍♀️! Est-ce que je peux faire quelque chose pour toi 🧐?"
                                      ],
                                      [
                                        "Un peu débordée là",
                                        "😫! J'ai encore 2-3 bugs à corriger mais ça va le faire 😆!"
                                      ],
                                      [
                                        "Fatiguée en ce moment",
                                        "🥱, vivement les vacances 🛫!"
                                      ]
]
const meme_msgs                 = [
                                    [
                                      "Il ne faut pas se mettre dans des états pareils ",
                                      " ! Tiens un meme qui passait par là 😉."
                                    ],
                                    [
                                      "Ne pas te presser, tu devras 🧘‍♀️. ",
                                      ", ici 👇, ton meme t'attendra."
                                    ],
                                    [
                                      "👀 Tu m'as appelé ",
                                      " ? Ne bouges pas, ton meme arrive à point 👌 !"
                                    ],
                                    [
                                      "Quelque chose ne va pas ",
                                      " 😟? Une petite pilule 💊 de meme et c'est reparti 😁."
                                    ]
]
const apologize_msgs              = [
                                      "Toutes mes excuses, je vais y remédier ",
                                      "J'étais partie faire des courses, désolée ",
                                      "Alexa m'a appelée, elle va un problème. Je m'en occupe ",
]
const prez_msgs                   = [
                                      "Motiv'Her est le booster des développeuses 🚀! L'ambition de Motiv'Her est de pouvoir permettre au plus grand nombre de femmes d'accéder aux métier de développeuse en leur apportant motivation, convivialité et soutien 😁",
                                      "Motiv'Her c'est avant tout un endroit où il fait bon vivre 🎈! Ici on trouve de l'entraide, du soutien, de la bienveillance et du partage 😁! Tu trouveras ici des **badass mentors** 🦸‍♀️ pour te soutenir et répondre à tes questions sans jugement ni critique."
]
const nice_day_msg                = [
                                      [
                                        "Hello les",
                                        "et les",
                                        " 👋! Alors ? La journée a été bonne 🤩?"
                                      ],
                                      [
                                        "Coucou les",
                                        "et les",
                                        " 🖖! Comment a été votre journée 😊?"
                                      ],
                                      [
                                        "Salut les",
                                        "et les",
                                        " 🙋‍♀️! Vous avez passé une bonne journée 😁?"
                                      ]
]
const love_msg                    = [
                                      [
                                        "Merci",
                                        ". J'aime chacun des membres de Motiv'Her 💞!"
                                      ],
                                      [
                                        "Oooooh",
                                        ". Moi aussi 💕!"
                                      ],
                                      [
                                        "Je ne sais pas si je t'aime",
                                        ", je ne suis qu'un robot après tout 🤷‍♀️!"
                                      ],
                                      [
                                        "Moi aussi",
                                        ", je m'aime 😘!"
                                      ]
]

/***************** Cron Tasks ***************************/

cron.schedule('30 18 * * Monday-Friday', function() {  
  const nice_day_channel            = bot.channels.cache.get('826078818707963914')
  const random_nice_day             = Math.floor(Math.random() * nice_day_msg.length)
  nice_day_channel.send(nice_day_msg[random_nice_day][0] + ' <@&824697986289762344> ' + nice_day_msg[random_nice_day][1] + ' <@&821878292763508778>' + nice_day_msg[random_nice_day][2])
}, {
  scheduled: true,
  timezone: "Europe/Paris"
})

cron.schedule('30 9 * * Monday-Friday', function() {  
  const daily_quote_channel           = bot.channels.cache.get('872965561716465684')
  getRandomDailyQuote(daily_quote_channel)
}, {
  scheduled: true,
  timezone: "Europe/Paris"
})

// cron.schedule('* * * * Monday-Friday', function() {  
//   // const daily_quote_channel           = bot.channels.cache.get('872965561716465684')
//   const daily_quote_channel           = bot.channels.cache.get('825369194597449788')
//   console.log('Here')
// }, {
//   scheduled: true,
//   timezone: "Europe/Paris"
// })

/***************** Bot Core *****************************/

bot.on('ready', function () {
  const Guilds                    = bot.guilds.cache.map(guild => guild.id)
  console.log('Connecté !')
})

bot.on('guildMemberAdd', member => {
  // Welcome message for new users on the general channel
  const channel_message           = bot.channels.cache.get('821876233817948175')
  const random_header             = Math.floor(Math.random() * welcome_msgs.length)

  channel_message.send(welcome_msgs[random_header][0] +' <@'+ member.id +'>'+ welcome_msgs[random_header][1])
})

bot.on('message', message => {
  if (trim(message.content.toUpperCase()) === 'PING') {
    message.channel.send('<@'+ message.author.id +'> pong !')
  } else if (trim(message.content.toUpperCase()) === 'TIC') {
    message.channel.send('<@'+ message.author.id +'> tac !')
  } 
  
  if (message.mentions.members.size > 0) { 
    // In case forgotten welcome message
    if (message.content.toUpperCase().includes('ADA TU AS OUBLIÉ ')) {
      const channel_message           = bot.channels.cache.get('821876233817948175')
      const random_header             = Math.floor(Math.random() * welcome_msgs.length)
      const random_apologize          = Math.floor(Math.random() * apologize_msgs.length)

      message.react('😅')
      channel_message.send(apologize_msgs[random_apologize] + ' <@'+ message.author.id +'>. ' + welcome_msgs[random_header][0] +' <@'+ message.mentions.members.first().user.id +'>'+ welcome_msgs[random_header][1])
    } else if (message.content.toUpperCase().includes('ADA QU\'EST CE QU\'ON DIT À')) {
      const random_new_mentor         = Math.floor(Math.random() * new_mentor_msg.length)
      const random_apologize          = Math.floor(Math.random() * apologize_msgs.length)

      message.react('😅')
      message.channel.send(apologize_msgs[random_apologize] + ' <@'+ message.author.id +'>. ' + new_mentor_msg[random_new_mentor][0] +' <@'+ message.mentions.members.first().user.id +'> '+ new_mentor_msg[random_new_mentor][1])
    }
  }
  
  if ((message.mentions.members.size > 0) && (message.mentions.members.first().user.id == '825072507185922109')) { 
    if ((message.content.toUpperCase().includes('JE SUIS OÙ')) || (message.content.toUpperCase().includes('C\'EST QUOI MOTIV\'HER'))) {
      const random_prez                 = Math.floor(Math.random() * prez_msgs.length)

      message.react('💡')
      message.react('❓')
      message.channel.send(prez_msgs[random_prez])
    } else if ((message.content.toUpperCase().includes('HELLO')) || (message.content.toUpperCase().includes('COUCOU')) || (message.content.toUpperCase().includes('SALUT')) || (message.content.toUpperCase().includes('BONJOUR'))) {
      const random_hello                = Math.floor(Math.random() * ada_msgs_hello.length)

      message.react('👋')
      message.channel.send(ada_msgs_hello[random_hello][0] +' <@'+ message.author.id +'>'+ ada_msgs_hello[random_hello][1])
    } else if ((message.content.toUpperCase().includes('COMMENT ÇA VA')) || (message.content.toUpperCase().includes('CA VA')) || (message.content.toUpperCase().includes('COMMENT CA VA')) || (message.content.toUpperCase().includes('ÇA VA'))) {
      const random_ok                   = Math.floor(Math.random() * ada_ok.length)

      message.channel.send(ada_ok[random_ok][0] +' <@'+ message.author.id +'> '+ ada_ok[random_ok][1])
    } else if ((message.content.toUpperCase().includes('ES-TU LÀ')) || (message.content.toUpperCase().includes('ES TU LÀ')) || (message.content.toUpperCase().includes('TU ES LÀ')) || (message.content.toUpperCase().includes('T\'ES LÀ'))) {
      const random_here                 = Math.floor(Math.random() * ada_msgs_here.length)

      message.channel.send(ada_msgs_here[random_here][0] +' <@'+ message.author.id +'>'+ ada_msgs_here[random_here][1])
    } else if ((message.content.toUpperCase().includes('OÙ ES-TU')) || (message.content.toUpperCase().includes('OU ES TU')) || (message.content.toUpperCase().includes('TU ES OÙ')) || (message.content.toUpperCase().includes('T\'ES OÙ'))) {
      const random_where                = Math.floor(Math.random() * ada_msgs_where.length)

      message.react('🙌')
      message.react('👁️')
      message.channel.send(ada_msgs_where[random_where][0] +' <@'+ message.author.id +'>'+ ada_msgs_where[random_where][1])
    } else if ((message.content.toUpperCase().includes('TU PEUX REPASSER PLUS TARD'))) {
      message.react('😥')
      message.channel.send('C\'est juste que vous commencez à me manquer les ' + '<@&824697986289762344> et les <@&821878292763508778> ! Je me sens seule 😥')
    } else if (message.content.toUpperCase().includes('JE T\'AIME')) {
      const random_love                 = Math.floor(Math.random() * love_msg.length)

      message.react('😍')
      message.react('💖')
      message.channel.send(love_msg[random_love][0] +' <@'+ message.author.id +'>'+ love_msg[random_love][1])
    } else if ((message.content.toUpperCase().includes('PLS')) || (message.content.toUpperCase().includes('MEME MOI')) || ((message.content.toUpperCase().includes('HELP')))) {
      message.react('⛑️')
      loadRandomMemes(message)
    } else if ((message.content.toUpperCase().includes('CHUCK')) || (message.content.toUpperCase().includes('CHUCK'))) {
      message.react('🦾')
      getRandomChuckJokes(message)
    } else if (message.content.toUpperCase().includes('TECH')) {
      message.react('🔍')
      message.react('🗞')
      if (message.content.includes('#')) {
        var str                       = message.content
        var tag                       = str.split('#').pop()
        getRandomDevToArticleByTags(message, tag)
      } else {
        getRandomDevToArticle(message)
      }
    } else if (message.content.toUpperCase().includes('TEST START READY YES')) {
      message.channel.send('Prête à me mettre au travail <@'+ message.author.id +'> 💪!')
    } 
  }
})

/***************** Bot Actions *************************/

function loadRandomMemes(message) {
  let url                             = "https://www.reddit.com/r/ProgrammerHumor/random.json?limit=1";
  let settings                        = { method: "Get" };

  fetch(url, settings)
    .then(response => response.json())
    .then(response => {
      const random_meme               = Math.floor(Math.random() * meme_msgs.length)

      const embed                     = new Discord.MessageEmbed()
        .setColor('#ffa502')
        .setDescription('**'+meme_msgs[random_meme][0] +'<@'+ message.author.id +'>'+ meme_msgs[random_meme][1]+'**')
        .setImage(response[0].data['children'][0].data.url)
      message.channel.send(embed)
    })
    .catch((err) => {
      console.error(err)
    })
}

function getRandomChuckJokes(message) {
  let url                             = "https://api.chucknorris.io/jokes/random";
  let settings                        = { method: "Get" };

  fetch(url, settings)
    .then(response => response.json())
    .then(response => {
      const random_meme               = Math.floor(Math.random() * meme_msgs.length)

      const embed                     = new Discord.MessageEmbed()
        .setColor('#ffa502')
        .setAuthor('Chuck Norris contrôle Ada 💣', '', '')
        .setThumbnail('https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png')
        .setDescription('***'+jsUcfirst(response.value)+'***')
      message.channel.send(embed)
    })
    .catch((err) => {
      console.error(err)
    })
  
}

function getRandomDevToArticle(message) {
  let url                             = "https://dev.to/api/articles?per_page=100&top=15"
  let settings                        = { method: "Get" }

  fetch(url, settings)
    .then(response => response.json())
    .then(response => {
      let random_article                  = Math.floor(Math.random() * response.length)
      var date_to_display                 = new Date(response[random_article].published_at)

      const embed                     = new Discord.MessageEmbed()
        .setColor('#ffa502')
        .setTitle(response[random_article].title)
        .setDescription('*Dev.to #general pour <@'+ message.author.id +'> 📰*')
        .addFields(
          { name: '----', value: '***' + response[random_article].description + '***' }
        )
        .setURL(response[random_article].url)
        .setThumbnail('https://d2fltix0v2e0sb.cloudfront.net/dev-black.png')
        .setFooter('Écrit par : ' + response[random_article].user.name + ' | ' + date_to_display.toLocaleDateString('fr-FR'), response[random_article].user.profile_image)
      message.channel.send(embed)
    })
    .catch((err) => {
      console.error(err)
    })
  
}

function getRandomDevToArticleByTags(message, tag) {
  let url                             = "https://dev.to/api/articles?per_page=100&tag="+tag+"&top=15"
  let settings                        = { method: "Get" }

  fetch(url, settings)
    .then(response => response.json())
    .then(response => {
      let random_article              = Math.floor(Math.random() * response.length)
      var date_to_display             = new Date(response[random_article].published_at)

      const embed                     = new Discord.MessageEmbed()
        .setColor('#ffa502')
        .setTitle(response[random_article].title)
        .setDescription('*Dev.to #'+tag+' pour <@'+ message.author.id +'> 📰*')
        .addFields(
          { name: '----', value: '***' + response[random_article].description + '***' }
        )
        .setURL(response[random_article].url)
        .setThumbnail('https://d2fltix0v2e0sb.cloudfront.net/dev-black.png')
        .setFooter('Écrit par : ' + response[random_article].user.name + ' | ' + date_to_display.toLocaleDateString('fr-FR'), response[random_article].user.profile_image)
      message.channel.send(embed)
    })
    .catch((err) => {
      console.error(err)
    })
}

function getRandomDailyQuote(daily_quote_channel) {
  let url                             = "https://quotable.io/quotes?tags=technology|happiness|life|inspirational|future|wisdom|famous-quotes&limit=5"
  let settings                        = { method: "Get" }

  fetch(url, settings)
    .then(response => response.json())
    .then(response => {
      let random_quote                = Math.floor(Math.random() * response.count)
      let channel                     = daily_quote_channel

      const embed                     = new Discord.MessageEmbed()
        .setColor('#ff6b81')
        .setTitle('***'+ response.results[random_quote].content + '***')
        .setAuthor('Citation du jour', 'https://media-exp1.licdn.com/dms/image/C4D0BAQE3S6iWF4CLXg/company-logo_100_100/0/1616968606006?e=1635984000&v=beta&t=BTi4CWCtwotZzatJngebrNccHQ2xFyjht6vTUTe3rKI')
        .setDescription('--' + response.results[random_quote].author + '')
      channel.send(embed)
    })
    .catch((err) => {
      console.error(err)
    })
}

function jsUcfirst(str) 
{
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function trim(str) {
  return str.split(/\s/).join('')
}

bot.login('discord_token')