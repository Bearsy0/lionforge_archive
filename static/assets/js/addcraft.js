
(function($) {
    var crafting_disc_item = {
        "ALC": ["divider:Gathering Potions", "Potion of Harvest: Beeswax", 
                "Potion of Harvest: Cutting Grit", "Potion of Harvest: Gem and Mineral", 
                "Potion of Plenty: Digging", "Potion of Plenty: Logging", 
                "Potion of Plenty: Mining", "Potion of Plenty: Quarrying", 
                "Potion of Plenty: Skinning",

                "divider:The rest",            
                "Empty Flask", "Philosopher's Solution", 
                "Transmutation Solution", "Ambrosia", "Philosopher's Stone", 
                "Potion of Exchange", "Potion of Sapho",   "Advanced Toxins"],
                
        "ARM": ["divider:Armor", "Mail Boots", "Mail Coif", 
                "Mail Gloves","Mail Hauberk","Plate Boots","Plate Breastplate",
                "Plate Gloves","Plate Helmet", "Treated Steel", "divider:Basic Components", 
                "Metal Bar", "Metal Block", "Metal Buckles", "Metal Plates", 
                "Metal Rings", "Metal Rivets", "Metal Scales", "Metal Sheet", "Carbon", 
                "Coal", "Modify Weapon Mold", ],
                
        "CKG": ["divider: Campfire Cooking",
                "Bread", "Campfire Stew", "Chocolate Bar", "Coffee", "Kebab Skewers", 
                "Trail Mix", 

                "divider: Sous Chef",
                "Artisan Cheese", "Bone Broth", "Cake", "Chocolate Milk", "Cookie", "Gnocchi",
                "Grilled Sandwich", "Ice Cream", "Red Wine", 

                "divider: Head Chef",
                "Bakes Ice Cream", "Biscuits and Gravy", "Bon Tippers", "Meat Burgundy",
                "Pesto Gnocchi", "Pot Roast", "Sumptuous Pot Pie",
            
                "divider:Components", "Fresh Butter", "Pasteurized Milk", "Potato Flour",
                "Yeast",],

        "JWL": ["divider: Jewelry", 
                "Necklace", "Ring",
            
                "divider: Cuts", "Cut Gemstone: Baguette", "Cut Gemstone: Focusing", 
                "Cut Gemstone: Marquise",
                "Cut Gemstone: Oval", "Cut Gemstone: Round", "Cut Gemstone: Square", 
                "Cut Gemstone: Triangle",
                "Exacting Cut Gemstone: Briolette", "Exacting Cut Gemstone: Heart", 
                "Exacting Cut Gemstone: Trillion",
                "Weapon Cut Gemstone: Spherical",
            
                "divider: Gem Grinding and Polishing",
                "Grind Gemstone", "Polish Gemstone", "Polish Soulgem",

                "divider: Jewelry Settings",
                "Necklace Bail", "Necklace Chain", "Ring Band", "Ring Setting",                
            ],
        "STO": ["Diamond Cutting Blade"],

        "LTW": ["divider:Armor" , "Leather Boots", "Leather Cap", 
                "Leather Gloves", "Leather Tunic",
                "divider:Components","Stitched Leather", "Leather Squares", "Hardened Leather Squares", 
                "Leather Padding", "Treated Leather", "Lacing Sinew", "Bow String",
                "Enarmes", "Weapon Grip", ],        

        "WPN": ["divider:Weapons", "1H Axe", "Dagger", "Frostcaster", "Great Axe", "Great Mace", "Great Sword",
                "Longsword", "1H Mace", "Throwing Hammer", "Pistol", "Rapier", "Short Sword",
                "Sickle", "Shield: Small", "Shield: Medium", "Shield: Large", "Arrowhead Bundle",
                "Horseshoes", 
                
                "divider:Basic Components",
                "Metal Bar", "Metal Block", "Metal Buckles", "Metal Plates", 
                "Metal Rings", "Metal Rivets", "Metal Scales", "Metal Sheet", "Carbon", 
                "Coal", "Modify Weapon Mold", 
                
                "divider:Weapon Components",
                "Blade Rivets", "Shield Covering", "1H Weapon Blade", "1H Weapon Crossguard",
                "1H Weapon Crossguard", "1H Weapon Hilt", "1H Weapon Pommel", 
                "1H Weapon Shaft: Short", "Arcane Actuator", "Casting Aperture",
                "Frostcasting Enclosure", "Mana Impeller", "Meta-Magical Conducter", 
                "Pistol Barrel", "Pistol Body", "Pistol Hammer and Frizzen", "Pistol Pins", "Pistol Trigger",
                "2H Blade Rivets: Great", "2H Great Weapon Crossguard", "2H Great Weapon Pommel",
                "2H Weapon Blade: Great", "2H Weapon Head: Great", "2H Weapon Hilt: Great",
                "2H Weapon Shaft: Medium"],

        "RUN": ["divider:Runetools",
                "Advanced Picks", "Advanced Axes", "Advanced Hammers", 
                "Advanced Knives", "Advanced Shovels",
                "Intermediate Picks", "Intermediate Axes", "Intermediate Hammers",
                "Intermediate Knives","Intermediate Shovels", 

                "divider:Sigils and Runestones",
                "Unmarked Runestone", 
                "Sigil: Axe", "Sigil: Binding", "Sigil: Hammer",
                "Sigil: Haste", "Sigil: Knife", "Sigil: Life", "Sigil: Mobility", 
                "Sigil: Pick", "Sigil: Shovel", "Sigil: Esoteric", 
                "Discipline: Major", "Runestone: Haste", "Runestone: Esoteric"],
        "WOO": ["divider: Basic Components",
                "Arrow Shaft Bundle", "Composite Wood Plank", "Parchment Paper",
                "Wooden Board", "Sandpaper", "Modify Weapon Form", "Parchment Vellum",
                
                "divider: Shield Bases",
                "Shield Base: Small", "Shield Base: Medium", "Shield Base: Large",

                "divider: Ranged Components",
                "Book Casing", "Book Chapter", "Book Clasp", "Bound Chapters", "Bow Rest",
                "Bow Riser", "Bow Sight", "Limbs: Bow", "Limbs: Staff", "Staff Head",
                "Staff Heel",

                "divider: Weapons",
                "Advanced Arrows", "Book", "Bow", "Mystical Staff", "Quiver"
            ]        
    };
    crafting_disc_item['BKS'] = [...new Set( crafting_disc_item["ARM"].concat(crafting_disc_item["WPN"]))]

    var item_stats_norm = {
        // CKG
        "Bread": [1,["Pathfinding speed +10%"]],
        "Campfire Stew": [1, ["Mounted Movement Speed +5%", "Harvest Critical Chance: All +5%"]],
        "Chocolate Bar": [1, ["Critical Damage +5%"]],
        "Coffee": [1, ["Stamina +10"]],
        "Kebab Skewers": [1, ["Plentiful Harvest Wood", "Plentiful Harvest Ore", "Plentiful Harvest Stone",
                        "Plentiful Harvest Grave", "Plentiful Harvest Animal"]],
        "Trail Mix": [1, ["Harvest Chance: Nuts and Grubs +3%"]],
        "Artisan Cheese": [1, ["Risk Reduction: All +5"]],
        "Bone Broth": [1, ["Harvest Bone and Blood +5%"]],
        "Cake": [1, ["Health +500"]],
        "Chocolate Milk": [1, ["Harvest Critical Amount: All +1"]],
        "Cookie": [1, ["In Combat Movement Speed +5%"]],
        "Gnocchi": [1, ["Attack Rating and Support Rating +25"]],
        "Grilled Sandwich": [1, ["Logging +15", "Mining +15", "Quarrying +15", 
                                "Grave Digging +5", "Skinning +15"]],
        "Ice Cream": [1, ["Chance to deal Ice Dmg when performing Melee Basic Attack"]],
        "Red Wine": [1, ["Stamina +20"]],
        "Bakes Ice Cream": [1, ["Chance to proc AoE Fire Dmg"]],
        "Biscuits and Gravy": [1, ["Melee Power Damge +5%"]],
        "Bon Tippers": [1, ["Risk Difficulty Reduction by 15"]],
        "Meat Burgundy": [1, ["Basic Attack +10%"]],
        "Pesto Gnocchi": [1, ["Ranged Power Damage +5%"]],
        "Pot Roast": [1, ["Healing Bonus +3%"]],
        "Sumptuous Pot Pie": [1, ["Experimentation Pts +1"]],
        
        // JWL
        "Cut Gemstone: Baguette": [1, ["Jewelcrafting Experimentation", "Leatherworking Experimentation",
                                "Alchemy Experimentation", "Runemacking Experimentation"]],
        "Cut Gemstone: Focusing": [1, ["Stable Focus", "Refreshing Focus", "Volatile Focus", 
                                "Cooling Focus", "Frigid Focus"]],
        "Cut Gemstone: Marquise": [1, ["Digging", "Quarrying", "Logging", "Mining", "Skinning"]],
        "Cut Gemstone: Oval": [1, ["Stealth", "Power Damage Bonus: Ranged", "Toxin Application Chance Mod",
                                "Power Damage Bonus: Melee", "Critical Strike"]],
        "Cut Gemstone: Round": [1, ["Exploit Weakness: Grave", "Exploit Weakness: Stone", 
                                "Exploit Weakness: Animal", "Exploit Weakness: Wood", "Exploit Weakness: Ore"]],

        "Cut Gemstone: Square": [1, ["Stonemasonary Expermentation", "Necromancy Experimentation", 
                                "Woodworking Expermentation", "Blacksmithing Expermentation"]],
        "Cut Gemstone: Triangle": [1, ["Perception", "Elemental Resistance", "Ranged Distance Bonus", 
                                "Physical Resistance", "Personal Healing Mod"]],
        "Exacting Cut Gemstone: Briolette": [1, ["Critical Healing Amount", "Health Regen: Out of Combat", 
                                "Basic Attack Damage", "Crit Damage", "Stamina Regen: in Combat"]],
        "Exacting Cut Gemstone: Heart": [1, ["Leatherworking Experimentation Points", "Runemaking Experimentation Points",
                                "Necromancy Experimentation Points", "Woodworking Experimentation Points",
                                "Blacksmithing Experimentation Points", "Jewelcrafting Experimentation Points",
                                "Alchemy Experimentation Points", "Stonemasonry Experimentation Points"]],
        "Exacting Cut Gemstone: Trillion": [1, ["Spot Weakness: All", "Harvesting Efficiency", "Node Damage Bonus: All",
                                "Reaping", "Stamina Regen Out of Combat"]],
        "Weapon Cut Gemstone: Spherical": [1, ["Spirit", "Dexterity", "Strength", "Intellect", "Constitution"]],
        "Grind Gemstone": [1, ["Blood", "Water"],
                          1, "Gem", [
                                "Spirit", "Dexterity", "Strength", "Intellect", "Constitution",

                                "Jewelcrafting Exp", "Leatherworking Exp",
                                "Alchemy Exp", "Runemacking Exp",
                                "Stonemasonary Exp", "Necromancy Exp", 
                                "Woodworking Exp", "Blacksmithing Exp",

                                "Leatherworking Pts", "Runemaking Pts",
                                "Necromancy Pts", "Woodworking Pts",
                                "Blacksmithing Pts", "Jewelcrafting Pts",
                                "Alchemy Pts", "Stonemasonry Pts",

                                "Digging", "Quarrying", "Logging", "Mining", "Skinning",
                                "Spot Weakness: All", "Harvesting Efficiency", "Node Damage Bonus: All",
                                "Exploit Weakness: Grave", "Exploit Weakness: Stone", "Exploit Weakness: Animal", 
                                "Exploit Weakness: Wood", "Exploit Weakness: Ore",

                                "Stable Focus", "Refreshing Focus", "Volatile Focus", 
                                "Cooling Focus", "Frigid Focus", 
                                "Stealth", "Power Damage Bonus: Ranged", "Toxin Application Chance Mod",                                
                                "Power Damage Bonus: Melee", "Critical Strike", 
                                "Perception", "Elemental Resistance", "Ranged Distance Bonus", 
                                "Physical Resistance", "Personal Healing Mod",
                                "Critical Healing Amount", "Health Regen: Out of Combat",                                 
                                "Basic Attack Damage", "Crit Damage", "Stamina Regen: in Combat",                                
                                "Reaping", "Stamina Regen Out of Combat" 
                        ]],
        "Polish Gemstone": [
                            1, ["Blood", "Water"],
                            1, "Gem", ["Spirit", "Dexterity", "Strength", "Intellect", "Constitution",

                            "Jewelcrafting Exp", "Leatherworking Exp",
                            "Alchemy Exp", "Runemacking Exp",
                            "Stonemasonary Exp", "Necromancy Exp", 
                            "Woodworking Exp", "Blacksmithing Exp",

                            "Leatherworking Pts", "Runemaking Pts",
                            "Necromancy Pts", "Woodworking Pts",
                            "Blacksmithing Pts", "Jewelcrafting Pts",
                            "Alchemy Pts", "Stonemasonry Pts",

                            "Digging", "Quarrying", "Logging", "Mining", "Skinning",
                            "Spot Weakness: All", "Harvesting Efficiency", "Node Damage Bonus: All",
                            "Exploit Weakness: Grave", "Exploit Weakness: Stone", "Exploit Weakness: Animal", 
                            "Exploit Weakness: Wood", "Exploit Weakness: Ore",

                            "Stable Focus", "Refreshing Focus", "Volatile Focus", 
                            "Cooling Focus", "Frigid Focus", 
                            "Stealth", "Power Damage Bonus: Ranged", "Toxin Application Chance Mod",                                
                            "Power Damage Bonus: Melee", "Critical Strike", 
                            "Perception", "Elemental Resistance", "Ranged Distance Bonus", 
                            "Physical Resistance", "Personal Healing Mod",
                            "Critical Healing Amount", "Health Regen: Out of Combat",                                 
                            "Basic Attack Damage", "Crit Damage", "Stamina Regen: in Combat",                                
                            "Reaping", "Stamina Regen Out of Combat" 
                        ]],
        "Necklace Bail": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"]],
        "Ring Setting": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"]],
        "Necklace Chain": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"]],
        "Ring Band": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"]],        
        "Necklace": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"],
                    1, "Craft type", ["Blood", "Water"],
                    1, "Gem", ["Spirit", "Dexterity", "Strength", "Intellect", "Constitution",

                    "Jewelcrafting Exp", "Leatherworking Exp",
                    "Alchemy Exp", "Runemacking Exp",
                    "Stonemasonary Exp", "Necromancy Exp", 
                    "Woodworking Exp", "Blacksmithing Exp",

                    "Leatherworking Pts", "Runemaking Pts",
                    "Necromancy Pts", "Woodworking Pts",
                    "Blacksmithing Pts", "Jewelcrafting Pts",
                    "Alchemy Pts", "Stonemasonry Pts",

                    "Digging", "Quarrying", "Logging", "Mining", "Skinning",
                    "Spot Weakness: All", "Harvesting Efficiency", "Node Damage Bonus: All",
                    "Exploit Weakness: Grave", "Exploit Weakness: Stone", "Exploit Weakness: Animal", 
                    "Exploit Weakness: Wood", "Exploit Weakness: Ore",

                    "Stable Focus", "Refreshing Focus", "Volatile Focus", 
                    "Cooling Focus", "Frigid Focus", 
                    "Stealth", "Power Damage Bonus: Ranged", "Toxin Application Chance Mod",                                
                    "Power Damage Bonus: Melee", "Critical Strike", 
                    "Perception", "Elemental Resistance", "Ranged Distance Bonus", 
                    "Physical Resistance", "Personal Healing Mod",
                    "Critical Healing Amount", "Health Regen: Out of Combat",                                 
                    "Basic Attack Damage", "Crit Damage", "Stamina Regen: in Combat",                                
                    "Reaping", "Stamina Regen Out of Combat" 
                    ]],
        "Ring": [1, ["Spirit", "Strength", "Constitution", "Dexterity", "Intellect"],
                    1, "Craft type", ["Blood", "Water"],
                    1, "Gem", ["Spirit", "Dexterity", "Strength", "Intellect", "Constitution",

                    "Jewelcrafting Exp", "Leatherworking Exp",
                    "Alchemy Exp", "Runemacking Exp",
                    "Stonemasonary Exp", "Necromancy Exp", 
                    "Woodworking Exp", "Blacksmithing Exp",

                    "Leatherworking Pts", "Runemaking Pts",
                    "Necromancy Pts", "Woodworking Pts",
                    "Blacksmithing Pts", "Jewelcrafting Pts",
                    "Alchemy Pts", "Stonemasonry Pts",

                    "Digging", "Quarrying", "Logging", "Mining", "Skinning",
                    "Spot Weakness: All", "Harvesting Efficiency", "Node Damage Bonus: All",
                    "Exploit Weakness: Grave", "Exploit Weakness: Stone", "Exploit Weakness: Animal", 
                    "Exploit Weakness: Wood", "Exploit Weakness: Ore",

                    "Stable Focus", "Refreshing Focus", "Volatile Focus", 
                    "Cooling Focus", "Frigid Focus", 
                    "Stealth", "Power Damage Bonus: Ranged", "Toxin Application Chance Mod",                                
                    "Power Damage Bonus: Melee", "Critical Strike", 
                    "Perception", "Elemental Resistance", "Ranged Distance Bonus", 
                    "Physical Resistance", "Personal Healing Mod",
                    "Critical Healing Amount", "Health Regen: Out of Combat",                                 
                    "Basic Attack Damage", "Crit Damage", "Stamina Regen: in Combat",                                
                    "Reaping", "Stamina Regen Out of Combat" 
                    ]],
        // STO
        "Diamond Cutting Blade": [1, ["Diamond Cutting Blade", "Chaos Ember Cutting Blade"]],
        // WPN
        // Weapons
        "1H Axe": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Dagger": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "1H Mace": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                    1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Throwing Hammer": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                            1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Pistol": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , 
                        "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Rapier": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Short Sword": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                        1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Sickle": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Shield: Small": [2, ["Physical Resist", "Elemental Resist", "Organic Resist", 
                            "Attack Power", "Support Power"],
                          2, "Enarmes", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                          "Atk Power" , "Supp Power"],
                          2, "Shield Base", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen", "Ice Pen",
                            "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                            "Crit Heal Chance", "Crit Heal Amnt"]],  
        "Shield: Medium": [2, ["Physical Resist", "Elemental Resist", "Organic Resist", 
                            "Attack Power", "Support Power"],
                           2, "Enarmes", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                           "Atk Power" , "Supp Power"],
                           3, "Shield Base", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen", "Ice Pen",
                            "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                            "Crit Heal Chance", "Crit Heal Amnt"]],  
        "Shield: Large": [2, ["Physical Resist", "Elemental Resist", "Organic Resist", 
                            "Attack Power", "Support Power"],
                          2, "Enarmes", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                          "Atk Power" , "Supp Power"],
                          4, "Shield Base", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen", "Ice Pen",
                            "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                            "Crit Heal Chance", "Crit Heal Amnt"]],       

        "Frostcaster": [5, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Great Axe": [10, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                      2, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Great Mace": [10, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                      2, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Great Sword": [10, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                      2, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Longsword": [10, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                      2, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        
        //, , , , , ,
        //         , , , ,
        //        , , , 

        // 1H components
        "Blade Rivets": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Shield Covering": [2, ["Physical Resist", "Elemental Resist", "Organic Resist", 
                        "Attack Power", "Support Power"]],        
        "1H Weapon Blade": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Head": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Shaft: Short": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt", "Stamina"]],
        "1H Weapon Crossguard": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Pommel": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],       
        "1H Weapon Hilt": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                           1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        
        // 2H components
        "2H Blade Rivets: Great": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "2H Great Weapon Crossguard": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "2H Great Weapon Pommel": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "2H Weapon Blade": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "2H Weapon Head": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "2H Weapon Shaft: Medium": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt", "Stamina"]],
        "2H Weapon Hilt: Great": [4, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                        2, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],

        // Ranged components
        "Arcane Actuator": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Arrowhead Bundle": [1, ["Piercing", "Slashing", "Crushing", "Fire", "Ice"]],
        "Casting Aperture": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Mana Impeller": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Frostcasting Enclosure": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                                   1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , 
                        "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Meta-Magical Conducter": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Pistol Barrel": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Pistol Pins": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Pistol Hammer and Frizzen": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Pistol Trigger": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Pistol Body": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                        1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , 
                        "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        
        // WOO
        "Composite Wood Plank": [1, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                      "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                      "Crit Heal Chance", "Crit Heal Amnt"]],
        "Shield Base: Small": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Shield Base: Medium": [3, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Shield Base: Large": [4, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Book Casing": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"],
                        2, "Stitched Leather", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Book Chapter": [1, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        1, "Planks", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Book Clasp": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Bound Chapters": [3, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        3, "Planks", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Bow Rest": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Bow Sight": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Bow Riser": [4, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"],
                        2, "Stitched Leather" , ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Limbs: Bow": [4, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Limbs: Staff": [2, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"],
                        2, "Weapon Grip" , ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Staff Head": [3, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Staff Heel": [4, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"]],
        "Book": [3, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        8, "Planks", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                        "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                        "Crit Heal Chance", "Crit Heal Amnt"],
                        2, "Stitched Leather", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Bow": [1, ["Compound", "Recurve", "Spellbound"],
                    8, "Planks", ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                    "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                    "Crit Heal Chance", "Crit Heal Amnt"],
                    4, "Stitched Leather" , ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        "Mystical Staff": [9, ["Supp Power", "Stamina", "Fire Pen", "Electric Pen", "Nature Pen",
                    "Slash Pen", "Crush Pen", "Pierce Pen", "Crit Strike", "Crit Dmg", 
                    "Crit Heal Chance", "Crit Heal Amnt"],
                    2, "Weapon Grip" , ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        "Quiver": [1, ["Piercing", "Slashing", "Crushing", "Fire", "Ice"]],
        // RUN
        "Sigil: Axe": [1, ["Harvest Crit Chance: Wood", "Beneficial Harvest Chance: Wood",
                           "Apples Harvest Chance", "Plethora of Dust"]],
        "Sigil: Hammer": [1, ["Harvest Crit Chance: Stone", "Beneficial Harvest Chance: Stone",
                            "Mineral Harvest Chance", "Plethora of Dust"]],
        "Sigil: Knife": [1, ["Harvest Crit Chance: Animal", "Beneficial Harvest Chance: Animal",
                            "Blood Harvest Chance", "Plethora of Meat"]],
        "Sigil: Pick": [1, ["Harvest Crit Chance: Ore", "Beneficial Harvest Chance: Ore",
                            "Gem Harvest Chance", "Plethora of Dust"]],
        "Sigil: Shovel": [1, ["Harvest Crit Chance: Graves", "Beneficial Harvest Chance: Graves",
                            "Grave Goods Harvest Chance", "Plethora of Dust"]],
                            "Advanced Picks": [1, ["Harvest Crit Chance: Ore", "Beneficial Harvest Chance: Ore",
                            "Gem Harvest Chance", "Plethora of Dust"]],
        "Advanced Axes": [1, ["Harvest Crit Chance: Wood", "Beneficial Harvest Chance: Wood",
                            "Apples Harvest Chance", "Plethora of Dust"]],
        "Advanced Hammers": [1, ["Harvest Crit Chance: Stone", "Beneficial Harvest Chance: Stone",
                            "Mineral Harvest Chance", "Plethora of Dust"]],
        "Advanced Knives": [1, ["Harvest Crit Chance: Animal", "Beneficial Harvest Chance: Animal",
                            "Blood Harvest Chance", "Plethora of Meat"]],
        "Advanced Shovels": [1, ["Harvest Crit Chance: Graves", "Beneficial Harvest Chance: Graves",
                            "Grave Goods Harvest Chance", "Plethora of Dust"]],  
        
        // ALC
        "Philosopher's Stone": [2, ["Dexterity", "Spirit", "Intellect", "Strength", "Constitution"]],
        "Advanced Toxins": [1, ["Potent Poison", "Advanced Poison", "Poison"]],

        // ARM and WPN basic components
        "Metal Bar": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Metal Section": [1, ["Physical Resist", "Elemental Resist", "Organic Resist", "Attack Power", "Support Power"]],
        "Metal Scales": [1, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                        "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Metal Plates": [1, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                        "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Metal Rings": [1, ["Bleed Dmg", "Fire Dmg", "Ice Dmg", "Electric. Dmg", "Nature Dmg", "Poison Dmg",
                        "Disease Dmg", "Slashing Dmg", "Crushing Dmg", "Piercing Dmg", "Crit Dmg", "Crit Heal Amnt"]],
        "Metal Sheet": [1, ["Bleed Dmg", "Fire Dmg", "Ice Dmg", "Electric. Dmg", "Nature Dmg", "Poison Dmg",
                        "Disease Dmg", "Slashing Dmg", "Crushing Dmg", "Piercing Dmg", "Crit Dmg", "Crit Heal Amnt"]],
        "Metal Buckles": [1, ["Out-of-Combat Health Regen","Stealth/Out-of-Combat Health Regen"]],
        "Metal Rivets": [1, ["Out-of-Combat Health Regen","Stealth/Out-of-Combat Health Regen"]],
        // ARM crafting
        "Mail Boots": [2, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Plate Boots": [2, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Mail Coif": [3, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Plate Helmet": [3, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Mail Gloves": [2, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Plate Gloves": [2, ["Bleed Resist", "Fire Resist", "Ice Resist", "Electric. Resist", "Nature Resist",
                    "Poison Resist", "Disease Resist", "Slashing Resist", "Crushing Resist", "Piercing Resist"]],
        "Mail Hauberk": [3, ["Bleed Dmg", "Fire Dmg", "Ice Dmg", "Electric. Dmg", "Nature Dmg", "Poison Dmg",
                    "Disease Dmg", "Slashing Dmg", "Crushing Dmg", "Piercing Dmg", "Crit Dmg", "Crit Heal Amnt"]],
        "Plate Breastplate": [3, ["Bleed Dmg", "Fire Dmg", "Ice Dmg", "Electric. Dmg", "Nature Dmg", "Poison Dmg",
                    "Disease Dmg", "Slashing Dmg", "Crushing Dmg", "Piercing Dmg", "Crit Dmg", "Crit Heal Amnt"]],


        // LTW components
        "Stitched Leather": [1, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        "Leather Squares": [1, ["Bleed Resist" , "Fire Resist" , "Ice Resist" , "Electricity Resist" , "Nature Resist" , 
                    "Poison Resist" , "Disease Resist" , "Slashing Resist" , "Crushing Resist" , "Piercing Resist"]],
        "Hardened Leather Square": [1, ["Bleed Dmg" , "Fire Dmg" , "Ice Dmg" , "Electricity Dmg" , "Nature Dmg" , "Poison Dmg" , 
                    "Disease Dmg" , "Slashing Dmg" , "Crushing Dmg" , "Piercing Dmg" , "Crit Dmg" , "Crit Heal Amount"]],
        "Bow String": [2, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        "Enarmes": [2, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        "Weapon Grip": [1, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Atk Power" , "Supp Power"]],
        // LTW gear
        "Leather Boots": [2, ["Bleed Resist" , "Fire Resist" , "Ice Resist" , "Electricity Resist" , "Nature Resist" , 
                    "Poison Resist" , "Disease Resist" , "Slashing Resist" , "Crushing Resist" , "Piercing Resist"]],
        "Leather Cap": [3, ["Bleed Resist" , "Fire Resist" , "Ice Resist" , "Electricity Resist" , "Nature Resist" , 
                    "Poison Resist" , "Disease Resist" , "Slashing Resist" , "Crushing Resist" , "Piercing Resist"]],
        "Leather Gloves": [2, ["Bleed Resist" , "Fire Resist" , "Ice Resist" , "Electricity Resist" , "Nature Resist" , 
                    "Poison Resist" , "Disease Resist" , "Slashing Resist" , "Crushing Resist" , "Piercing Resist"]],
        "Leather Tunic": [3, ["Bleed Dmg" , "Fire Dmg" , "Ice Dmg" , "Electricity Dmg" , "Nature Dmg" , "Poison Dmg" , 
                    "Disease Dmg" , "Slashing Dmg" , "Crushing Dmg" , "Piercing Dmg" , "Crit Dmg" , "Crit Heal Amount"]],
        
    }

    var item_stats_special = {
        // WPN
        // Weapons
        "1H Axe": [5, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                   "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                   "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Dagger": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                   "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                   "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "1H Mace": [5, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                    1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                    "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                    "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Throwing Hammer": [5, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                            1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Pistol": [5, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Rapier": [5, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Short Sword": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Sickle": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Shield: Small": [2, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                            "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                            "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                            "Element. Resist/Stamina", "Organ. Resist/Stamina"],
                          2, "Enarmes", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                            "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                            "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"],
                          2, "Shield Base", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                            "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                            "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                            "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                            "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],  
        "Shield: Medium": [2, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                            "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                            "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                            "Element. Resist/Stamina", "Organ. Resist/Stamina"],
                           2, "Enarmes", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                            "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                            "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"],
                           3, "Shield Base", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                            "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                            "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                            "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                            "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],  
        "Shield: Large": [2, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                            "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                            "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                            "Element. Resist/Stamina", "Organ. Resist/Stamina"],
                          2, "Enarmes", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                            "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                            "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"],
                          4, "Shield Base", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                            "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                            "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                            "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                            "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],  
        // Components
        "Blade Rivets": [1,["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Shield Covering": [2, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                        "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                        "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                        "Element. Resist/Stamina", "Organ. Resist/Stamina"]],
        // 1H components
        "1H Weapon Blade": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "1H Weapon Crossguard": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "1H Weapon Head": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "1H Weapon Pommel": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "1H Weapon Hilt": [3, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                           1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                           "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                           "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "1H Weapon Shaft: Short": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg", "Stamina/Atk Ppower", "Stamina/Supp Power"]],
        // 2H components
        "2H Blade Rivets: Great": [2,["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "2H Great Weapon Crossguard": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "2H Great Weapon Pommel": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "2H Weapon Blade: Great": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "2H Weapon Head: Great": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "2H Weapon Shaft: Medium": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg", "Stamina/Atk Ppower", "Stamina/Supp Power"]],
        "2H Weapon Hilt: Great": [4, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        2, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        // Ranged components        
        "Arcane Actuator": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Casting Aperture": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Mana Impeller": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Frostcasting Enclosure": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                                   1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Meta-Magical Conducter": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Pistol Barrel": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Pistol Pins": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Pistol Hammer and Frizzen": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Pistol Trigger": [1, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Pistol Body": [2, ["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        1, "Weapon Grip", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],

        "Plank": [1, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],

        // WOO
        "Composite Wood Plank": [1, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Shield Base: Small": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Shield Base: Medium": [3, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Shield Base: Large": [4, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Book Casing": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        2, "Stitched Leather", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Book Chapter": [1, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        1, "Planks", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Book Clasp": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Bound Chapters": [3, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        3, "Planks", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Bow Rest": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Bow Sight": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Bow Riser": [4, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        2, "Stitched Leather" , ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Limbs: Bow": [4, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Limbs: Staff": [2, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        2, "Weapon Grip" , ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Staff Head": [3, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Staff Heel": [4, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Book": [3, ["Fervor: Electrical Resist", "Indulgence: Crushing Resist", "Redemption: Slashing Resist",
                        "Absolution: Piercing Resist", "Sin: Fire Resist"],
                        8, "Planks", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                        "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                        "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                        "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                        "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                        2, "Stitched Leather", ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Bow": [1, ["Compound", "Recurve", "Spellbound"],
                    8, "Planks", ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                    "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                    "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                    "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                    "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                    4, "Stitched Leather" , ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                    "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                    "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Mystical Staff": [9, ["Supp Power/Atk Power", "Stamina/Atk Ppower", "Stamina/Supp Power", "Fire Pen/Atk Power", 
                    "Electric Pen/Atk Power", "Nature Pen/Atk Power", 
                    "Slash Pen/Atk Power", "Crush Pen/Atk Power", "Pierce Pen/Atk Power", 
                    "Crit Strike/Atk Power", "Crit Dmg/Atk Power", 
                    "Crit Heal Chance/Supp Power", "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"],
                    2, "Weapon Grip" , ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                    "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                    "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],
        "Quiver": [1, ["Piercing", "Slashing", "Crushing", "Fire", "Ice"]],
                
        "Metal Bar": [1,["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Metal Section": [1, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                        "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                        "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                        "Element. Resist/Stamina", "Organ. Resist/Stamina"]],
        "Stitched Leather": [1, ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],       
        "Bow String": [2, ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],     
        "Enarmes": [2, ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],     
        "Weapon Grip": [1, ["Crit Strike/Crit Dmg" , "Crit Dmg/Atk Power" , "Crit Heal Chance/Supp Power" , 
                        "Crit Heal Amount/Supp Power" , "Crit Strike/Atk Power" , "Atk Power/Stamina" , "Atk Power/Stealth", 
                        "Supp Power/Stamina" , "Supp Power/Perception" , "Atk Power/Lifesteal" , "Supp Power/Atk Power"]],     

    }    
    
    var special_rarity = ['E', 'L']

    $("#crafting_discipline").click(function () {
        crafting_disc = $(this).val();
        items = crafting_disc_item[crafting_disc];

        $("#item-selector").html('');
        var r= $('<option value="" selected></option>');
        $("#item-selector").append(r);
        $("#item_name").val('');        
        
        for (let i = 0; i < items.length; i++){
            if (items[i].includes("divider")){
                divider_name = items[i].split(":")[1]
                var r=$('<option disabled>───────────────'+ divider_name +'───────────────</option>');
                $("#item-selector").append(r);
            } else {
                var r= $('<option value="' + items[i] + '">' + items[i] + '</option>');            
                $("#item-selector").append(r);
            }
            
        };
    });

    $('#item-selector').change(function(){
        item = $(this).val();

        var input = $("#item_name");
        input.val( item );

        // start to do stats
        // first make the stats area invis
        $("#stats-div").addClass("hidden-craft-div");

        
        if (Object.keys(item_stats_special).includes(item) && special_rarity.includes($("#rarity").val())){
            var item_stats = item_stats_special;
        } else {
            var item_stats = item_stats_norm;
        };

        try {            
            stats = item_stats[item][1];
            max_stats = item_stats[item][0];
        } catch(err) {
            stats = ''
            max_stats = 0
        };
        
        // if there are stats, make the stats area visible
        if (max_stats > 0) {$("#stats-div").removeClass("hidden-craft-div")};

        // check if we have a special item (e.g. weapon grip stat in weaponsmithing)
        var special_item = false;
        if (max_stats > 0 && item_stats[item].length > 2){
            special_item = true;
            special_item_name = item_stats[item][3];
            special_stats = item_stats[item][4];            
            special_max_stats = item_stats[item][2];
        };

        // two special items! (enarmes and shield base in ... weaponsmithing)
        var two_special_item = false;
        if (max_stats > 0 && item_stats[item].length > 5){
            two_special_item = true;
            two_special_item_name = item_stats[item][6];
            two_special_stats = item_stats[item][7];            
            two_special_max_stats = item_stats[item][5];
        };


        $("#stats-labeler").html('Put most important stats first. Crafter will decide any missing.\n'+
                                    'Stat count: 0/' + max_stats)           
        $("#stats-selector").html('');
        $("#stats").val('');
        
        for (let j = 0; j < stats.length; j++){
            // add button for each stat
            var s= $('<input type="button" value="' + stats[j] + '"/>');
            s.click(function () {
                var input = $("#stats");

                // check if we reached max no. of stats
                splitted_stats = input.val().split(",");
                if (splitted_stats.length >= max_stats + 1){} else {
                    $("#stats-display").text($("#stats-display").text() + stats[j] + ", ")
                    $("#stats-labeler").html('Put most important stats first. Crafter will decide any missing.\n'+
                                            'Stat count: '+ splitted_stats.length + '/' + max_stats)
                    input.val( input.val() + stats[j] + ", ");
                }
            });
            $("#stats-selector").append(s);
        };

        // add crafter's choice
        var s= $('<input type="button" value="Crafter\'s choice"/>');
        s.click(function () {
            var input = $("#stats");

            // check if we reached max no. of stats
            splitted_stats = input.val().split(",");
            if (splitted_stats.length >= max_stats + 1){
                $("#stats-labeler").html('Please select only ' + max_stats + ' stat(s).')
            } else {
                $("#stats-display").text($("#stats-display").text() + 'Crafter\'s choice, ')
                input.val( input.val() + 'Crafter\'s choice, ');
            }
        });
        $("#stats-selector").append(s);
    
        if (special_item == true){
            $("#stats-selector").append("<br><br><label id='special-stats-labeler'> Stat(s) for " +
                special_item_name + ". Put most important stats first. Crafter will decide any missing. \nStat count: 0/" + special_max_stats + "</label>");

            // add stat buttons
            for (let j = 0; j < special_stats.length; j++){
                // add button for each stat
                var s= $('<input type="button" value="' + special_item_name + ': ' + special_stats[j] + '"/>');
                s.click(function () {
                    var input = $("#stats");
    
                    // check if we reached max no. of stats
                    splitted_stats = input.val().split(" | ");
                    if (splitted_stats.length >= special_max_stats + 1){} else {
                        $("#stats-display").text($("#stats-display").text() + special_item_name + ": " + special_stats[j] + ", ")
                        $("#special-stats-labeler").html('Stat(s) for ' +
                        special_item_name + '. Put most important stats first. Crafter will decide any missing.' + 
                                            'Stat count: '+ splitted_stats.length + '/' + special_max_stats)
                        input.val(input.val() + special_item_name + ": " + special_stats[j] + " | ");
                    }
                });
                $("#stats-selector").append(s);
            };

            // add crafter's choice
            var s= $('<input type="button" value="' + special_item_name + ': Crafter\'s choice"/>');
            s.click(function () {
                var input = $("#stats");

                // check if we reached max no. of stats
                splitted_stats = input.val().split("|");
                if (splitted_stats.length >= special_max_stats + 1){} else {
                    $("#stats-display").text($("#stats-display").text() + special_item_name + ': Crafter\'s choice, ')
                    input.val( input.val() + special_item_name + ': Crafter\'s choice | ');
                }
            });
            $("#stats-selector").append(s);
        }

        if (two_special_item == true){
            $("#stats-selector").append("<br><br><label id='two-special-stats-labeler'> Stat(s) for " +
                two_special_item_name + ". Put most important stats first. Crafter will decide any missing. \nStat count: 0/" + two_special_max_stats + "</label>");
            // add stat buttons
            for (let j = 0; j < two_special_stats.length; j++){
                // add button for each stat
                var s= $('<input type="button" value="' + two_special_item_name + ': ' + two_special_stats[j] + '"/>');
                s.click(function () {
                    var input = $("#stats");
    
                    // check if we reached max no. of stats
                    splitted_stats = input.val().split(";");
                    if (splitted_stats.length >= two_special_max_stats + 1){} else {
                        $("#stats-display").text($("#stats-display").text() + two_special_item_name + ": " + two_special_stats[j] + ", ")
                        $("#two-special-stats-labeler").html('Stat(s) for ' +
                        two_special_item_name + '. Put most important stats first. Crafter will decide any missing.' + 
                                            'Stat count: '+ splitted_stats.length + '/' + two_special_max_stats)
                        input.val(input.val() + two_special_item_name + ": " + two_special_stats[j] + " ; ");
                    }
                });
                $("#stats-selector").append(s);
            };

            // add crafter's choice
            var s= $('<input type="button" value="' + two_special_item_name + ': Crafter\'s choice"/>');
            s.click(function () {
                var input = $("#stats");

                // check if we reached max no. of stats
                splitted_stats = input.val().split(";");
                if (splitted_stats.length >= two_special_max_stats + 1){} else {
                    $("#stats-display").text($("#stats-display").text() + two_special_item_name + ': Crafter\'s choice, ')
                    input.val( input.val() + two_special_item_name + ': Crafter\'s choice ; ');
                }
            });
            $("#stats-selector").append(s);
        }

        // add clear button for stats
        var s= $('<br><br><input type="button" value="Clear all stats"/>');
        s.click(function () {
            $("#stats").val('')
            $("#stats-display").text('')
            $("#stats-labeler").html('Put most important stats first. Crafter will decide any missing.\n'+
                                    'Stat count: 0/' + max_stats)
            
            if (special_item==true){
                $("#special-stats-labeler").html('Put most important stats first. Crafter will decide any missing.\n'+
                                 'Stat count: 0/' + special_max_stats)   
            }

            if (two_special_item==true){
                $("#two-special-stats-labeler").html('Put most important stats first. Crafter will decide any missing.\n'+
                                 'Stat count: 0/' + two_special_max_stats)   
            }
        });
        $("#stats-selector").append(s); 
        
    });           

    $("#crafting_discipline").trigger('select');

    $("#rarity").change(function(){
        $("#item-selector").find(":selected").trigger('change');
    });

    $("#validate").click(function() {
        failed = false;
        if ($("#requester").val() == ""){
            $("#requester-label").css("color", "red");
            failed = true;
        };

        if ($("#crafting_discipline").val() == ""){
            $("#crafting-disc-label").css("color", "red");
            failed = true;
        };

        if ($("#rarity").val() == ""){
            $("#rarity-label").css("color", "red");
            failed = true;
        };

        if ($("#item_name").val() == ""){
            $("#item-name-label").css("color", "red");
            failed = true;
        };

        if (!Number.isInteger($("#quantity").val()) && $("#quantity").val() < 1){
            $("#quantity-label").css("color", "red");
            failed = true;
        };

        if (failed){
            alert("Something is funky. Please check the highlighted fields.")
        } else {
            $("#stats").val($("#stats").val().replace(" | ", ", ").replace(" ; ", ", ") ) 
            // $("#requester").prop("readonly", "readonly");  
            // $("#crafting_discipline").prop("readonly", "readonly");  
            // $("#rarity").prop("readonly", "readonly");  
            // $("#item_name").prop("readonly", "readonly");  
            // $("#resouce_provided").prop("readonly", "readonly"); 
            // $("#quantity").prop("readonly", "readonly");  
            // $("#validate").prop("disabled", true);  
            // $("#submit-btn").prop("disabled", false);  
            $("#crafting-request-form").submit();
        };

    });

})(jQuery);