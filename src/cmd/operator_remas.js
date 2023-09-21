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

2023-09-21 20:42 +07:
- now I just relized that a better way to do this is just to use json data as a lookup table... I need a break. -giabao06

*/

const { MessageFlags } = require ("discord.js");
const command = require("../structures/Command.js");
var oplist = require ('../data/op_remas.json')

module.exports = new Command({
        name: "operator_remas",
        description: "operator.js remas version",
        alias: ["opr"],

})