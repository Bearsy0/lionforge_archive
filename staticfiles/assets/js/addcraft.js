
(function($) {
    var crafting_disc_item = {
        "ALC": ["Empty Flask", "Philosopher's Solution", 
                "Transmutation Solution", "Ambrosia", "Philosopher's Stone", 
                "Potion of Exchange", "Potion of Sapho",  "Potion of Harvest: Beeswax", 
                "Potion of Harvest: Cutting Grit", "Potion of Harvest: Gem and Mineral", 
                "Potion of Plenty: Digging", "Potion of Plenty: Logging", 
                "Potion of Plenty: Mining", "Potion of Plenty: Quarrying", 
                "Potion of Plenty: Skinning", "Advanced Toxins"],
        "ARM": ["Metal Bar", "Metal Block", "Metal Buckles", "Metal Plates", 
                "Metal Rings", "Metal Rivets", "Metal Scales", "Metal Sheet", "Carbon", 
                "Coal", "Modify Weapon Mold", "Mail Boots", "Mail Coif", 
                "Mail Gloves","Mail Hauberk","Plate Boots","Plate Breastplate",
                "Plate Gloves","Plate Helmet", "Treated Steel"],
        "CKG": [],
        "JWL": [],
        "LTW": ["Stitched Leather", "Leather Squares", "Hardened Leather Squares", 
                "Leather Padding", "Treated Leather", "Lacing Sinew", "Bow String",
                "Enarmes", "Weapon Grip", "Leather Boots", "Leather Cap", 
                "Leather Gloves", "Leather Tunic"],        
        "WPN": ["1H Axe", "Dagger", "Frostcaster", "Great Axe", "Great Mace", "Great Sword",
                "Longsword", "1H Mace", "Throwing Hammer", "Pistol", "Rapier", "Short Sword",
                "Sickle", "Shield: Small", "Shield: Medium", "Shield: Large",
                "Horseshoes",

                "Metal Bar", "Metal Block", "Metal Buckles", "Metal Plates", 
                "Metal Rings", "Metal Rivets", "Metal Scales", "Metal Sheet", "Carbon", 
                "Coal", "Modify Weapon Mold", 

                "Blade Rivets", "Shield Covering", "1H Weapon Blade", "1H Weapon Crossguard",
                "1H Weapon Crossguard", "1H Weapon Hilt", "1H Weapon Pommel", 
                "1H Weapon Shaft: Short", "Arcane Actuator", "Arrowhead Bundle", "Casting Aperture",
                "Frostcasting Enclosure", "Mana Impeller", "Meta-Magical Conducter", 
                "Pistol Barrel", "Pistol Body", "Pistol Hammer and Frizzen", "Pistol Pins", "Pistol Trigger",
                "2H Blade Rivets: Great", "2H Great Weapon Crossguard", "2H Great Weapon Pommel",
                "2H Weapon Blade: Great", "2H Weapon Head: Great", "2H Weapon Hilt: Great",
                "2H Weapon Shaft: Medium"],
        "RUN": ["Advanced Picks", "Advanced Axes", "Advanced Hammers", 
                "Advanced Knives", "Advanced Shovels",
                "Intermediate Picks", "Intermediate Axes", "Intermediate Hammers",
                "Intermediate Knives","Intermediate Shovels",
                "Unmarked Runestone", 
                "Sigil: Axe", "Sigil: Binding", "Sigil: Hammer",
                "Sigil: Haste", "Sigil: Knife", "Sigil: Life", "Sigil: Mobility", 
                "Sigil: Pick", "Sigil: Shovel", "Sigil: Esoteric", 
                "Discipline: Major", "Runestone: Haste", "Runestone: Esoteric"],        
    };
    crafting_disc_item['BKS'] = [...new Set( crafting_disc_item["ARM"].concat(crafting_disc_item["WPN"]))]

    var item_stats_norm = {
        "Blade Rivets": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "Shield Covering": [2, ["Physical Resist", "Elemental Resist", "Organic Resist", 
                        "Attack Power", "Support Power"]],
        "1H Weapon Blade": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Crossguard": [1, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Head": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Pommel": [2, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"]],
        "1H Weapon Hilt": [3, ["Supp. Power", "Fire Pen", "Ice Pen", "Electric Pen",
                        "Nature Pen", "Slash Pen", "Crush Pen", "Pierce Pen",
                        "Crit Strike", "Crit Dmg", "Crit Heal Chance", "Crit Heal Amnt"],
                           1, "Weapon Grip", ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                        "Crit Strike" , "Atk Power" , "Supp Power"]],
          
                // "1H Weapon Shaft: Short", "Arcane Actuator", "Arrowhead Bundle", "Casting Aperture",
                // "Frostcasting Enclosure", "Mana Impeller", "Meta-Magical Conducter", 
                // "Pistol Barrel", "Pistol Body", "Pistol Hammer and Frizzen", "Pistol Pins", "Pistol Trigger",
                // "2H Blade Rivets: Great", "2H Great Weapon Crossguard", "2H Great Weapon Pommel",
                // "2H Weapon Blade: Great", "2H Weapon Head: Great", "2H Weapon Hilt: Great",
                // "2H Weapon Shaft: Medium"

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
                            
        "Philosopher's Stone": [2, ["Dexterity", "Spirit", "Intellect", "Strength", "Constitution"]],
        "Advanced Toxins": [1, ["Potent Poison", "Advanced Poison", "Poison"]],

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
        "Stitched Leather": [1, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Leather Squares": [1, ["Bleed Resist" , "Fire Resist" , "Ice Resist" , "Electricity Resist" , "Nature Resist" , 
                    "Poison Resist" , "Disease Resist" , "Slashing Resist" , "Crushing Resist" , "Piercing Resist"]],
        "Hardened Leather Square": [1, ["Bleed Dmg" , "Fire Dmg" , "Ice Dmg" , "Electricity Dmg" , "Nature Dmg" , "Poison Dmg" , 
                    "Disease Dmg" , "Slashing Dmg" , "Crushing Dmg" , "Piercing Dmg" , "Crit Dmg" , "Crit Heal Amount"]],
        "Bow String": [2, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Crit Strike" , "Atk Power" , "Supp Power"]],
        "Enarmes": [2, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Crit Strike" , "Atk Power" , "Supp Power"]],

        "Weapon Grip": [1, ["Crit Strike" , "Crit Dmg" , "Crit Heal Chance" , "Crit Heal Amnt" , 
                    "Crit Strike" , "Atk Power" , "Supp Power"]],

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
        "Blade Rivets": [1,["Supp Power/Attack Power", "Fire Pen/Attack Power", "Ice Pen/Attack Power", "Electric Pen/Attack Power",
                        "Nature Pen/Attack Power", "Slash Pen/Attack Power", "Crush Pen/Attack Power", "Pierce Pen/Attack Power",
                        "Crit Strike/Attack Power", "Crit Dmg/Attack Power", "Crit Heal Chance/Supp Power", 
                        "Crit Heal Amnt/Supp Power", "Crit Strike/Crit Dmg"]],
        "Shield Covering": [2, ["Phys. Resist/Attack Power", "Element. Resist/Attack Power", "Organ. Resist/Attack Power", 
                        "Phys. Resist/Supp Power", "Element. Resist/Supp Power", "Organ. Resist/Supp Power",          
                        "Attack Power/Stamina", "Supp Power/Stamina", "Phys. Resist/Stamina",
                        "Element. Resist/Stamina", "Organ. Resist/Stamina"]],
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
            var r= $('<option value="' + items[i] + '">' + items[i] + '</option>');            
            $("#item-selector").append(r);
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
        if (max_stats > 0 && item_stats[item].length == 5){
            special_item = true;
            special_item_name = item_stats[item][3];
            special_stats = item_stats[item][4];            
            special_max_stats = item_stats[item][2];
        };

        $("#stats-labeler").html('Select up to ' + max_stats + ' stat(s). Put most important stats first. If left blank, crafter will decide.')        
        $("#stats-selector").html('');
        $("#stats").val('');
        
        for (let j = 0; j < stats.length; j++){
            // add button for each stat
            var s= $('<input type="button" value="' + stats[j] + '"/>');
            s.click(function () {
                var input = $("#stats");

                // check if we reached max no. of stats
                splitted_stats = input.val().split(" > ");
                if (splitted_stats.length >= max_stats + 1){
                    $("#stats-labeler").html('Please select only ' + max_stats + ' stat(s). Put most important stats first.')
                } else {
                    input.val( input.val() + stats[j] + " > ");
                }
            });
            $("#stats-selector").append(s);
        };

        // add crafter's choice
        var s= $('<input type="button" value="Crafter\'s choice"/>');
        s.click(function () {
            var input = $("#stats");

            // check if we reached max no. of stats
            splitted_stats = input.val().split(">");
            if (splitted_stats.length >= max_stats + 1){
                $("#stats-labeler").html('Please select only ' + max_stats + ' stat(s).')
            } else {
                input.val( input.val() + 'Crafter\'s choice > ');
            }
        });
        $("#stats-selector").append(s);
    
        if (special_item == true){
            $("#stats-selector").append("<br><br><label id='special-stats-labeler'> Select up to " + special_max_stats + " stat(s) for " +
            special_item_name + ". Put most important stats first. If left blank, crafter will decide. </label>");
            // add stat buttons
            for (let j = 0; j < special_stats.length; j++){
                // add button for each stat
                var s= $('<input type="button" value="' + special_item_name + ': ' + special_stats[j] + '"/>');
                s.click(function () {
                    var input = $("#stats");
    
                    // check if we reached max no. of stats
                    splitted_stats = input.val().split(" | ");
                    if (splitted_stats.length >= special_max_stats + 1){
                        $("#special-stats-labeler").html('Please select only ' + special_max_stats + ' for ' +
                        special_item_name +'. Put most important stats first.')
                    } else {
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
                if (splitted_stats.length >= special_max_stats + 1){
                    $("#stats-labeler").html('Please select only ' + max_stats + ' stat(s).')
                } else {
                    input.val( input.val() + special_item_name + ': Crafter\'s choice | ');
                }
            });
            $("#stats-selector").append(s);
        }



        // add clear button for stats
        var s= $('<br><br><input type="button" value="Clear all stats"/>');
        s.click(function () {$("#stats").val('')});
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