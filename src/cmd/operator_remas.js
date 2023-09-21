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
*/

const { MessageFlags } = require ("discord.js");
const command = require("../structures/Command.js");
var oplist = require ('../data/op_remas.json')

module.exports = new Command({
        name: "operator_remas",
        description: "operator.js remas version",
        alias: ["opr"],
        async run(message, args, client){
            if (message.author.bot) return;
            var opname = args.slice(1).join(" ").toLowerCase();
            //commonly used names must be defined to our names
            if (opname === "skalter") {var opname = "skadialt"};
            if (opname === "chalter" || opname === "chen the holung day") {var opname = "chenalt"};
            if (opname === "thermal-ex") {var opname = "thrm-ex"}; //no entry, wtf sakura
            if (opname === "eyja") {var opname = "eyjafjalla"};  //no entry for this either
            if (opname === "exu") {var opname = "exusiai"}; //no entry for this too...
            if (opname === "sa") {var opname = "silverash"};

            //for the part after this:
            //1. find op name in oplist.chr_6st, if not found then 5, 4, ... then robots
            //2. if found, print op name, then break
            //3. if not found, print the not found text

        }
})