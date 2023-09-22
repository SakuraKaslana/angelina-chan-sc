//operator.js, rewritten 
//did you know: the filename, temporary cmd name and its datafile (op_remas.json) is a reference to a maimai difficulty

/*
This comment block should be removed when all goals are met.

# General ideas for operator.js rewrite

## why?
- bad design in general, mainly too many switch cases
- op.json data is poorly structured
- No lookup table based on rarity 

## how will the rewrite work?
- arg1 is name
- finds arg1 in the lookup table (maybe a separate oprarity.json?, goal <1s lookup) 
note: this method may be inefficient; but for categorization purposes it might be useful
if no need, we can just do an `op.name` reply directly.

- once found, reply with op.rarity.name (so no switch cases)
- if not found, reply with not found.

2023-09-21 
- 20:42 +07: now I just relized that a better way to do this is just to use json data as a lookup table... I need a break. -giabao06
- 21:08 +07: well now I thought of just making every operator a json object then send it... what's wrong with me -giabao06
- 21:28 +07: never mind, a lookup table would still be needed :skull: (for now)
*/

const { MessageFlags } = require ("discord.js");
const command = require("../structures/Command.js");
var oplist = require ('../data/op_remas.json')

//add new operators here if there is an op_remas.json update

const list6 = ["siege", "angelina", "skalter", "w", "ceobe", "dusk", "chen", "blaze", "kaltsit", "chalter", "passenger", "skadi", "mudrock", "shining", "nightingale"];
const list5 = [];
const list4 = ["ambriel"];
const list3 = ["fang", "vanilla", "hibiscus", "ansel", "lava", "plume", "steward", "kroos", "adnachiel", "orchid", "melantha", "beagle", "spot", "cardi", "catapult", "midnight", "popukar"];
const list2 = ["yato", "durin", "12f"];
const list1 = ["lancet", "castle-3", "thermal-ex"]


module.exports = new command({
        name: "operator_remas",
        description: "operator.js remas version",
        alias: ["opr"],
        async run(message, args, client){
            if (message.author.bot) return;
            var opname = args.slice(1).join(" ").toLowerCase();
            //commonly used names must be defined to our names
            if (opname === "chen the holung day") {var opname = "chalter"};
            if (opname === "eyja") {var opname = "eyjafjalla"};  //no entry for this either
            if (opname === "exu") {var opname = "exusiai"}; //no entry for this too...
            if (opname === "sa") {var opname = "silverash"};
            if (opname === "kal'tsit") var opname = "kaltsit";
            var found=0;
            for (let i=0; i<=list6.length; i++) {
                if (opname === list6[i]) {message.reply(oplist.chr_6st[opname]); found=1; break}}
            for (let i=0; i<=list5.length; i++) {
                if (opname === list5[i]) {message.reply(oplist.chr_5st[opname]); found=1; break}}
            for (let i=0; i<=list4.length; i++) {
                if (opname === list4[i]) {message.reply(oplist.chr_4st[opname]); found=1; break}}
            for (let i=0; i<=list3.length; i++) {
                if (opname === list3[i]) {message.reply(oplist.chr_3st[opname]); found=1; break}}
            for (let i=0; i<=list2.length; i++) {
                if (opname === list2[i]) {message.reply(oplist.chr_2st[opname]); found=1; break}}
            for (let i=0; i<=list1.length; i++) {
                if (opname === list1[i]) {message.reply(oplist.chr_robots[opname]); found=1; break}}
            if (found === 0 ) message.reply('Operator currently not in database. Currently available operators: (this part isnt made yet)')
        }
})