function items () {
return {
	"abomasite": {
		id: "abomasite",
		name: "Abomasite",
		spritenum: 575,
		megaStone: "Abomasnow-Mega",
		megaEvolves: "Abomasnow",
		num: 674,
		gen: 6,
		desc: "Mega-evolves Abomasnow."
	},
	"absolite": {
		id: "absolite",
		name: "Absolite",
		spritenum: 576,
		megaStone: "Absol-Mega",
		megaEvolves: "Absol",
		num: 677,
		gen: 6,
		desc: "Mega-evolves Absol."
	},
	"absorbbulb": {
		id: "absorbbulb",
		name: "Absorb Bulb",
		spritenum: 2,
		fling: {
			basePower: 30
		},
		num: 545,
		gen: 5,
		desc: "Raises Sp. Atk by 1 if hit by a Water-type attack. Single use."
	},
	"adamantorb": {
		id: "adamantorb",
		name: "Adamant Orb",
		spritenum: 4,
		fling: {
			basePower: 60
		},
		onBasePowerPriority: 6,
		num: 135,
		gen: 4,
		desc: "If holder is a Dialga, its Steel- and Dragon-type attacks have 1.2x power."
	},
	"aerodactylite": {
		id: "aerodactylite",
		name: "Aerodactylite",
		spritenum: 577,
		megaStone: "Aerodactyl-Mega",
		megaEvolves: "Aerodactyl",
		num: 672,
		gen: 6,
		desc: "Mega-evolves Aerodactyl."
	},
	"aggronite": {
		id: "aggronite",
		name: "Aggronite",
		spritenum: 578,
		megaStone: "Aggron-Mega",
		megaEvolves: "Aggron",
		num: 667,
		gen: 6,
		desc: "Mega-evolves Aggron."
	},
	"aguavberry": {
		id: "aguavberry",
		name: "Aguav Berry",
		spritenum: 5,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Dragon"
		},
		num: 162,
		gen: 3,
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"airballoon": {
		id: "airballoon",
		name: "Air Balloon",
		spritenum: 6,
		fling: {
			basePower: 10
		},
		num: 541,
		gen: 5,
		desc: "Holder is immune to Ground-type attacks. Pops when holder is hit."
	},
	"alakazite": {
		id: "alakazite",
		name: "Alakazite",
		spritenum: 579,
		megaStone: "Alakazam-Mega",
		megaEvolves: "Alakazam",
		num: -6,
		gen: 6,
		desc: "Mega-evolves Alakazam."
	},
	"ampharosite": {
		id: "ampharosite",
		name: "Ampharosite",
		spritenum: 580,
		megaStone: "Ampharos-Mega",
		megaEvolves: "Ampharos",
		num: -6,
		gen: 6,
		desc: "Mega-evolves Ampharos."
	},
	"apicotberry": {
		id: "apicotberry",
		name: "Apicot Berry",
		spritenum: 10,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ground"
		},
		num: 205,
		gen: 3,
		desc: "Raises Sp. Def by 1 when at 1/4 max HP or less. Single use."
	},
	"armorfossil": {
		id: "armorfossil",
		name: "Armor Fossil",
		spritenum: 12,
		fling: {
			basePower: 100
		},
		num: 104,
		gen: 4,
		desc: "Can be revived into Shieldon."
	},
	"aspearberry": {
		id: "aspearberry",
		name: "Aspear Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice"
		},
		num: 153,
		gen: 3,
		desc: "Holder is cured if it is frozen. Single use."
	},
	"assaultvest": {
		id: "assaultvest",
		name: "Assault Vest",
		spritenum: 581,
		fling: {
			basePower: 80
		},
		onModifySpDPriority: 1,
		num: -6,
		gen: 6,
		desc: "Holder's Sp. Def is 1.5x, but it can only use damaging moves."
	},
	"babiriberry": {
		id: "babiriberry",
		name: "Babiri Berry",
		spritenum: 17,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel"
		},
		num: 199,
		gen: 4,
		desc: "Halves damage taken from a super effective Steel-type attack. Single use."
	},
	"banettite": {
		id: "banettite",
		name: "Banettite",
		spritenum: 582,
		megaStone: "Banette-Mega",
		megaEvolves: "Banette",
		num: 668,
		gen: 6,
		desc: "Mega-evolves Banette."
	},
	"belueberry": {
		id: "belueberry",
		name: "Belue Berry",
		spritenum: 21,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Electric"
		},
		num: 183,
		gen: 3,
		desc: "No competitive use."
	},
	"berryjuice": {
		id: "berryjuice",
		name: "Berry Juice",
		spritenum: 22,
		fling: {
			basePower: 30
		},
		num: 43,
		gen: 2,
		desc: "Restores 20HP when at 1/2 max HP or less. Single use."
	},
	"bigroot": {
		id: "bigroot",
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10
		},
		onTryHealPriority: 1,
		num: 296,
		gen: 4,
		desc: "Holder gains 1.3x HP from draining moves, Aqua Ring, Ingrain, and Leech Seed."
	},
	"bindingband": {
		id: "bindingband",
		name: "Binding Band",
		spritenum: 31,
		fling: {
			basePower: 30
		},
		// implemented in statuses
		num: 544,
		gen: 5,
		desc: "Holder's partial-trapping moves deal 1/6 max HP per turn instead of 1/8."
	},
	"blackbelt": {
		id: "blackbelt",
		name: "Black Belt",
		spritenum: 32,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 241,
		gen: 2,
		desc: "Holder's Fighting-type attacks have 1.2x power."
	},
	"blacksludge": {
		id: "blacksludge",
		name: "Black Sludge",
		spritenum: 34,
		fling: {
			basePower: 30
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		num: 281,
		gen: 4,
		desc: "Each turn, if holder is a Poison-type, restores 1/16 max HP; loses 1/8 if not."
	},
	"blackglasses": {
		id: "blackglasses",
		name: "Black Glasses",
		spritenum: 35,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 240,
		gen: 2,
		desc: "Holder's Dark-type attacks have 1.2x power."
	},
	"blastoisinite": {
		id: "blastoisinite",
		name: "Blastoisinite",
		spritenum: 583,
		megaStone: "Blastoise-Mega",
		megaEvolves: "Blastoise",
		num: -6,
		gen: 6,
		desc: "Mega-evolves Blastoise."
	},
	"blazikenite": {
		id: "blazikenite",
		name: "Blazikenite",
		spritenum: 584,
		megaStone: "Blaziken-Mega",
		megaEvolves: "Blaziken",
		num: 664,
		gen: 6,
		desc: "Mega-evolves Blaziken."
	},
	"blukberry": {
		id: "blukberry",
		name: "Bluk Berry",
		spritenum: 44,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fire"
		},
		num: 165,
		gen: 3,
		desc: "No competitive use."
	},
	"brightpowder": {
		id: "brightpowder",
		name: "BrightPowder",
		spritenum: 51,
		fling: {
			basePower: 10
		},
		num: 213,
		gen: 2,
		desc: "The accuracy of attacks against the holder is 0.9x."
	},
	"buggem": {
		id: "buggem",
		name: "Bug Gem",
		isUnreleased: true,
		spritenum: 53,
		isGem: true,
		num: 558,
		gen: 5,
		desc: "Holder's first successful Bug-type attack will have 1.3x power. Single use."
	},
	"burndrive": {
		id: "burndrive",
		name: "Burn Drive",
		spritenum: 54,
		fling: {
			basePower: 70
		},
		onDrive: 'Fire',
		num: 118,
		gen: 5,
		desc: "Holder's Techno Blast is Fire-type."
	},
	"cellbattery": {
		id: "cellbattery",
		name: "Cell Battery",
		spritenum: 60,
		fling: {
			basePower: 30
		},
		num: 546,
		gen: 5,
		desc: "Raises Attack by 1 if hit by an Electric-type attack. Single use."
	},
	"charcoal": {
		id: "charcoal",
		name: "Charcoal",
		spritenum: 61,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 249,
		gen: 2,
		desc: "Holder's Fire-type attacks have 1.2x power."
	},
	"charizarditex": {
		id: "charizarditex",
		name: "Charizardite X",
		spritenum: 585,
		megaStone: "Charizard-Mega-X",
		megaEvolves: "Charizard",
		num: 660,
		gen: 6,
		desc: "Mega-evolves Charizard into Mega Charizard X."
	},
	"charizarditey": {
		id: "charizarditey",
		name: "Charizardite Y",
		spritenum: 586,
		megaStone: "Charizard-Mega-Y",
		megaEvolves: "Charizard",
		num: 678,
		gen: 6,
		desc: "Mega-evolves Charizard into Mega Charizard Y."
	},
	"chartiberry": {
		id: "chartiberry",
		name: "Charti Berry",
		spritenum: 62,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock"
		},
		num: 195,
		gen: 4,
		desc: "Halves damage taken from a super effective Rock-type attack. Single use."
	},
	"cheriberry": {
		id: "cheriberry",
		name: "Cheri Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire"
		},
		num: 149,
		gen: 3,
		desc: "Holder cures itself if it is paralyzed. Single use."
	},
	"cherishball": {
		id: "cherishball",
		name: "Cherish Ball",
		spritenum: 64,
		num: 16,
		gen: 4,
		desc: "A rare Poke Ball that has been crafted to commemorate an occasion."
	},
	"chestoberry": {
		id: "chestoberry",
		name: "Chesto Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water"
		},
		num: 150,
		gen: 3,
		desc: "Holder wakes up if it is asleep. Single use."
	},
	"chilanberry": {
		id: "chilanberry",
		name: "Chilan Berry",
		spritenum: 66,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Normal"
		},
		num: 200,
		gen: 4,
		desc: "Halves damage taken from a Normal-type attack. Single use."
	},
	"chilldrive": {
		id: "chilldrive",
		name: "Chill Drive",
		spritenum: 67,
		fling: {
			basePower: 70
		},
		onDrive: 'Ice',
		num: 119,
		gen: 5,
		desc: "Holder's Techno Blast is Ice-type."
	},
	"choiceband": {
		id: "choiceband",
		name: "Choice Band",
		spritenum: 68,
		fling: {
			basePower: 10
		},
		isChoice: true,
		num: 220,
		gen: 3,
		desc: "Holder's Attack is 1.5x, but it can only use the first move it selects."
	},
	"choicescarf": {
		id: "choicescarf",
		name: "Choice Scarf",
		spritenum: 69,
		fling: {
			basePower: 10
		},
		isChoice: true,
		num: 287,
		gen: 4,
		desc: "Holder's Speed is 1.5x, but it can only use the first move it selects."
	},
	"choicespecs": {
		id: "choicespecs",
		name: "Choice Specs",
		spritenum: 70,
		fling: {
			basePower: 10
		},
		isChoice: true,
		num: 297,
		gen: 4,
		desc: "Holder's Sp. Atk is 1.5x, but it can only use the first move it selects."
	},
	"chopleberry": {
		id: "chopleberry",
		name: "Chople Berry",
		spritenum: 71,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting"
		},
		num: 189,
		gen: 4,
		desc: "Halves damage taken from a super effective Fighting-type attack. Single use."
	},
	"clawfossil": {
		id: "clawfossil",
		name: "Claw Fossil",
		spritenum: 72,
		fling: {
			basePower: 100
		},
		num: 100,
		gen: 3,
		desc: "Can be revived into Anorith."
	},
	"cobaberry": {
		id: "cobaberry",
		name: "Coba Berry",
		spritenum: 76,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying"
		},
		num: 192,
		gen: 4,
		desc: "Halves damage taken from a super effective Flying-type attack. Single use."
	},
	"colburberry": {
		id: "colburberry",
		name: "Colbur Berry",
		spritenum: 78,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark"
		},
		num: 198,
		gen: 4,
		desc: "Halves damage taken from a super effective Dark-type attack. Single use."
	},
	"cornnberry": {
		id: "cornnberry",
		name: "Cornn Berry",
		spritenum: 81,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Bug"
		},
		num: 175,
		gen: 3,
		desc: "No competitive use."
	},
	"coverfossil": {
		id: "coverfossil",
		name: "Cover Fossil",
		spritenum: 85,
		fling: {
			basePower: 100
		},
		num: 572,
		gen: 5,
		desc: "Can be revived into Tirtouga."
	},
	"custapberry": {
		id: "custapberry",
		name: "Custap Berry",
		isUnreleased: true,
		spritenum: 86,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ghost"
		},
		num: 210,
		gen: 4,
		desc: "Holder moves first in its priority bracket when at 1/4 max HP or less. Single use."
	},
	"damprock": {
		id: "damprock",
		name: "Damp Rock",
		spritenum: 88,
		fling: {
			basePower: 60
		},
		num: 285,
		gen: 4,
		desc: "Holder's use of Rain Dance lasts 8 turns instead of 5."
	},
	"darkgem": {
		id: "darkgem",
		name: "Dark Gem",
		isUnreleased: true,
		spritenum: 89,
		isGem: true,
		num: 562,
		gen: 5,
		desc: "Holder's first successful Dark-type attack will have 1.3x power. Single use."
	},
	"deepseascale": {
		id: "deepseascale",
		name: "DeepSeaScale",
		spritenum: 93,
		fling: {
			basePower: 30
		},
		onModifySpDPriority: 2,
		num: 227,
		gen: 3,
		desc: "If holder is a Clamperl, its Sp. Def is doubled."
	},
	"deepseatooth": {
		id: "deepseatooth",
		name: "DeepSeaTooth",
		spritenum: 94,
		fling: {
			basePower: 90
		},
		onModifySpAPriority: 1,
		num: 226,
		gen: 3,
		desc: "If holder is a Clamperl, its Sp. Atk is doubled."
	},
	"destinyknot": {
		id: "destinyknot",
		name: "Destiny Knot",
		spritenum: 95,
		fling: {
			basePower: 10
		},
		onAttractPriority: -100,
		num: 280,
		gen: 4,
		desc: "If holder becomes infatuated, the other Pokemon also becomes infatuated."
	},
	"diveball": {
		id: "diveball",
		name: "Dive Ball",
		spritenum: 101,
		num: 7,
		gen: 3,
		desc: "A Poke Ball that works especially well on Pokemon that live underwater."
	},
	"domefossil": {
		id: "domefossil",
		name: "Dome Fossil",
		spritenum: 102,
		fling: {
			basePower: 100
		},
		num: 102,
		gen: 3,
		desc: "Can be revived into Kabuto."
	},
	"dousedrive": {
		id: "dousedrive",
		name: "Douse Drive",
		spritenum: 103,
		fling: {
			basePower: 70
		},
		onDrive: 'Water',
		num: 116,
		gen: 5,
		desc: "Holder's Techno Blast is Water-type."
	},
	"dracoplate": {
		id: "dracoplate",
		name: "Draco Plate",
		spritenum: 105,
		fling: {
			basePower: 90
		},
		onPlate: 'Dragon',
		onBasePowerPriority: 6,
		num: 311,
		gen: 4,
		desc: "Holder's Dragon-type attacks have 1.2x power. Judgment is Dragon-type."
	},
	"dragonfang": {
		id: "dragonfang",
		name: "Dragon Fang",
		spritenum: 106,
		fling: {
			basePower: 70
		},
		onBasePowerPriority: 6,
		num: 250,
		gen: 2,
		desc: "Holder's Dragon-type attacks have 1.2x power."
	},
	"dragongem": {
		id: "dragongem",
		name: "Dragon Gem",
		isUnreleased: true,
		spritenum: 107,
		isGem: true,
		num: 561,
		gen: 5,
		desc: "Holder's first successful Dragon-type attack will have 1.3x power. Single use."
	},
	"dreadplate": {
		id: "dreadplate",
		name: "Dread Plate",
		spritenum: 110,
		fling: {
			basePower: 90
		},
		onPlate: 'Dark',
		onBasePowerPriority: 6,
		num: 312,
		gen: 4,
		desc: "Holder's Dark-type attacks have 1.2x power. Judgment is Dark-type."
	},
	"dreamball": {
		id: "dreamball",
		name: "Dream Ball",
		spritenum: 111,
		num: 576,
		gen: 5,
		desc: "A special Poke Ball that appears out of nowhere in a bag at the Entree Forest."
	},
	"durinberry": {
		id: "durinberry",
		name: "Durin Berry",
		spritenum: 114,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Water"
		},
		num: 182,
		gen: 3,
		desc: "No competitive use."
	},
	"duskball": {
		id: "duskball",
		name: "Dusk Ball",
		spritenum: 115,
		num: 13,
		gen: 4,
		desc: "A Poke Ball that makes it easier to catch wild Pokemon at night or in caves."
	},
	"earthplate": {
		id: "earthplate",
		name: "Earth Plate",
		spritenum: 117,
		fling: {
			basePower: 90
		},
		onPlate: 'Ground',
		onBasePowerPriority: 6,
		num: 305,
		gen: 4,
		desc: "Holder's Ground-type attacks have 1.2x power. Judgment is Ground-type."
	},
	"ejectbutton": {
		id: "ejectbutton",
		name: "Eject Button",
		spritenum: 118,
		fling: {
			basePower: 30
		},
		num: 547,
		gen: 5,
		desc: "If holder is hit, it immediately switches out with a chosen ally. Single use."
	},
	"electirizer": {
		id: "electirizer",
		name: "Electirizer",
		spritenum: 119,
		fling: {
			basePower: 80
		},
		num: 322,
		gen: 4,
		desc: "Evolves Electabuzz into Electivire when traded."
	},
	"electricgem": {
		id: "electricgem",
		name: "Electric Gem",
		isUnreleased: true,
		spritenum: 120,
		isGem: true,
		num: 550,
		gen: 5,
		desc: "Holder's first successful Electric-type attack will have 1.3x power. Single use."
	},
	"energypowder": {
		id: "energypowder",
		name: "EnergyPowder",
		spritenum: 123,
		fling: {
			basePower: 30
		},
		num: 34,
		gen: 2,
		desc: "Restores 50HP to one Pokemon but lowers Happiness."
	},
	"enigmaberry": {
		id: "enigmaberry",
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Bug"
		},
		num: 208,
		gen: 3,
		desc: "Restores 1/4 max HP when holder is hit by a super effective move. Single use."
	},
	"eviolite": {
		id: "eviolite",
		name: "Eviolite",
		spritenum: 130,
		fling: {
			basePower: 40
		},
		onModifyDefPriority: 2,
		num: 538,
		gen: 5,
		desc: "If holder's species can evolve, its Defense and Sp. Def are 1.5x."
	},
	"expertbelt": {
		id: "expertbelt",
		name: "Expert Belt",
		spritenum: 132,
		fling: {
			basePower: 10
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move && this.getEffectiveness(move, target) > 0) {
				return this.chainModify(1.2);
			}
		},
		num: 268,
		gen: 4,
		desc: "Holder's super effective attacks against other Pokemon do 1.2x damage."
	},
	"fairygem": {
		id: "fairygem",
		name: "Fairy Gem",
		isUnreleased: true,
		spritenum: 0,
		isGem: true,
		num: -6,
		gen: 6,
		desc: "Holder's first successful Fairy-type attack will have 1.3x power. Single use."
	},
	"fastball": {
		id: "fastball",
		name: "Fast Ball",
		spritenum: 137,
		num: 492,
		gen: 2,
		desc: "A Poke Ball that makes it easier to catch Pokemon which are quick to run away."
	},
	"fightinggem": {
		id: "fightinggem",
		name: "Fighting Gem",
		isUnreleased: true,
		spritenum: 139,
		isGem: true,
		num: 553,
		gen: 5,
		desc: "Holder's first successful Fighting-type attack will have 1.3x power. Single use."
	},
	"figyberry": {
		id: "figyberry",
		name: "Figy Berry",
		spritenum: 140,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug"
		},
		num: 159,
		gen: 3,
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"firegem": {
		id: "firegem",
		name: "Fire Gem",
		isUnreleased: true,
		spritenum: 141,
		isGem: true,
		num: 548,
		gen: 5,
		desc: "Holder's first successful Fire-type attack will have 1.3x power. Single use."
	},
	"fistplate": {
		id: "fistplate",
		name: "Fist Plate",
		spritenum: 143,
		fling: {
			basePower: 90
		},
		onPlate: 'Fighting',
		onBasePowerPriority: 6,
		num: 303,
		gen: 4,
		desc: "Holder's Fighting-type attacks have 1.2x power. Judgment is Fighting-type."
	},
	"flameorb": {
		id: "flameorb",
		name: "Flame Orb",
		spritenum: 145,
		fling: {
			basePower: 30,
			status: 'brn'
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		num: 273,
		gen: 4,
		desc: "At the end of every turn, this item attempts to burn the holder."
	},
	"flameplate": {
		id: "flameplate",
		name: "Flame Plate",
		spritenum: 146,
		fling: {
			basePower: 90
		},
		onPlate: 'Fire',
		onBasePowerPriority: 6,
		num: 298,
		gen: 4,
		desc: "Holder's Fire-type attacks have 1.2x power. Judgment is Fire-type."
	},
	"floatstone": {
		id: "floatstone",
		name: "Float Stone",
		spritenum: 147,
		fling: {
			basePower: 30
		},
		num: 539,
		gen: 5,
		desc: "Holder's weight is halved."
	},
	"flyinggem": {
		id: "flyinggem",
		name: "Flying Gem",
		isUnreleased: true,
		spritenum: 149,
		isGem: true,
		num: 556,
		gen: 5,
		desc: "Holder's first successful Flying-type attack will have 1.3x power. Single use."
	},
	"focusband": {
		id: "focusband",
		name: "Focus Band",
		spritenum: 150,
		fling: {
			basePower: 10
		},
		num: 230,
		gen: 2,
		desc: "Holder has a 10% chance to survive an attack that would KO it with 1HP."
	},
	"focussash": {
		id: "focussash",
		name: "Focus Sash",
		spritenum: 151,
		fling: {
			basePower: 10
		},
		num: 275,
		gen: 4,
		desc: "If holder's HP is full, will survive an attack that would KO it with 1HP. Single use."
	},
	"fullincense": {
		id: "fullincense",
		name: "Full Incense",
		spritenum: 155,
		fling: {
			basePower: 10
		},
		num: 316,
		gen: 4,
		desc: "Holder moves last in its priority bracket."
	},
	"ganlonberry": {
		id: "ganlonberry",
		name: "Ganlon Berry",
		spritenum: 158,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Ice"
		},
		num: 202,
		gen: 3,
		desc: "Raises Defense by 1 when at 1/4 max HP or less. Single use."
	},
	"garchompite": {
		id: "garchompite",
		name: "Garchompite",
		spritenum: 589,
		megaStone: "Garchomp-Mega",
		megaEvolves: "Garchomp",
		num: 683,
		gen: 6,
		desc: "Mega-evolves Garchomp."
	},
	"gardevoirite": {
		id: "gardevoirite",
		name: "Gardevoirite",
		spritenum: 587,
		megaStone: "Gardevoir-Mega",
		megaEvolves: "Gardevoir",
		num: 657,
		gen: 6,
		desc: "Mega-evolves Gardevoir."
	},
	"gengarite": {
		id: "gengarite",
		name: "Gengarite",
		spritenum: 588,
		megaStone: "Gengar-Mega",
		megaEvolves: "Gengar",
		num: 656,
		gen: 6,
		desc: "Mega-evolves Gengar."
	},
	"ghostgem": {
		id: "ghostgem",
		name: "Ghost Gem",
		isUnreleased: true,
		spritenum: 161,
		isGem: true,
		num: 560,
		gen: 5,
		desc: "Holder's first successful Ghost-type attack will have 1.3x power. Single use."
	},
	"grassgem": {
		id: "grassgem",
		name: "Grass Gem",
		isUnreleased: true,
		spritenum: 172,
		isGem: true,
		onSourceTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Grass') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Grass Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 551,
		gen: 5,
		desc: "Holder's first successful Grass-type attack will have 1.3x power. Single use."
	},
	"greatball": {
		id: "greatball",
		name: "Great Ball",
		spritenum: 174,
		num: 3,
		gen: 1,
		desc: "A high-performance Ball that provides a higher catch rate than a Poke Ball."
	},
	"grepaberry": {
		id: "grepaberry",
		name: "Grepa Berry",
		spritenum: 178,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Flying"
		},
		num: 173,
		gen: 3,
		desc: "No competitive use."
	},
	"gripclaw": {
		id: "gripclaw",
		name: "Grip Claw",
		spritenum: 179,
		fling: {
			basePower: 90
		},
		// implemented in statuses
		num: 286,
		gen: 4,
		desc: "Holder's partial-trapping moves always last 7 turns."
	},
	"griseousorb": {
		id: "griseousorb",
		name: "Griseous Orb",
		spritenum: 180,
		fling: {
			basePower: 60
		},
		onBasePowerPriority: 6,
		num: 112,
		gen: 4,
		desc: "If holder is a Giratina, its Ghost- and Dragon-type attacks have 1.2x power."
	},
	"groundgem": {
		id: "groundgem",
		name: "Ground Gem",
		isUnreleased: true,
		spritenum: 182,
		isGem: true,
		num: 555,
		gen: 5,
		desc: "Holder's first successful Ground-type attack will have 1.3x power. Single use."
	},
	"gyaradosite": {
		id: "gyaradosite",
		name: "Gyaradosite",
		spritenum: 589,
		megaStone: "Gyarados-Mega",
		megaEvolves: "Gyarados",
		num: 676,
		gen: 6,
		desc: "Mega-evolves Gyarados."
	},
	"habanberry": {
		id: "habanberry",
		name: "Haban Berry",
		spritenum: 185,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon"
		},
		num: 197,
		gen: 4,
		desc: "Halves damage taken from a super effective Dragon-type attack. Single use."
	},
	"hardstone": {
		id: "hardstone",
		name: "Hard Stone",
		spritenum: 187,
		fling: {
			basePower: 100
		},
		onBasePowerPriority: 6,
		num: 238,
		gen: 2,
		desc: "Holder's Rock-type attacks have 1.2x power."
	},
	"healball": {
		id: "healball",
		name: "Heal Ball",
		spritenum: 188,
		num: 14,
		gen: 4,
		desc: "A remedial Poke Ball that restores the caught Pokemon's HP and status problem."
	},
	"heatrock": {
		id: "heatrock",
		name: "Heat Rock",
		spritenum: 193,
		fling: {
			basePower: 60
		},
		num: 284,
		gen: 4,
		desc: "Holder's use of Sunny Day lasts 8 turns instead of 5."
	},
	"heavyball": {
		id: "heavyball",
		name: "Heavy Ball",
		spritenum: 194,
		num: 495,
		gen: 2,
		desc: "A Poke Ball for catching very heavy Pokemon."
	},
	"helixfossil": {
		id: "helixfossil",
		name: "Helix Fossil",
		spritenum: 195,
		fling: {
			basePower: 100
		},
		num: 101,
		gen: 3,
		desc: "Can be revived into Omanyte."
	},
	"heracronite": {
		id: "heracronite",
		name: "Heracronite",
		spritenum: 590,
		megaStone: "Heracross-Mega",
		megaEvolves: "Heracross",
		num: 680,
		gen: 6,
		desc: "Mega-evolves Heracross."
	},
	"hondewberry": {
		id: "hondewberry",
		name: "Hondew Berry",
		spritenum: 213,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ground"
		},
		num: 172,
		gen: 3,
		desc: "No competitive use."
	},
	"houndoominite": {
		id: "houndoominite",
		name: "Houndoominite",
		spritenum: 591,
		megaStone: "Houndoom-Mega",
		megaEvolves: "Houndoom",
		num: 666,
		gen: 6,
		desc: "Mega-evolves Houndoom."
	},
	"iapapaberry": {
		id: "iapapaberry",
		name: "Iapapa Berry",
		spritenum: 217,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark"
		},
		num: 163,
		gen: 3,
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"icegem": {
		id: "icegem",
		name: "Ice Gem",
		isUnreleased: true,
		spritenum: 218,
		isGem: true,
		num: 552,
		gen: 5,
		desc: "Holder's first successful Ice-type attack will have 1.3x power. Single use."
	},
	"icicleplate": {
		id: "icicleplate",
		name: "Icicle Plate",
		spritenum: 220,
		fling: {
			basePower: 90
		},
		onPlate: 'Ice',
		onBasePowerPriority: 6,
		num: 302,
		gen: 4,
		desc: "Holder's Ice-type attacks have 1.2x power. Judgment is Ice-type."
	},
	"icyrock": {
		id: "icyrock",
		name: "Icy Rock",
		spritenum: 221,
		fling: {
			basePower: 40
		},
		num: 282,
		gen: 4,
		desc: "Holder's use of Hail lasts 8 turns instead of 5."
	},
	"insectplate": {
		id: "insectplate",
		name: "Insect Plate",
		spritenum: 223,
		fling: {
			basePower: 90
		},
		onPlate: 'Bug',
		onBasePowerPriority: 6,
		num: 308,
		gen: 4,
		desc: "Holder's Bug-type attacks have 1.2x power. Judgment is Bug-type."
	},
	"ironball": {
		id: "ironball",
		name: "Iron Ball",
		spritenum: 224,
		fling: {
			basePower: 130
		},
		num: 278,
		gen: 4,
		desc: "Holder's Speed halved, becomes grounded, and takes 1x from Ground."
	},
	"ironplate": {
		id: "ironplate",
		name: "Iron Plate",
		spritenum: 225,
		fling: {
			basePower: 90
		},
		onPlate: 'Steel',
		onBasePowerPriority: 6,
		num: 313,
		gen: 4,
		desc: "Holder's Steel-type attacks have 1.2x power. Judgment is Steel-type."
	},
	"jabocaberry": {
		id: "jabocaberry",
		name: "Jaboca Berry",
		spritenum: 230,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dragon"
		},
		num: 211,
		gen: 4,
		desc: "If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use."
	},
	"kasibberry": {
		id: "kasibberry",
		name: "Kasib Berry",
		spritenum: 233,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost"
		},
		num: 196,
		gen: 4,
		desc: "Halves damage taken from a super effective Ghost-type attack. Single use."
	},
	"kebiaberry": {
		id: "kebiaberry",
		name: "Kebia Berry",
		spritenum: 234,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison"
		},
		num: 190,
		gen: 4,
		desc: "Halves damage taken from a super effective Poison-type attack. Single use."
	},
	"keeberry": {
		id: "keeberry",
		name: "Kee Berry",
		spritenum: 593,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fairy"
		},
		num: -6,
		gen: 6,
		desc: "Raises Defense by 1 if hit by a Physical attack. Single use."
	},
	"kelpsyberry": {
		id: "kelpsyberry",
		name: "Kelpsy Berry",
		spritenum: 235,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Fighting"
		},
		num: 170,
		gen: 3,
		desc: "No competitive use."
	},
	"kangaskhanite": {
		id: "kangaskhanite",
		name: "Kangaskhanite",
		spritenum: 592,
		megaStone: "Kangaskhan-Mega",
		megaEvolves: "Kangaskhan",
		num: 675,
		gen: 6,
		desc: "Mega-evolves Kangaskhan."
	},
	"kingsrock": {
		id: "kingsrock",
		name: "King's Rock",
		spritenum: 236,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch'
		},
		num: 221,
		gen: 2,
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
	},
	"laggingtail": {
		id: "laggingtail",
		name: "Lagging Tail",
		spritenum: 237,
		fling: {
			basePower: 10
		},
		num: 279,
		gen: 4,
		desc: "Holder moves last in its priority bracket."
	},
	"lansatberry": {
		id: "lansatberry",
		name: "Lansat Berry",
		spritenum: 238,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Flying"
		},
		num: 206,
		gen: 3,
		desc: "Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use."
	},
	"latiasite": {
		id: "latiasite",
		name: "Latiasite",
		spritenum: -6,
		megaStone: "Latias-Mega",
		megaEvolves: "Latias",
		isUnreleased: true,
		num: -6,
		gen: 6,
		desc: "Mega-evolves Latias."
	},
	"latiosite": {
		id: "latiosite",
		name: "Latiosite",
		spritenum: -6,
		megaStone: "Latios-Mega",
		megaEvolves: "Latios",
		isUnreleased: true,
		num: -6,
		gen: 6,
		desc: "Mega-evolves Latios."
	},
	"laxincense": {
		id: "laxincense",
		name: "Lax Incense",
		spritenum: 240,
		fling: {
			basePower: 10
		},
		num: 255,
		gen: 3,
		desc: "The accuracy of attacks against the holder is 0.9x."
	},
	"leftovers": {
		id: "leftovers",
		name: "Leftovers",
		spritenum: 242,
		fling: {
			basePower: 10
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		num: 234,
		gen: 2,
		desc: "At the end of every turn, holder restores 1/16 of its max HP."
	},
	"leppaberry": {
		id: "leppaberry",
		name: "Leppa Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting"
		},
		num: 154,
		gen: 3,
		desc: "Restores 10PP to the first of the holder's moves to reach 0PP. Single use."
	},
	"levelball": {
		id: "levelball",
		name: "Level Ball",
		spritenum: 246,
		num: 493,
		gen: 2,
		desc: "A Poke Ball for catching Pokemon that are a lower level than your own."
	},
	"liechiberry": {
		id: "liechiberry",
		name: "Liechi Berry",
		spritenum: 248,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Grass"
		},
		num: 201,
		gen: 3,
		desc: "Raises Attack by 1 when at 1/4 max HP or less. Single use."
	},
	"lifeorb": {
		id: "lifeorb",
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30
		},
		num: 270,
		gen: 4,
		desc: "Holder's damaging moves do 1.3x damage; loses 1/10 max HP after the attack."
	},
	"lightball": {
		id: "lightball",
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par'
		},
		num: 236,
		gen: 2,
		desc: "If holder is a Pikachu, its Attack and Sp. Atk are doubled."
	},
	"lightclay": {
		id: "lightclay",
		name: "Light Clay",
		spritenum: 252,
		fling: {
			basePower: 30
		},
		// implemented in the corresponding thing
		num: 269,
		gen: 4,
		desc: "Holder's use of Light Screen or Reflect lasts 8 turns instead of 5."
	},
	"loveball": {
		id: "loveball",
		name: "Love Ball",
		spritenum: 258,
		num: 496,
		gen: 2,
		desc: "Poke Ball for catching Pokemon that are the opposite gender of your Pokemon."
	},
	"lucarionite": {
		id: "lucarionite",
		name: "Lucarionite",
		spritenum: 594,
		megaStone: "Lucario-Mega",
		megaEvolves: "Lucario",
		num: 673,
		gen: 6,
		desc: "Mega-evolves Lucario."
	},
	"luckypunch": {
		id: "luckypunch",
		name: "Lucky Punch",
		spritenum: 261,
		fling: {
			basePower: 40
		},
		num: 256,
		gen: 2,
		desc: "If holder is a Chansey, its critical hit ratio is boosted by 2."
	},
	"lumberry": {
		id: "lumberry",
		name: "Lum Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying"
		},
		num: 157,
		gen: 3,
		desc: "Holder cures itself if it is confused or has a major status problem. Single use."
	},
	"luminousmoss": {
		id: "luminousmoss",
		name: "Luminous Moss",
		spritenum: 595,
		fling: {
			basePower: 30
		},
		num: -6,
		gen: 6,
		desc: "Raises Special Defense by 1 if hit by a Water-type attack. Single use."
	},
	"lureball": {
		id: "lureball",
		name: "Lure Ball",
		spritenum: 264,
		num: 494,
		gen: 2,
		desc: "A Poke Ball for catching Pokemon hooked by a Rod when fishing."
	},
	"lustrousorb": {
		id: "lustrousorb",
		name: "Lustrous Orb",
		spritenum: 265,
		fling: {
			basePower: 60
		},
		onBasePowerPriority: 6,
		num: 136,
		gen: 4,
		desc: "If holder is a Palkia, its Water- and Dragon-type attacks have 1.2x power."
	},
	"luxuryball": {
		id: "luxuryball",
		name: "Luxury Ball",
		spritenum: 266,
		num: 11,
		gen: 3,
		desc: "A comfortable Poke Ball that makes a caught wild Pokemon quickly grow friendly."
	},
	"machobrace": {
		id: "machobrace",
		name: "Macho Brace",
		spritenum: 269,
		fling: {
			basePower: 60
		},
		num: 215,
		gen: 3,
		desc: "Holder's Speed is halved."
	},
	"magnet": {
		id: "magnet",
		name: "Magnet",
		spritenum: 273,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 242,
		gen: 2,
		desc: "Holder's Electric-type attacks have 1.2x power."
	},
	"magoberry": {
		id: "magoberry",
		name: "Mago Berry",
		spritenum: 274,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost"
		},
		num: 161,
		gen: 3,
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"magostberry": {
		id: "magostberry",
		name: "Magost Berry",
		spritenum: 275,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Rock"
		},
		num: 176,
		gen: 3,
		desc: "No competitive use."
	},
	"mail": {
		id: "mail",
		name: "Mail",
		spritenum: 403,
		onTakeItem: false,
		isUnreleased: true,
		gen: 2,
		desc: "This item cannot be given to or taken from a Pokemon, except by Knock Off."
	},
	"manectite": {
		id: "manectite",
		name: "Manectite",
		spritenum: 596,
		megaStone: "Manectric-Mega",
		megaEvolves: "Manectric",
		num: 682,
		gen: 6,
		desc: "Mega-evolves Manectric."
	},
	"marangaberry": {
		id: "marangaberry",
		name: "Maranga Berry",
		spritenum: 597,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dark"
		},
		num: -6,
		gen: 6,
		desc: "Raises Special Defense by 1 if hit by a Special attack. Single use."
	},
	"masterball": {
		id: "masterball",
		name: "Master Ball",
		spritenum: 276,
		num: 1,
		gen: 1,
		desc: "The best Ball with the ultimate performance. It will catch any wild Pokemon."
	},
	"mawilite": {
		id: "mawilite",
		name: "Mawilite",
		spritenum: 598,
		megaStone: "Mawile-Mega",
		megaEvolves: "Mawile",
		num: 681,
		gen: 6,
		desc: "Mega-evolves Mawile."
	},
	"meadowplate": {
		id: "meadowplate",
		name: "Meadow Plate",
		spritenum: 282,
		fling: {
			basePower: 90
		},
		onPlate: 'Grass',
		onBasePowerPriority: 6,
		num: 301,
		gen: 4,
		desc: "Holder's Grass-type attacks have 1.2x power. Judgment is Grass-type."
	},
	"medichamite": {
		id: "medichamite",
		name: "Medichamite",
		spritenum: 599,
		megaStone: "Medicham-Mega",
		megaEvolves: "Medicham",
		num: 665,
		gen: 6,
		desc: "Mega-evolves Medicham."
	},
	"mentalherb": {
		id: "mentalherb",
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
		},
		num: 219,
		gen: 3,
		desc: "Cures holder if affected by Attract, Disable, Encore, Taunt, Torment. Single use."
	},
	"metalcoat": {
		id: "metalcoat",
		name: "Metal Coat",
		spritenum: 286,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 233,
		gen: 2,
		desc: "Holder's Steel-type attacks have 1.2x power."
	},
	"metalpowder": {
		id: "metalpowder",
		name: "Metal Powder",
		fling: {
			basePower: 10
		},
		spritenum: 287,
		onModifyDefPriority: 2,
		num: 257,
		gen: 2,
		desc: "If holder is a Ditto that hasn't Transformed, its Defense is doubled."
	},
	"metronome": {
		id: "metronome",
		name: "Metronome",
		spritenum: 289,
		fling: {
			basePower: 30
		},
		num: 277,
		gen: 4,
		desc: "Damage of moves used on consecutive turns is increased. Max 2x after 5 turns."
	},
	"mewtwonitex": {
		id: "mewtwonitex",
		name: "Mewtwonite X",
		spritenum: 600,
		megaStone: "Mewtwo-Mega-X",
		megaEvolves: "Mewtwo",
		num: 662,
		gen: 6,
		desc: "Mega-evolves Mewtwo into Mega Mewtwo X."
	},
	"mewtwonitey": {
		id: "mewtwonitey",
		name: "Mewtwonite Y",
		spritenum: 601,
		megaStone: "Mewtwo-Mega-Y",
		megaEvolves: "Mewtwo",
		num: 663,
		gen: 6,
		desc: "Mega-evolves Mewtwo into Mega Mewtwo Y."
	},
	"micleberry": {
		id: "micleberry",
		name: "Micle Berry",
		spritenum: 290,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Rock"
		},
		num: 209,
		gen: 4,
		desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use."
	},
	"mindplate": {
		id: "mindplate",
		name: "Mind Plate",
		spritenum: 291,
		fling: {
			basePower: 90
		},
		onPlate: 'Psychic',
		onBasePowerPriority: 6,
		num: 307,
		gen: 4,
		desc: "Holder's Psychic-type attacks have 1.2x power. Judgment is Psychic-type."
	},
	"miracleseed": {
		id: "miracleseed",
		name: "Miracle Seed",
		fling: {
			basePower: 30
		},
		spritenum: 292,
		onBasePowerPriority: 6,
		num: 239,
		gen: 2,
		desc: "Holder's Grass-type attacks have 1.2x power."
	},
	"moonball": {
		id: "moonball",
		name: "Moon Ball",
		spritenum: 294,
		num: 498,
		gen: 2,
		desc: "A Poke Ball for catching Pokemon that evolve using the Moon Stone."
	},
	"muscleband": {
		id: "muscleband",
		name: "Muscle Band",
		spritenum: 297,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 266,
		gen: 4,
		desc: "Holder's physical attacks have 1.1x power."
	},
	"mysticwater": {
		id: "mysticwater",
		name: "Mystic Water",
		spritenum: 300,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 243,
		gen: 2,
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"nanabberry": {
		id: "nanabberry",
		name: "Nanab Berry",
		spritenum: 302,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Water"
		},
		num: 166,
		gen: 3,
		desc: "No competitive use."
	},
	"nestball": {
		id: "nestball",
		name: "Nest Ball",
		spritenum: 303,
		num: 8,
		gen: 3,
		desc: "A Poke Ball that works especially well on weaker Pokemon in the wild."
	},
	"netball": {
		id: "netball",
		name: "Net Ball",
		spritenum: 304,
		num: 6,
		gen: 3,
		desc: "A Poke Ball that works especially well on Water- and Bug-type Pokemon."
	},
	"nevermeltice": {
		id: "nevermeltice",
		name: "Never-Melt Ice",
		spritenum: 305,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 246,
		gen: 2,
		desc: "Holder's Ice-type attacks have 1.2x power."
	},
	"nomelberry": {
		id: "nomelberry",
		name: "Nomel Berry",
		spritenum: 306,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dragon"
		},
		num: 178,
		gen: 3,
		desc: "No competitive use."
	},
	"normalgem": {
		id: "normalgem",
		name: "Normal Gem",
		spritenum: 307,
		isGem: true,
		num: 564,
		gen: 5,
		desc: "Holder's first successful Normal-type attack will have 1.3x power. Single use."
	},
	"occaberry": {
		id: "occaberry",
		name: "Occa Berry",
		spritenum: 311,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire"
		},
		num: 184,
		gen: 4,
		desc: "Halves damage taken from a super effective Fire-type attack. Single use."
	},
	"oddincense": {
		id: "oddincense",
		name: "Odd Incense",
		spritenum: 312,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 314,
		gen: 4,
		desc: "Holder's Psychic-type attacks have 1.2x power."
	},
	"oldamber": {
		id: "oldamber",
		name: "Old Amber",
		spritenum: 314,
		fling: {
			basePower: 100
		},
		num: 103,
		gen: 3,
		desc: "Can be revived into Aerodactyl."
	},
	"oranberry": {
		id: "oranberry",
		name: "Oran Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison"
		},
		num: 155,
		gen: 3,
		desc: "Restores 10HP when at 1/2 max HP or less. Single use."
	},
	"pamtreberry": {
		id: "pamtreberry",
		name: "Pamtre Berry",
		spritenum: 323,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Steel"
		},
		num: 180,
		gen: 3,
		desc: "No competitive use."
	},
	"parkball": {
		id: "parkball",
		name: "Park Ball",
		spritenum: 325,
		num: 500,
		gen: 2,
		desc: "A special Poke Ball for the Pal Park."
	},
	"passhoberry": {
		id: "passhoberry",
		name: "Passho Berry",
		spritenum: 329,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water"
		},
		num: 185,
		gen: 4,
		desc: "Halves damage taken from a super effective Water-type attack. Single use."
	},
	"payapaberry": {
		id: "payapaberry",
		name: "Payapa Berry",
		spritenum: 330,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic"
		},
		num: 193,
		gen: 4,
		desc: "Halves damage taken from a super effective Psychic-type attack. Single use."
	},
	"pechaberry": {
		id: "pechaberry",
		name: "Pecha Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric"
		},
		num: 151,
		gen: 3,
		desc: "Holder is cured if it is poisoned. Single use."
	},
	"persimberry": {
		id: "persimberry",
		name: "Persim Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground"
		},
		num: 156,
		gen: 3,
		desc: "Holder is cured if it is confused. Single use."
	},
	"petayaberry": {
		id: "petayaberry",
		name: "Petaya Berry",
		spritenum: 335,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Poison"
		},
		num: 204,
		gen: 3,
		desc: "Raises Sp. Atk by 1 when at 1/4 max HP or less. Single use."
	},
	"pinapberry": {
		id: "pinapberry",
		name: "Pinap Berry",
		spritenum: 337,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Grass"
		},
		num: 168,
		gen: 3,
		desc: "No competitive use."
	},
	"pinsirite": {
		id: "pinsirite",
		name: "Pinsirite",
		spritenum: 602,
		megaStone: "Pinsir-Mega",
		megaEvolves: "Pinsir",
		num: 671,
		gen: 6,
		desc: "Mega-evolves Pinsir."
	},
	"pixieplate": {
		id: "pixieplate",
		name: "Pixie Plate",
		spritenum: 610,
		fling: {
			basePower: 90
		},
		onPlate: 'Fairy',
		onBasePowerPriority: 6,
		num: -6,
		gen: 6,
		desc: "Holder's Fairy-type attacks have 1.2x power. Judgment is Fairy-type."
	},
	"plumefossil": {
		id: "plumefossil",
		name: "Plume Fossil",
		spritenum: 339,
		fling: {
			basePower: 100
		},
		num: 573,
		gen: 5,
		desc: "Can be revived into Archen."
	},
	"poisonbarb": {
		id: "poisonbarb",
		name: "Poison Barb",
		spritenum: 343,
		fling: {
			basePower: 70,
			status: 'psn'
		},
		num: 245,
		gen: 2,
		desc: "Holder's Poison-type attacks have 1.2x power."
	},
	"poisongem": {
		id: "poisongem",
		name: "Poison Gem",
		isUnreleased: true,
		spritenum: 344,
		isGem: true,
		num: 554,
		gen: 5,
		desc: "Holder's first successful Poison-type attack will have 1.3x power. Single use."
	},
	"pokeball": {
		id: "pokeball",
		name: "Poke Ball",
		spritenum: 345,
		num: 4,
		gen: 1,
		desc: "A device for catching wild Pokemon. It is designed as a capsule system."
	},
	"pomegberry": {
		id: "pomegberry",
		name: "Pomeg Berry",
		spritenum: 351,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice"
		},
		num: 169,
		gen: 3,
		desc: "No competitive use."
	},
	"powerherb": {
		id: "powerherb",
		name: "Power Herb",
		spritenum: 358,
		fling: {
			basePower: 10
		},
		num: 271,
		gen: 4,
		desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use."
	},
	"premierball": {
		id: "premierball",
		name: "Premier Ball",
		spritenum: 363,
		num: 12,
		gen: 3,
		desc: "A rare Poke Ball that has been crafted to commemorate an event."
	},
	"psychicgem": {
		id: "psychicgem",
		name: "Psychic Gem",
		isUnreleased: true,
		spritenum: 369,
		isGem: true,
		num: 557,
		gen: 5,
		desc: "Holder's first successful Psychic-type attack will have 1.3x power. Single use."
	},
	"qualotberry": {
		id: "qualotberry",
		name: "Qualot Berry",
		spritenum: 371,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison"
		},
		num: 171,
		gen: 3,
		desc: "No competitive use."
	},
	"quickball": {
		id: "quickball",
		name: "Quick Ball",
		spritenum: 372,
		num: 15,
		gen: 4,
		desc: "A Poke Ball that provides a better catch rate at the start of a wild encounter."
	},
	"quickclaw": {
		id: "quickclaw",
		name: "Quick Claw",
		spritenum: 373,
		fling: {
			basePower: 80
		},
		num: 217,
		gen: 2,
		desc: "Each turn, holder has a 20% chance to move first in its priority bracket."
	},
	"quickpowder": {
		id: "quickpowder",
		name: "Quick Powder",
		spritenum: 374,
		fling: {
			basePower: 10
		},
		num: 274,
		gen: 4,
		desc: "If holder is a Ditto that hasn't Transformed, its Speed is doubled."
	},
	"rabutaberry": {
		id: "rabutaberry",
		name: "Rabuta Berry",
		spritenum: 375,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Ghost"
		},
		num: 177,
		gen: 3,
		desc: "No competitive use."
	},
	"rarebone": {
		id: "rarebone",
		name: "Rare Bone",
		spritenum: 379,
		fling: {
			basePower: 100
		},
		num: 106,
		gen: 4,
		desc: "No competitive use."
	},
	"rawstberry": {
		id: "rawstberry",
		name: "Rawst Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass"
		},
		num: 152,
		gen: 3,
		desc: "Holder is cured if it is burned. Single use."
	},
	"razorclaw": {
		id: "razorclaw",
		name: "Razor Claw",
		spritenum: 382,
		fling: {
			basePower: 80
		},
		num: 326,
		gen: 4,
		desc: "Holder's critical hit ratio is boosted by 1."
	},
	"razorfang": {
		id: "razorfang",
		name: "Razor Fang",
		spritenum: 383,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch'
		},
		num: 327,
		gen: 4,
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
	},
	"razzberry": {
		id: "razzberry",
		name: "Razz Berry",
		spritenum: 384,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Steel"
		},
		num: 164,
		gen: 3,
		desc: "No competitive use."
	},
	"redcard": {
		id: "redcard",
		name: "Red Card",
		spritenum: 387,
		fling: {
			basePower: 10
		},
		num: 542,
		gen: 5,
		desc: "If holder is hit, it forces the attacker to switch to a random ally. Single use."
	},
	"repeatball": {
		id: "repeatball",
		name: "Repeat Ball",
		spritenum: 401,
		num: 9,
		gen: 3,
		desc: "A Poke Ball that works well on Pokemon species that were previously caught."
	},
	"rindoberry": {
		id: "rindoberry",
		name: "Rindo Berry",
		spritenum: 409,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass"
		},
		num: 187,
		gen: 4,
		desc: "Halves damage taken from a super effective Grass-type attack. Single use."
	},
	"ringtarget": {
		id: "ringtarget",
		name: "Ring Target",
		spritenum: 410,
		fling: {
			basePower: 10
		},
		num: 543,
		gen: 5,
		desc: "Holder's type immunities granted by its own typing are negated."
	},
	"rockgem": {
		id: "rockgem",
		name: "Rock Gem",
		isUnreleased: true,
		spritenum: 415,
		isGem: true,
		num: 559,
		gen: 5,
		desc: "Holder's first successful Rock-type attack will have 1.3x power. Single use."
	},
	"rockincense": {
		id: "rockincense",
		name: "Rock Incense",
		spritenum: 416,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 315,
		gen: 4,
		desc: "Holder's Rock-type attacks have 1.2x power."
	},
	"rockyhelmet": {
		id: "rockyhelmet",
		name: "Rocky Helmet",
		spritenum: 417,
		fling: {
			basePower: 60
		},
		onAfterDamageOrder: 2,
		num: 540,
		gen: 5,
		desc: "If holder is hit by a contact move, the attacker loses 1/6 of its max HP."
	},
	"rootfossil": {
		id: "rootfossil",
		name: "Root Fossil",
		spritenum: 418,
		fling: {
			basePower: 100
		},
		num: 99,
		gen: 3,
		desc: "Can be revived into Lileep."
	},
	"roseincense": {
		id: "roseincense",
		name: "Rose Incense",
		spritenum: 419,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 318,
		gen: 4,
		desc: "Holder's Grass-type attacks have 1.2x power."
	},
	"roseliberry": {
		id: "roseliberry",
		name: "Roseli Berry",
		spritenum: 603,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fairy"
		},
		num: -6,
		gen: 6,
		desc: "Halves damage taken from a super effective Fairy-type attack. Single use."
	},
	"rowapberry": {
		id: "rowapberry",
		name: "Rowap Berry",
		spritenum: 420,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Dark"
		},
		num: 212,
		gen: 4,
		desc: "If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use."
	},
	"safariball": {
		id: "safariball",
		name: "Safari Ball",
		spritenum: 425,
		num: 5,
		gen: 1,
		desc: "A special Poke Ball that is used only in the Safari Zone and Great Marsh."
	},
	"safetygoggles": {
		id: "safetygoggles",
		name: "Safety Goggles",
		spritenum: 604,
		num: -6,
		gen: 6,
		desc: "Protects the holder from weather-related damage and powder moves."
	},
	"salacberry": {
		id: "salacberry",
		name: "Salac Berry",
		spritenum: 426,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fighting"
		},
		num: 203,
		gen: 3,
		desc: "Raises Speed by 1 when at 1/4 max HP or less. Single use."
	},
	"scizorite": {
		id: "scizorite",
		name: "Scizorite",
		spritenum: 605,
		megaStone: "Scizor-Mega",
		megaEvolves: "Scizor",
		num: 670,
		gen: 6,
		desc: "Mega-evolves Scizor."
	},
	"scopelens": {
		id: "scopelens",
		name: "Scope Lens",
		spritenum: 429,
		fling: {
			basePower: 30
		},
		num: 232,
		gen: 2,
		desc: "Holder's critical hit ratio is boosted by 1."
	},
	"seaincense": {
		id: "seaincense",
		name: "Sea Incense",
		spritenum: 430,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 254,
		gen: 3,
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"sharpbeak": {
		id: "sharpbeak",
		name: "Sharp Beak",
		spritenum: 436,
		fling: {
			basePower: 50
		},
		onBasePowerPriority: 6,
		num: 244,
		gen: 2,
		desc: "Holder's Flying-type attacks have 1.2x power."
	},
	"shedshell": {
		id: "shedshell",
		name: "Shed Shell",
		spritenum: 437,
		fling: {
			basePower: 10
		},
		onModifyPokemonPriority: -10,
		num: 295,
		gen: 4,
		desc: "Holder may switch out even when trapped by another Pokemon."
	},
	"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30
		},
		num: 253,
		gen: 3,
		desc: "After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon."
	},
	"shockdrive": {
		id: "shockdrive",
		name: "Shock Drive",
		spritenum: 442,
		fling: {
			basePower: 70
		},
		onDrive: 'Electric',
		num: 117,
		gen: 5,
		desc: "Holder's Techno Blast is Electric-type."
	},
	"shucaberry": {
		id: "shucaberry",
		name: "Shuca Berry",
		spritenum: 443,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground"
		},
		num: 191,
		gen: 4,
		desc: "Halves damage taken from a super effective Ground-type attack. Single use."
	},
	"silkscarf": {
		id: "silkscarf",
		name: "Silk Scarf",
		spritenum: 444,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 251,
		gen: 3,
		desc: "Holder's Normal-type attacks have 1.2x power."
	},
	"silverpowder": {
		id: "silverpowder",
		name: "SilverPowder",
		spritenum: 447,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 222,
		gen: 2,
		desc: "Holder's Bug-type attacks have 1.2x power."
	},
	"sitrusberry": {
		id: "sitrusberry",
		name: "Sitrus Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic"
		},
		num: 158,
		gen: 3,
		desc: "Restores 1/4 max HP when at 1/2 max HP or less. Single use."
	},
	"skullfossil": {
		id: "skullfossil",
		name: "Skull Fossil",
		spritenum: 449,
		fling: {
			basePower: 100
		},
		num: 105,
		gen: 4,
		desc: "Can be revived into Cranidos."
	},
	"skyplate": {
		id: "skyplate",
		name: "Sky Plate",
		spritenum: 450,
		fling: {
			basePower: 90
		},
		onPlate: 'Flying',
		onBasePowerPriority: 6,
		num: 306,
		gen: 4,
		desc: "Holder's Flying-type attacks have 1.2x power. Judgment is Flying-type."
	},
	"smoothrock": {
		id: "smoothrock",
		name: "Smooth Rock",
		spritenum: 453,
		fling: {
			basePower: 10
		},
		num: 283,
		gen: 4,
		desc: "Holder's use of Sandstorm lasts 8 turns instead of 5."
	},
	"snowball": {
		id: "snowball",
		name: "Snowball",
		spritenum: 606,
		fling: {
			basePower: 30
		},
		num: -6,
		gen: 6,
		desc: "Raises Attack by 1 if hit by an Ice-type attack. Single use."
	},
	"softsand": {
		id: "softsand",
		name: "Soft Sand",
		spritenum: 456,
		fling: {
			basePower: 10
		},
		onBasePowerPriority: 6,
		num: 237,
		gen: 2,
		desc: "Holder's Ground-type attacks have 1.2x power."
	},
	"souldew": {
		id: "souldew",
		name: "Soul Dew",
		isUnreleased: true,
		spritenum: 459,
		fling: {
			basePower: 30
		},
		num: 225,
		gen: 3,
		desc: "If holder is a Latias or a Latios, its Sp. Atk and Sp. Def are 1.5x."
	},
	"spelltag": {
		id: "spelltag",
		name: "Spell Tag",
		spritenum: 461,
		fling: {
			basePower: 30
		},
		onBasePowerPriority: 6,
		num: 247,
		gen: 2,
		desc: "Holder's Ghost-type attacks have 1.2x power."
	},
	"spelonberry": {
		id: "spelonberry",
		name: "Spelon Berry",
		spritenum: 462,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Dark"
		},
		num: 179,
		gen: 3,
		desc: "No competitive use."
	},
	"splashplate": {
		id: "splashplate",
		name: "Splash Plate",
		spritenum: 463,
		fling: {
			basePower: 90
		},
		onPlate: 'Water',
		onBasePowerPriority: 6,
		num: 299,
		gen: 4,
		desc: "Holder's Water-type attacks have 1.2x power. Judgment is Water-type."
	},
	"spookyplate": {
		id: "spookyplate",
		name: "Spooky Plate",
		spritenum: 464,
		fling: {
			basePower: 90
		},
		onPlate: 'Ghost',
		onBasePowerPriority: 6,
		num: 310,
		gen: 4,
		desc: "Holder's Ghost-type attacks have 1.2x power. Judgment is Ghost-type."
	},
	"sportball": {
		id: "sportball",
		name: "Sport Ball",
		spritenum: 465,
		num: 499,
		gen: 4,
		desc: "A special Poke Ball for the Bug-Catching Contest."
	},
	"starfberry": {
		id: "starfberry",
		name: "Starf Berry",
		spritenum: 472,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Psychic"
		},
		num: 207,
		gen: 3,
		desc: "Raises a random stat by 2 when at 1/4 max HP or less (not acc/eva). Single use."
	},
	"steelgem": {
		id: "steelgem",
		name: "Steel Gem",
		isUnreleased: true,
		spritenum: 473,
		isGem: true,
		onSourceTryPrimaryHit: function (target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (move.type === 'Steel') {
				if (source.useItem()) {
					this.add('-enditem', source, 'Steel Gem', '[from] gem', '[move] ' + move.name);
					source.addVolatile('gem');
				}
			}
		},
		num: 563,
		gen: 5,
		desc: "Holder's first successful Steel-type attack will have 1.3x power. Single use."
	},
	"stick": {
		id: "stick",
		name: "Stick",
		fling: {
			basePower: 60
		},
		spritenum: 475,
		num: 259,
		gen: 2,
		desc: "If holder is a Farfetch'd, its critical hit ratio is boosted by 2."
	},
	"stickybarb": {
		id: "stickybarb",
		name: "Sticky Barb",
		spritenum: 476,
		fling: {
			basePower: 80
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		num: 288,
		gen: 4,
		desc: "Each turn, holder loses 1/8 max HP. An attacker making contact can receive it."
	},
	"stoneplate": {
		id: "stoneplate",
		name: "Stone Plate",
		spritenum: 477,
		fling: {
			basePower: 90
		},
		onPlate: 'Rock',
		onBasePowerPriority: 6,
		num: 309,
		gen: 4,
		desc: "Holder's Rock-type attacks have 1.2x power. Judgment is Rock-type."
	},
	"tamatoberry": {
		id: "tamatoberry",
		name: "Tamato Berry",
		spritenum: 486,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Psychic"
		},
		num: 174,
		gen: 3,
		desc: "No competitive use."
	},
	"tangaberry": {
		id: "tangaberry",
		name: "Tanga Berry",
		spritenum: 487,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug"
		},
		num: 194,
		gen: 4,
		desc: "Halves damage taken from a super effective Bug-type attack. Single use."
	},
	"thickclub": {
		id: "thickclub",
		name: "Thick Club",
		spritenum: 491,
		fling: {
			basePower: 90
		},
		onModifyAtkPriority: 1,
		num: 258,
		gen: 2,
		desc: "If holder is a Cubone or a Marowak, its Attack is doubled."
	},
	"timerball": {
		id: "timerball",
		name: "Timer Ball",
		spritenum: 494,
		num: 10,
		gen: 3,
		desc: "A Poke Ball that becomes better the more turns there are in a battle."
	},
	"toxicorb": {
		id: "toxicorb",
		name: "Toxic Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'tox'
		},
		onResidualOrder: 26,
		num: 272,
		gen: 4,
		desc: "At the end of every turn, this item attempts to badly poison the holder."
	},
	"toxicplate": {
		id: "toxicplate",
		name: "Toxic Plate",
		spritenum: 516,
		fling: {
			basePower: 90
		},
		onPlate: 'Poison',
		num: 304,
		gen: 4,
		desc: "Holder's Poison-type attacks have 1.2x power. Judgment is Poison-type."
	},
	"twistedspoon": {
		id: "twistedspoon",
		name: "TwistedSpoon",
		spritenum: 520,
		fling: {
			basePower: 30
		},
		num: 248,
		gen: 2,
		desc: "Holder's Psychic-type attacks have 1.2x power."
	},
	"tyranitarite": {
		id: "tyranitarite",
		name: "Tyranitarite",
		spritenum: 607,
		megaStone: "Tyranitar-Mega",
		megaEvolves: "Tyranitar",
		num: 669,
		gen: 6,
		desc: "Mega-evolves Tyranitar."
	},
	"ultraball": {
		id: "ultraball",
		name: "Ultra Ball",
		spritenum: 521,
		num: 2,
		gen: 1,
		desc: "An ultra-performance Ball that provides a higher catch rate than a Great Ball."
	},
	"venusaurite": {
		id: "venusaurite",
		name: "Venusaurite",
		spritenum: 608,
		megaStone: "Venusaur-Mega",
		megaEvolves: "Venusaur",
		num: 659,
		gen: 6,
		desc: "Mega-evolves Venusaur."
	},
	"wacanberry": {
		id: "wacanberry",
		name: "Wacan Berry",
		spritenum: 526,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric"
		},
		num: 186,
		gen: 4,
		desc: "Halves damage taken from a super effective Electric-type attack. Single use."
	},
	"watergem": {
		id: "watergem",
		name: "Water Gem",
		isUnreleased: true,
		spritenum: 528,
		isGem: true,
		num: 549,
		gen: 5,
		desc: "Holder's first successful Water-type attack will have 1.3x power. Single use."
	},
	"watmelberry": {
		id: "watmelberry",
		name: "Watmel Berry",
		spritenum: 530,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Fire"
		},
		num: 181,
		gen: 3,
		desc: "No competitive use."
	},
	"waveincense": {
		id: "waveincense",
		name: "Wave Incense",
		spritenum: 531,
		fling: {
			basePower: 10
		},
		num: 317,
		gen: 4,
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"weaknesspolicy": {
		id: "weaknesspolicy",
		name: "Weakness Policy",
		spritenum: 609,
		fling: {
			basePower: 80
		},
		num: -6,
		gen: 6,
		desc: "Attack and Sp. Atk sharply increase when hit super effectively. Single use."
	},
	"wepearberry": {
		id: "wepearberry",
		name: "Wepear Berry",
		spritenum: 533,
		isBerry: true,
		naturalGift: {
			basePower: 90,
			type: "Electric"
		},
		num: 167,
		gen: 3,
		desc: "No competitive use."
	},
	"whiteherb": {
		id: "whiteherb",
		name: "White Herb",
		spritenum: 535,
		fling: {
			basePower: 10,
		},
		num: 214,
		gen: 3,
		desc: "Restores all lowered stat stages to 0 when one is less than 0. Single use."
	},
	"widelens": {
		id: "widelens",
		name: "Wide Lens",
		spritenum: 537,
		fling: {
			basePower: 10
		},
		num: 265,
		gen: 4,
		desc: "The accuracy of attacks by the holder is 1.1x."
	},
	"wikiberry": {
		id: "wikiberry",
		name: "Wiki Berry",
		spritenum: 538,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock"
		},
		num: 160,
		gen: 3,
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"wiseglasses": {
		id: "wiseglasses",
		name: "Wise Glasses",
		spritenum: 539,
		fling: {
			basePower: 10
		},
		num: 267,
		gen: 4,
		desc: "Holder's special attacks have 1.1x power."
	},
	"yacheberry": {
		id: "yacheberry",
		name: "Yache Berry",
		spritenum: 567,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice"
		},
		num: 188,
		gen: 4,
		desc: "Halves damage taken from a super effective Ice-type attack. Single use."
	},
	"zapplate": {
		id: "zapplate",
		name: "Zap Plate",
		spritenum: 572,
		fling: {
			basePower: 90
		},
		onPlate: 'Electric',
		num: 300,
		gen: 4,
		desc: "Holder's Electric-type attacks have 1.2x power. Judgment is Electric-type."
	},
	"zoomlens": {
		id: "zoomlens",
		name: "Zoom Lens",
		spritenum: 574,
		fling: {
			basePower: 10
		},
		num: 276,
		gen: 4,
		desc: "The accuracy of attacks by the holder is 1.2x if it moves after the target."
	}
};
}