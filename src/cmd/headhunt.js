const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "headhunt",
    description: "headhunt time",

    async run(message, args, client) {
        console.log(message.author.tag,"used a!gacha")
        //var banner = args.slice(1).join(" ");
        var banner = "standard";
        var i = 1;
        let op = ['0']
        
        while (i<15){
        var numba = Math.floor(Math.random() * 100)+1;
        if (banner === "standard") {
            //3 stars
            if (numba < 40){
                var result = Math.floor(Math.random() * 17)+1;
                switch (result){
                    case result = 1: 
                        var newLength = op.push("[★★★]               Fang");
                        break;
                    case result = 2:
                        var newLength = op.push("[★★★]               Vanilla");
                        break;
                    case result = 3:
                        var newLength = op.push("[★★★]               Plume");
                        break;
                    case result = 4:
                        var newLength = op.push("[★★★]               Hibiscus");
                        break;
                    case result = 5:
                        var newLength = op.push("[★★★]               Ansel");
                        break;
                    case reulst = 6:
                        var newLength = op.push("[★★★]               Lava");
                        break;
                    case result = 7:
                        var newLength = op.push("[★★★]               Steward");
                        break;
                    case result = 8:
                        var newLength = op.push("[★★★]               Kroos");
                        break;
                    case result = 9:
                        var newLength = op.push("[★★★]               Adnachiel");
                        break;
                    case result = 10:
                        var newLength = op.push("[★★★]               Orchid");
                        break;
                    case result = 11:
                        var newLength = op.push("[★★★]               Melantha");
                        break;
                    case result = 12:
                        var newLength = op.push("[★★★]               Beagle");
                        break;
                    case result = 13:
                        var newLength = op.push("[★★★]               Cardigan");
                        break;
                    case result = 14:
                        var newLength = op.push("[★★★]               Catapult");
                        break;
                    case result = 15:
                        var newLength = op.push("[★★★]               Midnight");
                        break;
                    case result = 16:
                        var newLength = op.push("[★★★]               Popukar");
                        break;
                    default:
                        var newLength = op.push("[★★★]               Spot");
                        
                }
            } //4 stars
                else if (numba < 90){
                var result = Math.floor(Math.random() * 39)+1;
                switch (result){
                    case result = 1:
                        var newLength = op.push("[★★★★]           Scavenger");
                        break;
                    case result = 2:
                        var newLength = op.push("[★★★★]           Vigna");
                        break;
                    case result = 3:
                        var newLength = op.push("[★★★★]           Myrrh");
                        break;
                    case reulst = 4:
                        var newLength = op.push("[★★★★]           Perfumer");
                        break;
                    case result = 5:
                        var newLength = op.push("[★★★★]           Haze");
                        break;
                    case result = 6:
                        var newLength = op.push("[★★★★]           Gitano");
                        break;
                    case result = 7:
                        var newLength = op.push("[★★★★]           Gravel");
                        break;
                    case result = 8:
                        var newLength = op.push("[★★★★]           Rope");
                        break;
                    case result = 9:
                        var newLength = op.push("[★★★★]           Shaw");
                        break;
                    case result = 10:
                        var newLength = op.push("[★★★★]           Shirayuki");
                        break;
                    case result = 11:
                        var newLength = op.push("[★★★★]           Meteor");
                        break;
                    case result = 12:
                        var newLength = op.push("[★★★★]           Jessica");
                        break;
                    case result = 13:
                        var newLength = op.push("[★★★★]           Deepcolor");
                        break;
                    case result = 14:
                        var newLength = op.push("[★★★★]           Earthspirit");
                        break;
                    case result = 15:
                        var newLength = op.push("[★★★★]           Dobermann");
                        break;
                    case result = 16:
                        var newLength = op.push("[★★★★]           Beehunter");
                        break;
                    case result = 17:
                        var newLength = op.push("[★★★★]           Mousse");
                        break;
                    case result = 18:
                        var newLength = op.push("[★★★★]           Frostleaf");
                        break;
                    case result = 19:
                        var newLength = op.push("[★★★★]           Matoimaru");
                        break;
                    case result = 20:
                        var newLength = op.push("[★★★★]           Cuora");
                        break;
                    case result = 21:
                        var newLength = op.push("[★★★★]           Gummy");
                        break;
                    case result = 22:
                        var newLength = op.push("[★★★★]           Matterhorn");
                        break;
                    case result = 23:
                        var newLength = op.push("[★★★★]           Greyy");
                        break;
                    case result = 24:
                        var newLength = op.push("[★★★★]           Sussurro");
                        break;
                    case result = 25:
                        var newLength = op.push("[★★★★]           Myrtle");
                        break;
                    case result = 26:
                        var newLength = op.push("[★★★★]           Vermiel");
                        break;
                    case result = 27:
                        var newLength = op.push("[★★★★]           May");
                        break;
                    case result = 28:
                        var newLength = op.push("[★★★★]           Ambriel");
                        break;
                    case result = 29:
                        var newLength = op.push("[★★★★]           Utage");
                        break;
                    case result = 30:
                        var newLength = op.push("[★★★★]           Cutter");
                        break;
                    case result = 31:
                        var newLength = op.push("[★★★★]           Podenco");
                        break;
                    case result = 32:
                        var newLength = op.push("[★★★★]           Click");
                        break;
                    case result = 33:
                        var newLength = op.push("[★★★★]           Jaye");
                        break;
                    case result = 34:
                        var newLength = op.push("[★★★★]           Aciddrop");
                        break;
                    case result = 35:
                        var newLength = op.push("[★★★★]           Arene");
                        break;
                    case result = 36:
                        var newLength = op.push("[★★★★]           Bubble");
                        break;
                    case result = 37:
                        var newLength = op.push("[★★★★]           Jackie");
                        break;
                    case result = 38:
                        var newLength = op.push("[★★★★]           Pinecone");
                        break;
                    default:
                        var newLength = op.push("[★★★★]           Beanstalk");
                }
            } //5 stars
                else if (numba < 98){
                    var rate = Math.floor(Math.random() * 100)+1;
                    if (rate > 50){
                        var rateup = Math.floor(Math.random() * 3)+1;
                        switch (rateup){
                            case rateup = 1:
                                var result = 2;
                            case rateup = 2:
                                var result = 18;
                            case rateup = 3: 
                                var result = 53;
                                                   
                        }
                    }
                    else {var result = Math.floor(Math.random() * 55)+1;}
                    switch (result){
                        case result = 1: 
                            var newLength = op.push("[★★★★★]       Ptilopsis");
                            break;
                        case result = 2:
                            var newLength = op.push("[★★★★★]       Zima");
                            break;
                        case result = 3:
                            var newLength = op.push("[★★★★★]       Texas");
                            break;
                        case result = 4:
                            var newLength = op.push("[★★★★★]       Franka");
                            break;
                        case result = 5:
                            var newLength = op.push("[★★★★★]       Lappland");
                            break;
                        case result = 6:
                            var newLength = op.push("[★★★★★]       Specter");
                            break;
                        case result = 7:
                            var newLength = op.push("[★★★★★]       Blue Poison");
                            break;
                        case result = 8:
                            var newLength = op.push("[★★★★★]       Platinum");
                            break;
                        case result = 9:
                            var newLength = op.push("[★★★★★]       Meteorite");
                            break;
                        case result = 10:
                            var newLength = op.push("[★★★★★]       Skyfire");
                            break;
                        case result = 11:
                            var newLength = op.push("[★★★★★]       Mayer");
                            break;
                        case result = 12:
                            var newLength = op.push("[★★★★★]       Silence");
                            break;
                        case result = 13:
                            var newLength = op.push("[★★★★★]       Warfarin");
                            break;
                        case result = 14:
                            var newLength = op.push("[★★★★★]       Nearl");
                            break;
                        case result = 15:
                            var newLength = op.push("[★★★★★]       Projekt Red");
                            break;
                        case result = 16:
                            var newLength = op.push("[★★★★★]       Liskarm");
                            break;
                        case result = 17:
                            var newLength = op.push("[★★★★★]       Croissant");
                            break;
                        case result = 18:
                            var newLength = op.push("[★★★★★]       Provence");
                            break;
                        case result = 19:
                            var newLength = op.push("[★★★★★]       Firewatch");
                            break;
                        case result = 20:
                            var newLength = op.push("[★★★★★]       Cliffheart");
                            break;
                        case result = 21:
                            var newLength = op.push("[★★★★★]       Pramanix");
                            break;
                        case result = 22:
                            var newLength = op.push("[★★★★★]       Istina");
                            break;
                        case result = 23:
                            var newLength = op.push("[★★★★★]       Sora");
                            break;
                        case result = 24:
                            var newLength = op.push("[★★★★★]       Manticore");
                            break;
                        case result = 25:
                            var newLength = op.push("[★★★★★]       FEater");
                            break;
                        case result = 26:
                            var newLength = op.push("[★★★★★]       Nightmare");
                            break;
                        case result = 27:
                            var newLength = op.push("[★★★★★]       Swire");
                            break;
                        case result = 28:
                            var newLength = op.push("[★★★★★]       Executor");
                            break;
                        case result = 29:
                            var newLength = op.push("[★★★★★]       Astesia");
                            break;
                        case result = 30:
                            var newLength = op.push("[★★★★★]       Glaucus");
                            break;
                        case result = 31:
                            var newLength = op.push("[★★★★★]       Waai Fu");
                            break;
                        case result = 32:
                            var newLength = op.push("[★★★★★]       GreyThroat");
                            break;
                        case result = 33:
                            var newLength = op.push("[★★★★★]       Reed");
                            break;
                        case result = 34:
                            var newLength = op.push("[★★★★★]       Broca");
                            break;
                        case result = 35:
                            var newLength = op.push("[★★★★★]       Hung");
                            break;
                        case result = 36:
                            var newLength = op.push("[★★★★★]       Leizi");
                            break;
                        case result = 37:
                            var newLength = op.push("[★★★★★]       Sesa");
                            break;
                        case result = 38:
                            var newLength = op.push("[★★★★★]       Leonhardt");
                            break;
                        case result = 39:
                            var newLength = op.push("[★★★★★]       Ayerscarpe");
                            break;
                        case result = 40:
                            var newLength = op.push("[★★★★★]       Asbestos");
                            break;
                        case result = 41:
                            var newLength = op.push("[★★★★★]       Tsukinogi");
                            break;
                        case result = 42:
                            var newLength = op.push("[★★★★★]       Beeswax");
                            break;
                        case result = 43:
                            var newLength = op.push("[★★★★★]       Chiave");
                            break;
                        case result = 44:
                            var newLength = op.push("[★★★★★]       Shamare");
                            break;
                        case result = 45:
                            var newLength = op.push("[★★★★★]       Elysium");
                            break;
                        case result = 46:
                            var newLength = op.push("[★★★★★]       Andreana");
                            break;
                        case result = 47:
                            var newLength = op.push("[★★★★★]       Flint");
                            break;
                        case result = 48:
                            var newLength = op.push("[★★★★★]       April");
                            break;
                        case result = 49:
                            var newLength = op.push("[★★★★★]       Whisperain");
                            break;
                        case result = 50:
                            var newLength = op.push("[★★★★★]       Kafka");
                            break;
                        case result = 51:
                            var newLength = op.push("[★★★★★]       Iris");
                            break;
                        case result = 52:
                            var newLength = op.push("[★★★★★]       Aosta");
                            break;
                        case result = 53:
                            var newLength = op.push("[★★★★★]       Mr.Nothing");
                            break;
                        case result = 54:
                            var newLength = op.push("[★★★★★]       Toddifons");
                            break;
                        default:
                            var newLength = op.push("[★★★★★]       Akafuyu");
                            break;
                    }
                } // 6 stars
                else {var rate = Math.floor(Math.random() * 100)+1;
                    if (rate > 50){
                        var rateup = Math.floor(Math.random() * 2)+1;
                        switch (rateup){
                            case rateup = 1:
                                var result = 27;
                            case rateup =2:
                                var result = 19;                                                   
                        }
                    } else {var result = Math.floor(Math.random() * 34)+1;}
                    switch (result){
                        case result = 1: 
                            var newLength = op.push("**[★★★★★★]   Ch'en**");
                            break;
                        case result = 2: 
                            var newLength = op.push("**[★★★★★★]   Siege**");
                            break;
                        case result = 3: 
                            var newLength = op.push("**[★★★★★★]   Shining**");
                            break;
                        case result = 4: 
                            var newLength = op.push("**[★★★★★★]   Nightingale**");
                            break;
                        case result = 5: 
                            var newLength = op.push("**[★★★★★★]   Ifrit**");
                            break;
                        case result = 6: 
                            var newLength = op.push("**[★★★★★★]   Eyjafjalla**");
                            break;
                        case result = 7: 
                            var newLength = op.push("**[★★★★★★]   Exusiai**");
                            break;
                        case result = 8: 
                            var newLength = op.push("**[★★★★★★]   Angelina**");
                            break;
                        case result = 9: 
                            var newLength = op.push("**[★★★★★★]   SilverAsh**");
                            break;
                        case result = 10: 
                            var newLength = op.push("**[★★★★★★]   Hoshiguma**");
                            break;
                        case result = 11: 
                            var newLength = op.push("**[★★★★★★]   Saria**");
                            break;
                        case result = 12: 
                            var newLength = op.push("**[★★★★★★]   Skadi**");
                            break;
                        case result = 13: 
                            var newLength = op.push("**[★★★★★★]   Schwarz**");
                            break;
                        case result = 14: 
                            var newLength = op.push("**[★★★★★★]   Hellagur**");
                            break;
                        case result = 15: 
                            var newLength = op.push("**[★★★★★★]   Magallan**");
                            break;
                        case result = 16: 
                            var newLength = op.push("**[★★★★★★]   Mostima**");
                            break;
                        case result = 17: 
                            var newLength = op.push("**[★★★★★★]   Blaze**");
                            break;
                        case result = 18: 
                            var newLength = op.push("**[★★★★★★]   Aak**");
                            break;
                        case result = 19: 
                            var newLength = op.push("**[★★★★★★]   Ceobe**");
                            break;
                        case result = 20: 
                            var newLength = op.push("**[★★★★★★]   Bagpipe**");
                            break;
                        case result = 21: 
                            var newLength = op.push("**[★★★★★★]   Phantom**");
                            break;
                        case result = 22: 
                            var newLength = op.push("**[★★★★★★]   Weedy**");
                            break;
                        case result = 23: 
                            var newLength = op.push("**[★★★★★★]   Poca**");
                            break;
                        case result = 24: 
                            var newLength = op.push("**[★★★★★★]   Suzuran**");
                            break;
                        case result = 25: 
                            var newLength = op.push("**[★★★★★★]   Thorns**");
                            break;
                        case result = 26: 
                            var newLength = op.push("**[★★★★★★]   Eunectes**");
                            break;
                        case result = 27: 
                            var newLength = op.push("**[★★★★★★]   Surtr**");
                            break;
                        case result = 28: 
                            var newLength = op.push("**[★★★★★★]   Blemishine**");
                            break;
                        case result = 29: 
                            var newLength = op.push("**[★★★★★★]   Mudrock**");
                            break;
                        case result = 30: 
                            var newLength = op.push("**[★★★★★★]   Mountain**");
                            break;
                        case result = 31: 
                            var newLength = op.push("**[★★★★★★]   Archetto**");
                            break;
                        case result = 32: 
                            var newLength = op.push("**[★★★★★★]   Saga**");
                            break;
                        case result = 33: 
                            var newLength = op.push("**[★★★★★★]   Passenger**");
                            break;
                        default:
                        var newLength = op.push("**[★★★★★★]   Kal'tsit**");
                    }}
        } else {
            message.reply('You have provided an invalid banner')
            i = 50
        }
    i = i + 1
    }
    message.reply(`Result:\n${op[1]}\n${op[2]}\n${op[3]}\n${op[4]}\n${op[5]}\n${op[6]}\n${op[7]}\n${op[8]}\n${op[9]}\n${op[10]}`)   
  }
});







//var newLength = op.push("[★★★★★]       ");
//                            break;