/*

Ratings and how they work:

-2: Extremely detrimental
	  The sort of ability that relegates Pokemon with Uber-level BSTs
	  into NU.
	ex. Slow Start, Truant

-1: Detrimental
	  An ability that does more harm than good.
	ex. Defeatist, Normalize

 0: Useless
	  An ability with no net effect on a Pokemon during a battle.
	ex. Pickup, Illuminate

 1: Ineffective
	  An ability that has a minimal effect. Should never be chosen over
	  any other ability.
	ex. Damp, Shell Armor

 2: Situationally useful
	  An ability that can be useful in certain situations.
	ex. Blaze, Insomnia

 3: Useful
	  An ability that is generally useful.
	ex. Volt Absorb, Iron Fist

 4: Very useful
	  One of the most popular abilities. The difference between 3 and 4
	  can be ambiguous.
	ex. Technician, Protean

 5: Essential
	  The sort of ability that defines metagames.
	ex. Drizzle, Shadow Tag

*/
function abilities() {
return {
	"adaptability": {
		desc: "This Pokemon's attacks that receive STAB (Same Type Attack Bonus) are increased from 50% to 100%.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is increased from 1.5x to 2x.",
		id: "adaptability",
		name: "Adaptability",
		rating: 3.5,
		num: 91
	},
	"aftermath": {
		desc: "If a contact move knocks out this Pokemon, the opponent receives damage equal to one-fourth of its max HP.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
		id: "aftermath",
		name: "Aftermath",
		rating: 3,
		num: 106
	},
	"aerilate": {
		desc: "Turns all of this Pokemon's Normal-typed attacks into Flying-type and deal 1.3x damage. Does not affect Hidden Power.",
		shortDesc: "This Pokemon's Normal moves become Flying-type and do 1.3x damage.",
		id: "aerilate",
		name: "Aerilate",
		rating: 3,
		num: 185
	},
	"airlock": {
		desc: "While this Pokemon is active, all weather conditions and their effects are disabled.",
		shortDesc: "While this Pokemon is active, all weather conditions and their effects are disabled.",
		onAnyTryWeather: false,
		id: "airlock",
		name: "Air Lock",
		rating: 3,
		num: 76
	},
	"analytic": {
		desc: "If the user moves last, the power of that move is increased by 30%.",
		shortDesc: "This Pokemon's attacks do 1.3x damage if it is the last to move in a turn.",
		onBasePowerPriority: 8,
		id: "analytic",
		name: "Analytic",
		rating: 1,
		num: 148
	},
	"angerpoint": {
		desc: "If this Pokemon, or its Substitute, is struck by a Critical Hit, its Attack is boosted to six stages.",
		shortDesc: "If this Pokemon (not a Substitute) is hit by a critical hit, its Attack is boosted by 12.",
		id: "angerpoint",
		name: "Anger Point",
		rating: 2,
		num: 83
	},
	"anticipation": {
		desc: "A warning is displayed if an opposing Pokemon has the moves Fissure, Guillotine, Horn Drill, Sheer Cold, or any attacking move from a type that is considered super effective against this Pokemon (including Counter, Mirror Coat, and Metal Burst). Hidden Power, Judgment, Natural Gift and Weather Ball are considered Normal-type moves. Flying Press is considered a Fighting-type move.",
		shortDesc: "On switch-in, this Pokemon shudders if any foe has a super effective or OHKO move.",
		id: "anticipation",
		name: "Anticipation",
		rating: 1,
		num: 107
	},
	"arenatrap": {
		desc: "When this Pokemon enters the field, its opponents cannot switch or flee the battle unless they are part Flying-type, have the Levitate ability, are holding Shed Shell, or they use the moves Baton Pass or U-Turn. Flying-type and Levitate Pokemon cannot escape if they are holding Iron Ball or Gravity is in effect. Levitate Pokemon also cannot escape if their ability is disabled through other means, such as Skill Swap or Gastro Acid.",
		shortDesc: "Prevents foes from switching out normally unless they have immunity to Ground.",
		id: "arenatrap",
		name: "Arena Trap",
		rating: 5,
		num: 71
	},
	"aromaveil": {
		desc: "Protects this Pokemon and its allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",
		shortDesc: "Protects from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",
		id: "aromaveil",
		name: "Aroma Veil",
		rating: 3,
		num: 165
	},
	"aurabreak": {
		desc: "Reverses the effect of Dark Aura and Fairy Aura.",
		shortDesc: "Reverses the effect of Aura abilities.",
		id: "aurabreak",
		name: "Aura Break",
		rating: 2,
		num: 188
	},
	"baddreams": {
		desc: "If asleep, each of this Pokemon's opponents receives damage equal to one-eighth of its max HP.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		id: "baddreams",
		name: "Bad Dreams",
		rating: 2,
		num: 123
	},
	"battlearmor": {
		desc: "Critical Hits cannot strike this Pokemon.",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
		onCriticalHit: false,
		id: "battlearmor",
		name: "Battle Armor",
		rating: 1,
		num: 4
	},
	"bigpecks": {
		desc: "Prevents the Pokemon's Defense stat from being reduced.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense.",
		id: "bigpecks",
		name: "Big Pecks",
		rating: 1,
		num: 145
	},
	"blaze": {
		desc: "When its health reaches one-third or less of its max HP, this Pokemon's Fire-type attacks receive a 50% boost in power.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Fire attacks do 1.5x damage.",
		onModifyAtkPriority: 5,
		onModifySpAPriority: 5,
		id: "blaze",
		name: "Blaze",
		rating: 2,
		num: 66
	},
	"bulletproof": {
		desc: "This Pokemon is protected from some Ball and Bomb moves.",
		shortDesc: "This Pokemon is protected from ball and bomb moves.",
		id: "bulletproof",
		name: "Bulletproof",
		rating: 3,
		num: 171
	},
	"cheekpouch": {
		desc: "Restores HP when this Pokemon consumes a berry.",
		shortDesc: "Restores HP when this Pokemon consumes a berry.",
		id: "cheekpouch",
		name: "Cheek Pouch",
		rating: 2,
		num: 167
	},
	"chlorophyll": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its speed is temporarily doubled.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		id: "chlorophyll",
		name: "Chlorophyll",
		rating: 2,
		num: 34
	},
	"clearbody": {
		desc: "Opponents cannot reduce this Pokemon's stats; they can, however, modify stat changes with Power Swap, Guard Swap and Heart Swap and inflict stat boosts with Swagger and Flatter. This ability does not prevent self-inflicted stat reductions.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		id: "clearbody",
		name: "Clear Body",
		rating: 2,
		num: 29
	},
	"cloudnine": {
		desc: "While this Pokemon is active, all weather conditions and their effects are disabled.",
		shortDesc: "While this Pokemon is active, all weather conditions and their effects are disabled.",
		onAnyTryWeather: false,
		id: "cloudnine",
		name: "Cloud Nine",
		rating: 3,
		num: 13
	},
	"colorchange": {
		desc: "This Pokemon's type changes according to the type of the last move that hit this Pokemon.",
		shortDesc: "This Pokemon's type changes to match the type of the last move that hit it.",
		id: "colorchange",
		name: "Color Change",
		rating: 2,
		num: 16
	},
	"competitive": {
		desc: "Raises the user's Special Attack stat by two stages when a stat is lowered, including the Special Attack stat. This does not include self-induced stat drops like those from Close Combat.",
		shortDesc: "This Pokemon's SpAtk is boosted by 2 for each of its stats that is lowered by a foe.",
		id: "competitive",
		name: "Competitive",
		rating: 2,
		num: 172
	},
	"compoundeyes": {
		desc: "The accuracy of this Pokemon's moves receives a 30% increase; for example, a 75% accurate move becomes 97.5% accurate.",
		shortDesc: "This Pokemon's moves have their accuracy boosted to 1.3x.",
		id: "compoundeyes",
		name: "Compound Eyes",
		rating: 3.5,
		num: 14
	},
	"contrary": {
		desc: "Stat changes are inverted.",
		shortDesc: "If this Pokemon has a stat boosted it is lowered instead, and vice versa.",
		id: "contrary",
		name: "Contrary",
		rating: 4,
		num: 126
	},
	"cursedbody": {
		desc: "30% chance of disabling one of the opponent's moves when attacked. This works even if the attacker is behind a Substitute, but will not activate if the Pokemon with Cursed Body is behind a Substitute.",
		shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets Disabled.",
		id: "cursedbody",
		name: "Cursed Body",
		rating: 2,
		num: 130
	},
	"cutecharm": {
		desc: "If an opponent of the opposite gender directly attacks this Pokemon, there is a 30% chance that the opponent will become Attracted to this Pokemon.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
		id: "cutecharm",
		name: "Cute Charm",
		rating: 1,
		num: 56
	},
	"damp": {
		desc: "While this Pokemon is active, no Pokemon on the field can use Selfdestruct or Explosion.",
		shortDesc: "While this Pokemon is active, Selfdestruct, Explosion, and Aftermath do not work.",
		id: "damp",
		name: "Damp",
		rating: 0.5,
		num: 6
	},
	"darkaura": {
		desc: "Increases the power of all Dark-type moves in battle to 1.33x.",
		shortDesc: "Increases the power of all Dark-type moves in battle to 1.33x.",
		id: "darkaura",
		name: "Dark Aura",
		rating: 3,
		num: 186
	},
	"defeatist": {
		desc: "Attack and Special Attack are halved when HP is less than half.",
		shortDesc: "When this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",
		onModifyAtkPriority: 5,
		id: "defeatist",
		name: "Defeatist",
		rating: -1,
		num: 129
	},
	"defiant": {
		desc: "Raises the user's Attack stat by two stages when a stat is lowered, including the Attack stat. This does not include self-induced stat drops like those from Close Combat.",
		shortDesc: "This Pokemon's Attack is boosted by 2 for each of its stats that is lowered by a foe.",
		id: "defiant",
		name: "Defiant",
		rating: 2,
		num: 128
	},
	"download": {
		desc: "If this Pokemon switches into an opponent with equal Defenses or higher Defense than Special Defense, this Pokemon's Special Attack receives a 50% boost. If this Pokemon switches into an opponent with higher Special Defense than Defense, this Pokemon's Attack receive a 50% boost.",
		shortDesc: "On switch-in, Attack or Sp. Atk is boosted by 1 based on the foes' weaker Defense.",
		id: "download",
		name: "Download",
		rating: 4,
		num: 88
	},
	"drizzle": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Rain Dance (for 5 turns normally, or 8 turns while holding Damp Rock).",
		shortDesc: "On switch-in, the weather becomes Rain Dance.",
		id: "drizzle",
		name: "Drizzle",
		rating: 5,
		num: 2
	},
	"drought": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Sunny Day (for 5 turns normally, or 8 turns while holding Heat Rock).",
		shortDesc: "On switch-in, the weather becomes Sunny Day.",
		id: "drought",
		name: "Drought",
		rating: 5,
		num: 70
	},
	"dryskin": {
		desc: "This Pokemon absorbs Water attacks and gains a weakness to Fire attacks. If Sunny Day is in effect, this Pokemon takes damage. If Rain Dance is in effect, this Pokemon recovers health.",
		shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",
		onBasePowerPriority: 7,
		id: "dryskin",
		name: "Dry Skin",
		rating: 3.5,
		num: 87
	},
	"earlybird": {
		desc: "This Pokemon will remain asleep for half as long as it normally would; this includes both opponent-induced sleep and user-induced sleep via Rest.",
		shortDesc: "This Pokemon's sleep status lasts half as long as usual, self-induced or not.",
		id: "earlybird",
		name: "Early Bird",
		isHalfSleep: true,
		rating: 2.5,
		num: 48
	},
	"effectspore": {
		desc: "If an opponent directly attacks this Pokemon, there is a 30% chance that the opponent will become either poisoned, paralyzed or put to sleep. There is an equal chance to inflict each status.",
		shortDesc: "30% chance of poisoning, paralyzing, or causing sleep on Pokemon making contact.",
		id: "effectspore",
		name: "Effect Spore",
		rating: 2,
		num: 27
	},
	"fairyaura": {
		desc: "Increases the power of all Fairy-type moves in battle to 1.33x.",
		shortDesc: "Increases the power of all Fairy-type moves in battle to 1.33x.",
		onBasePowerPriority: 8,
		id: "fairyaura",
		name: "Fairy Aura",
		rating: 3,
		num: 187
	},
	"filter": {
		desc: "This Pokemon receives one-fourth reduced damage from Super Effective attacks.",
		shortDesc: "This Pokemon receives 3/4 damage from super effective attacks.",
		id: "filter",
		name: "Filter",
		rating: 3,
		num: 111
	},
	"flamebody": {
		desc: "If an opponent directly attacks this Pokemon, there is a 30% chance that the opponent will become burned.",
		shortDesc: "30% chance of burning a Pokemon making contact with this Pokemon.",
		id: "flamebody",
		name: "Flame Body",
		rating: 2,
		num: 49
	},
	"flareboost": {
		desc: "When the user with this ability is burned, its Special Attack is raised by 50%.",
		shortDesc: "When this Pokemon is burned, its special attacks do 1.5x damage.",
		onBasePowerPriority: 8,
		id: "flareboost",
		name: "Flare Boost",
		rating: 3,
		num: 138
	},
	"flashfire": {
		desc: "This Pokemon is immune to all Fire-type attacks; additionally, its own Fire-type attacks receive a 50% boost if a Fire-type move hits this Pokemon. Multiple boosts do not occur if this Pokemon is hit with multiple Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
		id: "flashfire",
		name: "Flash Fire",
		rating: 3,
		num: 18
	},
	"flowergift": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its Attack and Special Defense stats (as well as its partner's stats in double battles) receive a 50% boost.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
		onModifyAtkPriority: 3,
		id: "flowergift",
		name: "Flower Gift",
		rating: 3,
		num: 122
	},
	"flowerveil": {
		desc: "Prevents ally Grass-type Pokemon from being statused or having their stats lowered.",
		shortDesc: "Prevents lowering of ally Grass-type Pokemon's stats.",
		id: "flowerveil",
		name: "Flower Veil",
		rating: 0,
		num: 166
	},
	"forecast": {
		desc: "This Pokemon's type changes according to the current weather conditions: it becomes Fire-type during Sunny Day, Water-type during Rain Dance, Ice-type during Hail and remains its regular type otherwise.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		id: "forecast",
		name: "Forecast",
		rating: 4,
		num: 59
	},
	"forewarn": {
		desc: "The move with the highest Base Power in the opponent's moveset is revealed.",
		shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest Base Power.",
		id: "forewarn",
		name: "Forewarn",
		rating: 1,
		num: 108
	},
	"friendguard": {
		desc: "Reduces the damage received from an ally in a double or triple battle.",
		shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
		id: "friendguard",
		name: "Friend Guard",
		rating: 0,
		num: 132
	},
	"frisk": {
		desc: "When this Pokemon enters the field, it identifies all the opponent's held items.",
		shortDesc: "On switch-in, this Pokemon identifies the foe's held items.",
		id: "frisk",
		name: "Frisk",
		rating: 1.5,
		num: 119
	},
	"furcoat": {
		desc: "Halves the damage done to this Pokemon by physical attacks.",
		shortDesc: "Halves physical damage done to this Pokemon.",
		onModifyAtkPriority: 6,
		id: "furcoat",
		name: "Fur Coat",
		rating: 3.5,
		num: 169
	},
	"galewings": {
		desc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		shortDesc: "Gives priority to Flying-type moves.",
		id: "galewings",
		name: "Gale Wings",
		rating: 4.5,
		num: 177
	},
	"gluttony": {
		desc: "This Pokemon consumes its held berry when its health reaches 50% max HP or lower.",
		shortDesc: "When this Pokemon has 1/2 or less of its max HP, it uses certain Berries early.",
		id: "gluttony",
		name: "Gluttony",
		rating: 1.5,
		num: 82
	},
	"gooey": {
		desc: "Contact with this Pokemon lowers the attacker's Speed stat by 1.",
		shortDesc: "Contact with this Pokemon lowers the attacker's Speed.",
		id: "gooey",
		name: "Gooey",
		rating: 3,
		num: 183
	},
	"grasspelt": {
		desc: "This Pokemon's Defense is boosted in Grassy Terrain",
		shortDesc: "This Pokemon's Defense is boosted in Grassy Terrain.",
		onModifyDefPriority: 6,
		id: "grasspelt",
		name: "Grass Pelt",
		rating: 2,
		num: 179
	},
	"guts": {
		desc: "When this Pokemon is poisoned (including Toxic), burned, paralyzed or asleep (including self-induced Rest), its Attack stat receives a 50% boost; the burn status' Attack drop is also ignored.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5x; burn's Attack drop is ignored.",
		onModifyAtkPriority: 5,
		id: "guts",
		name: "Guts",
		rating: 3,
		num: 62
	},
	"harvest": {
		desc: "When the user uses a held Berry, it has a 50% chance of having it restored at the end of the turn. This chance becomes 100% during Sunny Day.",
		shortDesc: "50% chance this Pokemon's Berry is restored at the end of each turn. 100% in Sun.",
		id: "harvest",
		name: "Harvest",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		rating: 2,
		num: 139
	},
	"healer": {
		desc: "Has a 30% chance of curing an adjacent ally's status ailment at the end of each turn in Double and Triple Battles.",
		shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
		id: "healer",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		rating: 0,
		num: 131
	},
	"heatproof": {
		desc: "This Pokemon receives half damage from both Fire-type attacks and residual burn damage.",
		shortDesc: "This Pokemon receives half damage from Fire-type attacks and burn damage.",
		onBasePowerPriority: 7,
		id: "heatproof",
		name: "Heatproof",
		rating: 2.5,
		num: 85
	},
	"heavymetal": {
		desc: "The user's weight is doubled. This increases user's base power of Heavy Slam and Heat Crash, as well as damage taken from the opponent's Low Kick and Grass Knot, due to these moves being calculated by the target's weight.",
		shortDesc: "This Pokemon's weight is doubled.",
		id: "heavymetal",
		name: "Heavy Metal",
		rating: -1,
		num: 134
	},
	"honeygather": {
		desc: "If it is not already holding an item, this Pokemon may find and be holding Honey after a battle.",
		shortDesc: "No competitive use.",
		id: "honeygather",
		name: "Honey Gather",
		rating: 0,
		num: 118
	},
	"hugepower": {
		desc: "This Pokemon's Attack stat is doubled. Therefore, if this Pokemon's Attack stat on the status screen is 200, it effectively has an Attack stat of 400; which is then subject to the full range of stat boosts and reductions.",
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		id: "hugepower",
		name: "Huge Power",
		rating: 5,
		num: 37
	},
	"hustle": {
		desc: "This Pokemon's Attack receives a 50% boost but its Physical attacks receive a 20% drop in Accuracy. For example, a 100% accurate move would become an 80% accurate move. The accuracy of moves that never miss, such as Aerial Ace, remains unaffected.",
		shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
		// This should be applied directly to the stat as opposed to chaining witht he others
		onModifyAtkPriority: 5,
		id: "hustle",
		name: "Hustle",
		rating: 3,
		num: 55
	},
	"hydration": {
		desc: "If this Pokemon is active while Rain Dance is in effect, it recovers from poison, paralysis, burn, sleep and freeze at the end of the turn.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		id: "hydration",
		name: "Hydration",
		rating: 2,
		num: 93
	},
	"hypercutter": {
		desc: "Opponents cannot reduce this Pokemon's Attack stat; they can, however, modify stat changes with Power Swap or Heart Swap and inflict a stat boost with Swagger. This ability does not prevent self-inflicted stat reductions.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack.",
		id: "hypercutter",
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52
	},
	"icebody": {
		desc: "If active while Hail is in effect, this Pokemon recovers one-sixteenth of its max HP after each turn. If a non-Ice-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
		id: "icebody",
		name: "Ice Body",
		rating: 3,
		num: 115
	},
	"illuminate": {
		desc: "When this Pokemon is in the first slot of the player's party, it doubles the rate of wild encounters.",
		shortDesc: "No competitive use.",
		id: "illuminate",
		name: "Illuminate",
		rating: 0,
		num: 35
	},
	"illusion": {
		desc: "Illusion will change the appearance of the Pokemon to a different species. This is dependent on the last Pokemon in the player's party. Along with the species itself, Illusion is broken when the user is damaged, but is not broken by Substitute, weather conditions, status ailments, or entry hazards. Illusion will replicate the type of Poke Ball, the species name, and the gender of the Pokemon it is masquerading as.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",
		// illusion clearing is hardcoded in the damage function
		id: "illusion",
		name: "Illusion",
		rating: 4.5,
		num: 149
	},
	"immunity": {
		desc: "This Pokemon cannot become poisoned nor Toxic poisoned.",
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
		id: "immunity",
		name: "Immunity",
		rating: 1,
		num: 17
	},
	"imposter": {
		desc: "As soon as the user comes into battle, it Transforms into its opponent, copying the opponent's stats exactly, with the exception of HP. Imposter copies all stat changes on the target originating from moves and abilities such as Swords Dance and Intimidate, but not from items such as Choice Specs. Imposter will not Transform the user if the opponent is an Illusion or if the opponent is behind a Substitute.",
		shortDesc: "On switch-in, this Pokemon copies the foe it's facing; stats, moves, types, Ability.",
		id: "imposter",
		name: "Imposter",
		rating: 5,
		num: 150
	},
	"infiltrator": {
		desc: "Ignores Substitute, Reflect, Light Screen, and Safeguard on the target.",
		shortDesc: "This Pokemon's moves ignore the foe's Substitute, Reflect, Light Screen, Safeguard, and Mist.",
		id: "infiltrator",
		name: "Infiltrator",
		rating: 2.5,
		num: 151
	},
	"innerfocus": {
		desc: "This Pokemon cannot be made to flinch.",
		shortDesc: "This Pokemon cannot be made to flinch.",
		onFlinch: false,
		id: "innerfocus",
		name: "Inner Focus",
		rating: 1,
		num: 39
	},
	"insomnia": {
		desc: "This Pokemon cannot be put to sleep; this includes both opponent-induced sleep as well as user-induced sleep via Rest.",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
		id: "insomnia",
		name: "Insomnia",
		rating: 2,
		num: 15
	},
	"intimidate": {
		desc: "When this Pokemon enters the field, the Attack stat of each of its opponents lowers by one stage.",
		shortDesc: "On switch-in, this Pokemon lowers adjacent foes' Attack by 1.",
		id: "intimidate",
		name: "Intimidate",
		rating: 3.5,
		num: 22
	},
	"ironbarbs": {
		desc: "All moves that make contact with the Pokemon with Iron Barbs will damage the user by 1/8 of their maximum HP after damage is dealt.",
		shortDesc: "This Pokemon causes other Pokemon making contact to lose 1/8 of their max HP.",
		onAfterDamageOrder: 1,
		id: "ironbarbs",
		name: "Iron Barbs",
		rating: 3,
		num: 160
	},
	"ironfist": {
		desc: "This Pokemon receives a 20% power boost for the following attacks: Bullet Punch, Comet Punch, Dizzy Punch, Drain Punch, Dynamicpunch, Fire Punch, Focus Punch, Hammer Arm, Ice Punch, Mach Punch, Mega Punch, Meteor Mash, Shadow Punch, Sky Uppercut, and Thunderpunch. Sucker Punch, which is known Ambush in Japan, is not boosted.",
		shortDesc: "This Pokemon's punch-based attacks do 1.2x damage. Sucker Punch is not boosted.",
		onBasePowerPriority: 8,
		id: "ironfist",
		name: "Iron Fist",
		rating: 3,
		num: 89
	},
	"justified": {
		desc: "Will raise the user's Attack stat one level when hit by any Dark-type moves. Unlike other abilities with immunity to certain typed moves, the user will still receive damage from the attack. Justified will raise Attack one level for each hit of a multi-hit move like Beat Up.",
		shortDesc: "This Pokemon's Attack is boosted by 1 after it is damaged by a Dark-type attack.",
		id: "justified",
		name: "Justified",
		rating: 2,
		num: 154
	},
	"keeneye": {
		desc: "This Pokemon's Accuracy cannot be lowered.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's accuracy.",
		id: "keeneye",
		name: "Keen Eye",
		rating: 1,
		num: 51
	},
	"klutz": {
		desc: "This Pokemon ignores both the positive and negative effects of its held item, other than the speed-halving and EV-enhancing effects of Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight. Fling cannot be used.",
		shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
		onModifyPokemonPriority: 1,
		id: "klutz",
		name: "Klutz",
		rating: 0,
		num: 103
	},
	"leafguard": {
		desc: "If this Pokemon is active while Sunny Day is in effect, it cannot become poisoned, burned, paralyzed or put to sleep (other than user-induced Rest). Leaf Guard does not heal status effects that existed before Sunny Day came into effect.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		id: "leafguard",
		name: "Leaf Guard",
		rating: 1,
		num: 102
	},
	"levitate": {
		desc: "This Pokemon is immune to Ground-type attacks, Spikes, Toxic Spikes and the Arena Trap ability; it loses these immunities while holding Iron Ball, after using Ingrain or if Gravity is in effect.",
		shortDesc: "This Pokemon is immune to Ground; Gravity, Ingrain, Smack Down, Iron Ball nullify it.",
		id: "levitate",
		name: "Levitate",
		rating: 3.5,
		num: 26
	},
	"lightmetal": {
		desc: "The user's weight is halved. This decreases the damage taken from Low Kick and Grass Knot, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
		shortDesc: "This Pokemon's weight is halved.",
		id: "lightmetal",
		name: "Light Metal",
		rating: 1,
		num: 135
	},
	"lightningrod": {
		desc: "During double battles, this Pokemon draws any single-target Electric-type attack to itself. If an opponent uses an Electric-type attack that affects multiple Pokemon, those targets will be hit. This ability does not affect Electric Hidden Power or Judgment. The user is immune to Electric and its Special Attack is increased one stage when hit by one.",
		shortDesc: "This Pokemon draws Electric moves to itself to boost Sp. Atk by 1; Electric immunity.",
		id: "lightningrod",
		name: "Lightningrod",
		rating: 3.5,
		num: 32
	},
	"limber": {
		desc: "This Pokemon cannot become paralyzed.",
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
		id: "limber",
		name: "Limber",
		rating: 2,
		num: 7
	},
	"liquidooze": {
		desc: "When another Pokemon uses Absorb, Drain Punch, Dream Eater, Giga Drain, Leech Life, Leech Seed or Mega Drain against this Pokemon, the attacking Pokemon loses the amount of health that it would have gained.",
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",
		id: "liquidooze",
		name: "Liquid Ooze",
		rating: 1,
		num: 64
	},
	"magicbounce": {
		desc: "Non-damaging moves are reflected back at the user.",
		shortDesc: "This Pokemon blocks certain status moves and uses the move itself.",
		id: "magicbounce",
		name: "Magic Bounce",
		onTryHitPriority: 1,
		effect: {
			duration: 1
		},
		rating: 5,
		num: 156
	},
	"magicguard": {
		desc: "Prevents all damage except from direct attacks.",
		shortDesc: "This Pokemon can only be damaged by direct attacks.",
		id: "magicguard",
		name: "Magic Guard",
		rating: 4.5,
		num: 98
	},
	"magician": {
		desc: "If this Pokemon is not holding an item, it steals the held item of a target it hits with a move.",
		shortDesc: "This Pokemon steals the held item of a target it hits with a move.",
		id: "magician",
		name: "Magician",
		rating: 2,
		num: 170
	},
	"magmaarmor": {
		desc: "This Pokemon cannot become frozen.",
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
		id: "magmaarmor",
		name: "Magma Armor",
		rating: 0.5,
		num: 40
	},
	"magnetpull": {
		desc: "When this Pokemon enters the field, Steel-type opponents cannot switch out nor flee the battle unless they are holding Shed Shell or use attacks like U-Turn or Baton Pass.",
		shortDesc: "Prevents Steel-type foes from switching out normally.",
		id: "magnetpull",
		name: "Magnet Pull",
		rating: 4.5,
		num: 42
	},
	"marvelscale": {
		desc: "When this Pokemon becomes burned, poisoned (including Toxic), paralyzed, frozen or put to sleep (including self-induced sleep via Rest), its Defense receives a 50% boost.",
		shortDesc: "If this Pokemon is statused, its Defense is 1.5x.",
		id: "marvelscale",
		name: "Marvel Scale",
		rating: 3,
		num: 63
	},
	"megalauncher": {
		desc: "Boosts the power of Aura and Pulse moves, such as Aura Sphere and Dark Pulse, by 50%.",
		shortDesc: "Boosts the power of Aura/Pulse moves by 50%.",
		id: "megalauncher",
		name: "Mega Launcher",
		rating: 3,
		num: 178
	},
	"minus": {
		desc: "This Pokemon's Special Attack receives a 50% boost in double battles if a partner has the Plus or Minus ability.",
		shortDesc: "If an ally has the Ability Plus or Minus, this Pokemon's Sp. Atk is 1.5x.",
		onModifySpAPriority: 5,
		id: "minus",
		name: "Minus",
		rating: 0,
		num: 58
	},
	"moldbreaker": {
		desc: "When this Pokemon uses any move, it nullifies the Ability of any active Pokemon that hinder or empower this Pokemon's attacks. These abilities include Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Herbivore, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightningrod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke and Wonder Guard.",
		shortDesc: "This Pokemon's moves ignore any Ability that could modify the effectiveness.",
		id: "moldbreaker",
		name: "Mold Breaker",
		rating: 3,
		num: 104
	},
	"moody": {
		desc: "At the end of each turn, the Pokemon raises a random stat that isn't already +6 by two stages, and lowers a random stat that isn't already -6 by one stage. These stats include accuracy and evasion.",
		shortDesc: "Boosts a random stat by 2 and lowers another stat by 1 at the end of each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		id: "moody",
		name: "Moody",
		rating: 5,
		num: 141
	},
	"motordrive": {
		desc: "This Pokemon is immune to all Electric-type moves (including Status moves). If hit by an Electric-type attack, its Speed increases by one stage.",
		shortDesc: "This Pokemon's Speed is boosted by 1 if hit by an Electric move; Electric immunity.",
		id: "motordrive",
		name: "Motor Drive",
		rating: 3,
		num: 78
	},
	"moxie": {
		desc: "If this Pokemon knocks out another Pokemon with a damaging attack, its Attack is raised by one stage.",
		shortDesc: "This Pokemon's Attack is boosted by 1 if it attacks and faints another Pokemon.",
		id: "moxie",
		name: "Moxie",
		rating: 4,
		num: 153
	},
	"multiscale": {
		desc: "If this Pokemon is at full HP, it takes half damage from attacks.",
		shortDesc: "If this Pokemon is at full HP, it takes half damage from attacks.",
		id: "multiscale",
		name: "Multiscale",
		rating: 4,
		num: 136
	},
	"multitype": {
		desc: "If this Pokemon is Arceus, its type and sprite change to match its held Plate. Either way, this Pokemon is holding a Plate, the Plate cannot be taken (such as by Trick or Thief). This ability cannot be Skill Swapped, Role Played or Traced.",
		shortDesc: "If this Pokemon is Arceus, its type changes to match its held Plate.",
		id: "multitype",
		name: "Multitype",
		rating: 4,
		num: 121
	},
	"mummy": {
		desc: "When the user is attacked by a contact move, the opposing Pokemon's ability is turned into Mummy as well. Multitype, Wonder Guard and Mummy itself are the only abilities not affected by Mummy. The effect of Mummy is not removed by Mold Breaker, Turboblaze, or Teravolt.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",
		id: "mummy",
		name: "Mummy",
		rating: 1,
		num: 152
	},
	"naturalcure": {
		desc: "When this Pokemon switches out of battle, it is cured of poison (including Toxic), paralysis, burn, freeze and sleep (including self-induced Rest).",
		shortDesc: "This Pokemon has its status cured when it switches out.",
		id: "naturalcure",
		name: "Natural Cure",
		rating: 4,
		num: 30
	},
	"noguard": {
		desc: "Every attack used by or against this Pokemon will always hit, even during evasive two-turn moves such as Fly and Dig.",
		shortDesc: "Every move used by or against this Pokemon will always hit.",
		id: "noguard",
		name: "No Guard",
		rating: 4,
		num: 99
	},
	"normalize": {
		desc: "Makes all of this Pokemon's attacks Normal-typed.",
		shortDesc: "This Pokemon's moves all become Normal-typed.",
		id: "normalize",
		name: "Normalize",
		rating: -1,
		num: 96
	},
	"oblivious": {
		desc: "This Pokemon cannot be infatuated (by Attract or Cute Charm) or taunted. Gaining this Ability while afflicted by either condition cures it.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.",
		id: "oblivious",
		name: "Oblivious",
		rating: 0.5,
		num: 12
	},
	"overcoat": {
		desc: "In battle, the Pokemon does not take damage from weather conditions like Sandstorm or Hail. It is also immune to powder moves.",
		shortDesc: "This Pokemon is immune to residual weather damage, and powder moves.",
		id: "overcoat",
		name: "Overcoat",
		rating: 2,
		num: 142
	},
	"overgrow": {
		desc: "When its health reaches one-third or less of its max HP, this Pokemon's Grass-type attacks receive a 50% boost in power.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Grass attacks do 1.5x damage.",
		id: "overgrow",
		name: "Overgrow",
		rating: 2,
		num: 65
	},
	"owntempo": {
		desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
		shortDesc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
		id: "owntempo",
		name: "Own Tempo",
		rating: 1,
		num: 20
	},
	"parentalbond": {
		desc: "Allows the Pokemon to hit twice with the same move in one turn. Second hit has 0.5x base power. Does not affect Status, multihit, or spread moves (in doubles).",
		shortDesc: "Hits twice in one turn. Second hit has 0.5x base power.",
		id: "parentalbond",
		name: "Parental Bond",
		rating: 4.5,
		num: 184
	},
	"pickup": {
		desc: "If an opponent uses a consumable item, Pickup will give the Pokemon the item used, if it is not holding an item. If multiple Pickup Pokemon are in play, one will pick up a copy of the used Berry, and may or may not use it immediately. Works on Berries, Gems, Absorb Bulb, Focus Sash, Herbs, Cell Battery, Red Card, and anything that is thrown with Fling.",
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
		id: "pickup",
		name: "Pickup",
		rating: 0,
		num: 53
	},
	"pickpocket": {
		desc: "If this Pokemon has no item, it steals an item off an attacking Pokemon making contact.",
		shortDesc: "If this Pokemon has no item, it steals an item off a Pokemon making contact.",
		id: "pickpocket",
		name: "Pickpocket",
		rating: 1,
		num: 124
	},
	"pixilate": {
		desc: "Turns all of this Pokemon's Normal-typed attacks into Fairy-type and deal 1.3x damage. Does not affect Hidden Power.",
		shortDesc: "This Pokemon's Normal moves become Fairy-type and do 1.3x damage.",
		id: "pixilate",
		name: "Pixilate",
		rating: 3,
		num: 182
	},
	"plus": {
		desc: "This Pokemon's Special Attack receives a 50% boost in double battles if a partner has the Plus or Minus ability.",
		shortDesc: "If an ally has the Ability Plus or Minus, this Pokemon's Sp. Atk is 1.5x.",
		id: "plus",
		name: "Plus",
		rating: 0,
		num: 57
	},
	"poisonheal": {
		desc: "If this Pokemon becomes poisoned (including Toxic), it will recover 1/8 of its max HP after each turn.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
		id: "poisonheal",
		name: "Poison Heal",
		rating: 4,
		num: 90
	},
	"poisonpoint": {
		desc: "If an opponent contact attacks this Pokemon, there is a 30% chance that the opponent will become poisoned.",
		shortDesc: "30% chance of poisoning a Pokemon making contact with this Pokemon.",
		id: "poisonpoint",
		name: "Poison Point",
		rating: 2,
		num: 38
	},
	"poisontouch": {
		desc: "This Pokemon's contact attacks have a 30% chance of poisoning the target.",
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
		id: "poisontouch",
		name: "Poison Touch",
		rating: 2,
		num: 143
	},
	"prankster": {
		desc: "This Pokemon's Status moves have their priority increased by 1 stage.",
		shortDesc: "This Pokemon's Status moves have their priority increased by 1.",
		id: "prankster",
		name: "Prankster",
		rating: 4.5,
		num: 158
	},
	"pressure": {
		desc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		id: "pressure",
		name: "Pressure",
		rating: 1.5,
		num: 46
	},
	"protean": {
		desc: "Right before this Pokemon uses a move, it changes its type to match that move. Hidden Power is interpreted as its Hidden Power type, rather than Normal.",
		shortDesc: "Right before this Pokemon uses a move, it changes its type to match that move.",
		id: "protean",
		name: "Protean",
		rating: 4,
		num: 168
	},
	"purepower": {
		desc: "This Pokemon's Attack stat is doubled. Note that this is the Attack stat itself, not the base Attack stat of its species.",
		shortDesc: "This Pokemon's Attack is doubled.",
		id: "purepower",
		name: "Pure Power",
		rating: 5,
		num: 74
	},
	"quickfeet": {
		desc: "When this Pokemon is poisoned (including Toxic), burned, paralyzed, asleep (including self-induced Rest) or frozen, its Speed stat receives a 50% boost; the paralysis status' Speed drop is also ignored.",
		shortDesc: "If this Pokemon is statused, its Speed is 1.5x; paralysis' Speed drop is ignored.",
		id: "quickfeet",
		name: "Quick Feet",
		rating: 3,
		num: 95
	},
	"raindish": {
		desc: "If the weather is Rain Dance, this Pokemon recovers 1/16 of its max HP after each turn.",
		shortDesc: "If the weather is Rain Dance, this Pokemon heals 1/16 of its max HP each turn.",
		id: "raindish",
		name: "Rain Dish",
		rating: 1.5,
		num: 44
	},
	"rattled": {
		desc: "Raises the user's Speed one stage when hit by a Dark-, Bug-, or Ghost-type move.",
		shortDesc: "This Pokemon gets +1 Speed if hit by a Dark-, Bug-, or Ghost-type attack.",
		id: "rattled",
		name: "Rattled",
		rating: 2,
		num: 155
	},
	"reckless": {
		desc: "When this Pokemon uses an attack that causes recoil damage, or an attack that has a chance to cause recoil damage such as Jump Kick and High Jump Kick, the attacks's power receives a 20% boost.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage do 1.2x damage; not Struggle.",
		id: "reckless",
		name: "Reckless",
		rating: 3,
		num: 120
	},
	"refrigerate": {
		desc: "Turns all of this Pokemon's Normal-typed attacks into Ice-typed and deal 1.3x damage. Does not affect Hidden Power.",
		shortDesc: "This Pokemon's Normal moves become Ice-type and do 1.3x damage.",
		id: "refrigerate",
		name: "Refrigerate",
		rating: 3,
		num: 174
	},
	"regenerator": {
		desc: "This Pokemon heals 1/3 of its max HP when it switches out.",
		shortDesc: "This Pokemon heals 1/3 of its max HP when it switches out.",
		id: "regenerator",
		name: "Regenerator",
		rating: 4,
		num: 144
	},
	"rivalry": {
		desc: "This Pokemon's attacks do 1.25x damage if their target is the same gender, but 0.75x if their target is the opposite gender.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
		id: "rivalry",
		name: "Rivalry",
		rating: 0.5,
		num: 79
	},
	"rockhead": {
		desc: "This Pokemon does not receive recoil damage except from Struggle, Life Orb, or crash damage from Jump Kick or High Jump Kick.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, crash damage.",
		id: "rockhead",
		name: "Rock Head",
		rating: 3,
		num: 69
	},
	"roughskin": {
		desc: "Causes recoil damage equal to 1/8 of the opponent's max HP if an opponent makes contact.",
		shortDesc: "This Pokemon causes other Pokemon making contact to lose 1/8 of their max HP.",
		id: "roughskin",
		name: "Rough Skin",
		rating: 3,
		num: 24
	},
	"runaway": {
		desc: "Unless this Pokemon is under the effects of a trapping move or ability, such as Mean Look or Shadow Tag, it will escape from wild Pokemon battles without fail.",
		shortDesc: "No competitive use.",
		id: "runaway",
		name: "Run Away",
		rating: 0,
		num: 50
	},
	"sandforce": {
		desc: "Raises the power of this Pokemon's Rock, Ground, and Steel-type moves by 1.3x if the weather is Sandstorm. This Pokemon is also immune to residual Sandstorm damage.",
		shortDesc: "This Pokemon's Rock/Ground/Steel attacks do 1.3x in Sandstorm; immunity to it.",
		id: "sandforce",
		name: "Sand Force",
		rating: 2,
		num: 159
	},
	"sandrush": {
		desc: "This Pokemon's Speed is doubled if the weather is Sandstorm. This Pokemon is also immune to residual Sandstorm damage.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
		id: "sandrush",
		name: "Sand Rush",
		rating: 2,
		num: 146
	},
	"sandstream": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Sandstorm (for 5 turns normally, or 8 turns while holding Smooth Rock).",
		shortDesc: "On switch-in, the weather becomes Sandstorm.",
		id: "sandstream",
		name: "Sand Stream",
		rating: 4.5,
		num: 45
	},
	"sandveil": {
		desc: "This Pokemon's Evasion is boosted by 1.25x if the weather is Sandstorm. This Pokemon is also immune to residual Sandstorm damage.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasion is 1.25x; immunity to Sandstorm.",
		id: "sandveil",
		name: "Sand Veil",
		rating: 1.5,
		num: 8
	},
	"sapsipper": {
		desc: "This Pokemon is immune to Grass moves. If hit by a Grass move, its Attack is increased by one stage (once for each hit of Bullet Seed). Does not affect Aromatherapy.",
		shortDesc: "This Pokemon's Attack is boosted by 1 if hit by any Grass move; Grass immunity.",
		id: "sapsipper",
		name: "Sap Sipper",
		rating: 3.5,
		num: 157
	},
	"scrappy": {
		desc: "This Pokemon has the ability to hit Ghost-type Pokemon with Normal-type and Fighting-type moves. Effectiveness of these moves takes into account the Ghost-type Pokemon's other weaknesses and resistances.",
		shortDesc: "This Pokemon can hit Ghost-types with Normal- and Fighting-type moves.",
		id: "scrappy",
		name: "Scrappy",
		rating: 3,
		num: 113
	},
	"serenegrace": {
		desc: "This Pokemon's moves have their secondary effect chance doubled. For example, if this Pokemon uses Ice Beam, it will have a 20% chance to freeze its target.",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		id: "serenegrace",
		name: "Serene Grace",
		rating: 4,
		num: 32
	},
	"shadowtag": {
		desc: "When this Pokemon enters the field, its non-Ghost-type opponents cannot switch or flee the battle unless they have the same ability, are holding Shed Shell, or they use the moves Baton Pass or U-Turn.",
		shortDesc: "Prevents foes from switching out normally unless they also have this Ability.",
		id: "shadowtag",
		name: "Shadow Tag",
		rating: 5,
		num: 23
	},
	"shedskin": {
		desc: "At the end of each turn, this Pokemon has a 33% chance to heal itself from poison (including Toxic), paralysis, burn, freeze or sleep (including self-induced Rest).",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
		id: "shedskin",
		name: "Shed Skin",
		rating: 4,
		num: 61
	},
	"sheerforce": {
		desc: "Raises the base power of all moves that have any secondary effects by 30%, but the secondary effects are ignored. Some side effects of moves, such as recoil, draining, stat reduction, and switching out usually aren't considered secondary effects. If a Pokemon with Sheer Force is holding a Life Orb and uses an attack that would be boosted by Sheer Force, then the move gains both boosts and the user receives no Life Orb recoil (only if the attack is boosted by Sheer Force).",
		shortDesc: "This Pokemon's attacks with secondary effects do 1.3x damage; nullifies the effects.",
		id: "sheerforce",
		name: "Sheer Force",
		rating: 4,
		num: 125
	},
	"shellarmor": {
		desc: "Attacks targeting this Pokemon can't be critical hits.",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
		onCriticalHit: false,
		id: "shellarmor",
		name: "Shell Armor",
		rating: 1,
		num: 75
	},
	"shielddust": {
		desc: "If the opponent uses a move that has secondary effects that affect this Pokemon in addition to damage, the move's secondary effects will not trigger (For example, Ice Beam loses its 10% freeze chance).",
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
		id: "shielddust",
		name: "Shield Dust",
		rating: 2,
		num: 19
	},
	"simple": {
		desc: "This Pokemon doubles all of its positive and negative stat modifiers. For example, if this Pokemon uses Curse, its Attack and Defense stats increase by two stages and its Speed stat decreases by two stages.",
		shortDesc: "This Pokemon has its own stat boosts and drops doubled as they happen.",
		id: "simple",
		name: "Simple",
		rating: 4,
		num: 86
	},
	"skilllink": {
		desc: "When this Pokemon uses an attack that strikes multiple times in one turn, such as Fury Attack or Spike Cannon, such attacks will always strike for the maximum number of hits.",
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
		id: "skilllink",
		name: "Skill Link",
		rating: 4,
		num: 92
	},
	"slowstart": {
		desc: "After this Pokemon switches into the battle, its Attack and Speed stats are halved for five turns. For example, if this Pokemon has an Attack stat of 400, its Attack will be 200 until the effects of Slow Start wear off.",
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
		id: "slowstart",
		name: "Slow Start",
		rating: -2,
		num: 112
	},
	"sniper": {
		desc: "When this Pokemon lands a Critical Hit, the damage is increased to another 1.5x.",
		shortDesc: "If this Pokemon strikes with a critical hit, the damage is increased by 50%",
		id: "sniper",
		name: "Sniper",
		rating: 1,
		num: 97
	},
	"snowcloak": {
		desc: "This Pokemon's Evasion is boosted by 1.25x if the weather is Hail. This Pokemon is also immune to residual Hail damage.",
		shortDesc: "If Hail is active, this Pokemon's evasion is 1.25x; immunity to Hail.",
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 1,
		num: 81
	},
	"snowwarning": {
		desc: "When this Pokemon enters the battlefield, the weather becomes Hail (for 5 turns normally, or 8 turns while holding Icy Rock).",
		shortDesc: "On switch-in, the weather becomes Hail.",
		id: "snowwarning",
		name: "Snow Warning",
		rating: 4,
		num: 117
	},
	"solarpower": {
		desc: "If the weather is Sunny Day, this Pokemon's Special Attack is 1.5x, but it loses 1/8 of its max HP at the end of every turn.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x and loses 1/8 max HP per turn.",
		id: "solarpower",
		name: "Solar Power",
		rating: 1.5,
		num: 94
	},
	"solidrock": {
		desc: "Super-effective attacks only deal 3/4 their usual damage against this Pokemon.",
		shortDesc: "This Pokemon receives 3/4 damage from super effective attacks.",
		id: "solidrock",
		name: "Solid Rock",
		rating: 3,
		num: 116
	},
	"soundproof": {
		desc: "This Pokemon is immune to the effects of sound-based moves, which are: Bug Buzz, Chatter, Echoed Voice, Grasswhistle, Growl, Heal Bell, Hyper Voice, Metal Sound, Perish Song, Relic Song, Roar, Round, Screech, Sing, Snarl, Snore, Supersonic, and Uproar. This ability doesn't affect Heal Bell.",
		shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
		id: "soundproof",
		name: "Soundproof",
		rating: 2,
		num: 43
	},
	"speedboost": {
		desc: "At the end of every turn, this Pokemon's Speed increases by one stage (except the turn it switched in).",
		shortDesc: "This Pokemon's Speed is boosted by 1 at the end of each full turn on the field.",
		id: "speedboost",
		name: "Speed Boost",
		rating: 4.5,
		num: 3
	},
	"stall": {
		desc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
		shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
		id: "stall",
		name: "Stall",
		rating: -1,
		num: 100
	},
	"stancechange": {
		desc: "Only affects Aegislash. If this Pokemon uses a Physical or Special move, it changes to Blade forme. If this Pokemon uses King's Shield, it changes to Shield forme.",
		shortDesc: "The Pokemon changes form depending on how it battles.",
		id: "stancechange",
		name: "Stance Change",
		rating: 4.5,
		num: 176
	},
	"static": {
		desc: "If an opponent contact attacks this Pokemon, there is a 30% chance that the opponent will become paralyzed.",
		shortDesc: "30% chance of paralyzing a Pokemon making contact with this Pokemon.",
		id: "static",
		name: "Static",
		rating: 2,
		num: 9
	},
	"steadfast": {
		desc: "If this Pokemon flinches, its Speed increases by one stage.",
		shortDesc: "If this Pokemon flinches, its Speed is boosted by 1.",
		id: "steadfast",
		name: "Steadfast",
		rating: 1,
		num: 80
	},
	"stench": {
		desc: "This Pokemon's damaging moves that don't already have a flinch chance gain a 10% chance to cause flinch.",
		shortDesc: "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch.",
		id: "stench",
		name: "Stench",
		rating: 0,
		num: 1
	},
	"stickyhold": {
		desc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",
		id: "stickyhold",
		name: "Sticky Hold",
		rating: 1,
		num: 60
	},
	"stormdrain": {
		desc: "During double battles, this Pokemon draws any single-target Water-type attack to itself. If an opponent uses an Water-type attack that affects multiple Pokemon, those targets will be hit. This ability does not affect Water Hidden Power, Judgment or Weather Ball. The user is immune to Water and its Special Attack is increased one stage when hit by one.",
		shortDesc: "This Pokemon draws Water moves to itself to boost Sp. Atk by 1; Water immunity.",
		id: "stormdrain",
		name: "Storm Drain",
		rating: 3.5,
		num: 114
	},
	"strongjaw": {
		desc: "This Pokemon receives a 50% power boost for jaw attacks such as Bite and Crunch.",
		shortDesc: "This Pokemon's bite-based attacks do 1.5x damage.",
		id: "strongjaw",
		name: "Strong Jaw",
		rating: 3,
		num: 173
	},
	"sturdy": {
		desc: "This Pokemon is immune to OHKO moves, and will survive with 1 HP if hit by an attack which would KO it while at full health.",
		shortDesc: "If this Pokemon is at full HP, it lives one hit with at least 1HP. OHKO moves fail on it.",
		id: "sturdy",
		name: "Sturdy",
		rating: 3,
		num: 5
	},
	"suctioncups": {
		desc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
		id: "suctioncups",
		name: "Suction Cups",
		rating: 2.5,
		num: 21
	},
	"superluck": {
		desc: "This Pokemon's critical hit ratio is boosted by 1.",
		shortDesc: "This Pokemon's critical hit ratio is boosted by 1.",
		id: "superluck",
		name: "Super Luck",
		rating: 1,
		num: 105
	},
	"swarm": {
		desc: "When its health reaches 1/3 or less of its max HP, this Pokemon's Bug-type attacks do 1.5x damage.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Bug attacks do 1.5x damage.",
		id: "swarm",
		name: "Swarm",
		rating: 2,
		num: 68
	},
	"sweetveil": {
		desc: "Prevents allies from being put to Sleep.",
		shortDesc: "Prevents allies from being put to Sleep.",
		id: "sweetveil",
		name: "Sweet Veil",
		rating: 0,
		num: 175
	},
	"swiftswim": {
		desc: "If the weather is Rain Dance, this Pokemon's Speed is doubled.",
		shortDesc: "If the weather is Rain Dance, this Pokemon's Speed is doubled.",
		id: "swiftswim",
		name: "Swift Swim",
		rating: 2,
		num: 33
	},
	"symbiosis": {
		desc: "This Pokemon immediately passes its item to an ally after their item is consumed.",
		shortDesc: "This Pokemon passes its item to an ally after their item is consumed.",
		id: "symbiosis",
		name: "Symbiosis",
		rating: 0,
		num: 180
	},
	"synchronize": {
		desc: "If an opponent burns, poisons or paralyzes this Pokemon, it receives the same condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
		id: "synchronize",
		name: "Synchronize",
		rating: 3,
		num: 28
	},
	"tangledfeet": {
		desc: "When this Pokemon is confused, attacks targeting it have a 50% chance of missing.",
		shortDesc: "This Pokemon's evasion is doubled as long as it is confused.",
		id: "tangledfeet",
		name: "Tangled Feet",
		rating: 1,
		num: 77
	},
	"technician": {
		desc: "When this Pokemon uses an attack that has 60 Base Power or less (including Struggle), the move's Base Power receives a 50% boost. For example, a move with 60 Base Power effectively becomes a move with 90 Base Power.",
		shortDesc: "This Pokemon's attacks of 60 Base Power or less do 1.5x damage. Includes Struggle.",
		onBasePowerPriority: 8,
		id: "technician",
		name: "Technician",
		rating: 4,
		num: 101
	},
	"telepathy": {
		desc: "This Pokemon will not take damage from its allies' spread moves in double and triple battles.",
		shortDesc: "This Pokemon does not take damage from its allies' attacks.",
		id: "telepathy",
		name: "Telepathy",
		rating: 0,
		num: 140
	},
	"teravolt": {
		desc: "When this Pokemon uses any move, it nullifies the Ability of any active Pokemon that hinder or empower this Pokemon's attacks. These abilities include Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Herbivore, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightningrod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke and Wonder Guard.",
		shortDesc: "This Pokemon's moves ignore any Ability that could modify the effectiveness.",
		id: "teravolt",
		name: "Teravolt",
		rating: 3,
		num: 164
	},
	"thickfat": {
		desc: "This Pokemon receives half damage from Ice-type and Fire-type attacks.",
		shortDesc: "This Pokemon receives half damage from Fire- and Ice-type attacks.",
		onModifyAtkPriority: 6,
		id: "thickfat",
		name: "Thick Fat",
		rating: 3,
		num: 47
	},
	"tintedlens": {
		desc: "This Pokemon's attacks that are not very effective on a target do double damage.",
		shortDesc: "This Pokemon's attacks that are not very effective on a target do double damage.",
		id: "tintedlens",
		name: "Tinted Lens",
		rating: 4,
		num: 110
	},
	"torrent": {
		desc: "When its health reaches 1/3 or less of its max HP, this Pokemon's Water-type attacks do 1.5x damage.",
		shortDesc: "When this Pokemon has 1/3 or less of its max HP, its Water attacks do 1.5x damage.",
		id: "torrent",
		name: "Torrent",
		rating: 2,
		num: 67
	},
	"toxicboost": {
		desc: "When this Pokemon is poisoned, its physical attacks do 1.5x damage.",
		shortDesc: "When this Pokemon is poisoned, its physical attacks do 1.5x damage.",
		id: "toxicboost",
		name: "Toxic Boost",
		rating: 3,
		num: 137
	},
	"toughclaws": {
		desc: "This Pokemon's contact attacks do 1.33x damage.",
		shortDesc: "This Pokemon's contact attacks do 33% more damage.",
		id: "toughclaws",
		name: "Tough Claws",
		rating: 3,
		num: 181
	},
	"trace": {
		desc: "When this Pokemon enters the field, it temporarily copies an opponent's ability. This ability remains with this Pokemon until it leaves the field.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		id: "trace",
		name: "Trace",
		rating: 3.5,
		num: 36
	},
	"truant": {
		desc: "After this Pokemon is switched into battle, it skips every other turn.",
		shortDesc: "This Pokemon skips every other turn instead of using a move.",
		id: "truant",
		name: "Truant",
		rating: -2,
		num: 54
	},
	"turboblaze": {
		desc: "When this Pokemon uses any move, it nullifies the Ability of any active Pokemon that hinder or empower this Pokemon's attacks. These abilities include Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Herbivore, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightningrod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke and Wonder Guard.",
		shortDesc: "This Pokemon's moves ignore any Ability that could modify the effectiveness.",
		id: "turboblaze",
		name: "Turboblaze",
		rating: 3,
		num: 163
	},
	"unaware": {
		desc: "This Pokemon ignores an opponent's stat boosts for Attack, Defense, Special Attack and Special Defense. These boosts will still affect Base Power calculation for Punishment and Stored Power.",
		shortDesc: "This Pokemon ignores other Pokemon's stat changes when taking or doing damage.",
		id: "unaware",
		name: "Unaware",
		rating: 3,
		num: 109
	},
	"unburden": {
		desc: "Doubles this Pokemon's Speed if it loses its held item (such as by eating Berries, using Gems, or via Thief, Knock Off, etc).",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
		id: "unburden",
		name: "Unburden",
		rating: 3.5,
		num: 84
	},
	"unnerve": {
		desc: "While this Pokemon is active, prevents opposing Pokemon from using their Berries.",
		shortDesc: "While this Pokemon is active, prevents opposing Pokemon from using their Berries.",
		id: "unnerve",
		name: "Unnerve",
		rating: 1,
		num: 127
	},
	"victorystar": {
		desc: "Raises every friendly Pokemon's Accuracy, including this Pokemon's, by 10% (multiplied).",
		shortDesc: "This Pokemon and its allies' moves have their accuracy boosted to 1.1x.",
		id: "victorystar",
		name: "Victory Star",
		rating: 2,
		num: 162
	},
	"vitalspirit": {
		desc: "This Pokemon cannot fall asleep (Rest will fail if it tries to use it). Gaining this Ability while asleep cures it.",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
		id: "vitalspirit",
		name: "Vital Spirit",
		rating: 2,
		num: 72
	},
	"voltabsorb": {
		desc: "This Pokemon is immune to Electric moves. If hit by an Electric move, it recovers 25% of its max HP.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		id: "voltabsorb",
		name: "Volt Absorb",
		rating: 3.5,
		num: 10
	},
	"waterabsorb": {
		desc: "This Pokemon is immune to Water moves. If hit by an Water move, it recovers 25% of its max HP.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
		id: "waterabsorb",
		name: "Water Absorb",
		rating: 3.5,
		num: 11
	},
	"waterveil": {
		desc: "This Pokemon cannot become burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		id: "waterveil",
		name: "Water Veil",
		rating: 1.5,
		num: 41
	},
	"weakarmor": {
		desc: "Causes physical moves to lower the Pokemon's Defense and increase its Speed stat by one stage.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered 1 and Speed is boosted 1.",
		id: "weakarmor",
		name: "Weak Armor",
		rating: 0,
		num: 133
	},
	"whitesmoke": {
		desc: "Opponents cannot reduce this Pokemon's stats; they can, however, modify stat changes with Power Swap, Guard Swap and Heart Swap and inflict stat boosts with Swagger and Flatter. This ability does not prevent self-inflicted stat reductions. [Field Effect]\u00a0If this Pokemon is in the lead spot, the rate of wild Pokemon battles decreases by 50%.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		id: "whitesmoke",
		name: "White Smoke",
		rating: 2,
		num: 73
	},
	"wonderguard": {
		desc: "This Pokemon only receives damage from attacks belonging to types that cause Super Effective to this Pokemon. Wonder Guard does not protect a Pokemon from status ailments (burn, freeze, paralysis, poison, sleep, Toxic or any of their side effects or damage), recoil damage nor the moves Beat Up, Bide, Doom Desire, Fire Fang, Future Sight, Hail, Leech Seed, Sandstorm, Spikes, Stealth Rock and Struggle. Wonder Guard cannot be Skill Swapped nor Role Played. Trace, however, does copy Wonder Guard.",
		shortDesc: "This Pokemon can only be damaged by super effective moves and indirect damage.",
		id: "wonderguard",
		name: "Wonder Guard",
		rating: 5,
		num: 25
	},
	"wonderskin": {
		desc: "Causes the chance of a status move working to be halved. It does not affect moves that inflict status as a secondary effect like Thunder's chance to paralyze.",
		shortDesc: "All status moves with a set % accuracy are 50% accurate if used on this Pokemon.",
		id: "wonderskin",
		name: "Wonder Skin",
		rating: 3,
		num: 147
	},
	"zenmode": {
		desc: "When Darmanitan's HP drops to below half, it will enter Zen Mode at the end of the turn. If it loses its ability, or recovers HP to above half while in Zen mode, it will change back. This ability only works on Darmanitan, even if it is copied by Role Play, Entrainment, or swapped with Skill Swap.",
		shortDesc: "If this Pokemon is Darmanitan, it changes to Zen Mode whenever it is below half HP.",
		id: "zenmode",
		name: "Zen Mode",
		rating: -1,
		num: 161
	},
};
}