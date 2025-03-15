let ids = [
    {name: "lotion", h:"90", w:"95"}, // 100
    {name: "workUniform",h:"75",w:"60"}, // 500
    {name: "pouchOfGalleons",h:"80",w:"85"}, // 1_000
    {name: "bankNote",h:"80",w:"85"}, // 5_000
    {name: "car",h:"35",w:"70"}, // 10_000
    {name: "pudding",h:"70",w:"95"}, // 11_000
    {name: "vaultKey",h:"50",w:"75"}, // 50_000
    {name: "plasticMouse",h:"62",w:"75"}, // 50_000
    {name: "bludger",h:"50",w:"50"}, // 55_000
    {name: "phone",h:"60",w:"80"}, // 100_000
    {name: "blastEndedSkrewt",h:"65",w:"95"}, // 120_000
    {name: "cookingPot",h:"70",w:"75"}, // 550_000
    {name: "norbert",h:"45",w:"80"}, // 600_000
    {name: "beadedShawls",h:"60",w:"65"}, // 1.3 * 10 ** 6
    {name: "goblinHelmet",h:"65",w:"125"}, // 5 * 10 ** 6
    {name: "copperMouse",h:"65",w:"75"}, // 5 * 10 ** 6
    {name: "buckBeak",h:"65",w:"105"}, // 6 * 10 ** 6
    {name: "crystalBall",h:"75",w:"80"}, // 6.5 * 10 ** 6
    {name: "computer",h:"65",w:"70"}, // 10 * 10 ** 6
    {name: "prefectBadge",h:"60",w:"55"}, // 14 * 10 ** 6
    {name: "sock",h:"75",w:"80"}, // 55 * 10 ** 6
    {name: "lightningStruckTower",h:"75",w:"60"}, // 65 * 10 ** 6
    {name: "maraudersMap",h:"50",w:"75"}, // 70 * 10 ** 6
    {name: "gingerNewt",h:"70",w:"75"}, // 200 * 10 ** 6
    {name: "ukrainianIronbelly",h:"35",w:"83"}, // 500 * 10 ** 6
    {name: "ironMouse",h:"65",w:"75"}, // 500 * 10 ** 6
    {name: "fluffy",h:"65",w:"70"}, // 600 * 10 ** 6
    {name: "wolfsbanePotion",h:"85",w:"65"}, // 700 * 10 ** 6
    {name: "spectacles",h:"70",w:"75"}, // 10 ** 9
    {name: "lacewingFlys",h:"70",w:"80"}, // 3.3 * 10 ** 9
    {name: "freeElf",h:"70",w:"55"}, // 5.5 * 10 ** 9
    {name: "theGrim",h:"60",w:"73"}, // 6.5 * 10 ** 9
    {name: "headGirlBadge",h:"85",w:"90"}, // 10 * 10 ** 9
    {name: "potionStoreroom",h:"65",w:"55"}, // 16.5 * 10 ** 9
    {name: "titaniumMouse",h:"65",w:"75"}, // 50 * 10 ** 9
    {name: "spiderSpray",h:"65",w:"70"}, // 51 * 10 ** 9
    {name: "arragog",h:"70",w:"85"}, // 60 * 10 ** 9
    {name: "wolfPatronus",h:"55",w:"85"}, // 70 * 10 ** 9
    {name: "felixFelicis",h:"75",w:"75"}, // 165 * 10 ** 9
    {name: "chocolateFrogCard",h:"60",w:"65"}, // 255 * 10 ** 9
    {name: "harrysProphecy",h:"64",w:"85"}, // 650 * 10 ** 9
    {name: "polyjuicePotion",h:"95",w:"100"}, // 750 * 10 ** 9
    {name: "wizardsChessSet",h:"80",w:"85"}, // 10 ** 12
    {name: "lovePotion",h:"60",w:"65"}, // 2.55 * 10 ** 12
    {name: "talesOfBeedleTheBard",h:"90",w:"95"}, // 3.75 * 10 ** 12
    {name: "magicalMouse",h:"60",w:"70"}, // 5 * 10 ** 12
    {name: "moon",h:"60",w:"110"}, // 7 * 10 ** 12
    {name: "halfMoonGlasses",h:"45",w:"80"}, // 10 * 10 ** 12
    {name: "halfBloodPrincesBook",h:"65",w:"50"}, // 16.5 * 10 ** 12
    {name: "magicallyEnlargedBag",h:"80",w:"65"}, // 37.5 * 10 ** 12
    {name: "orderOfMerlin1stClass",h:"70",w:"95"}, // 50 * 10 ** 12
    {name: "tabbyCat",h:"65",w:"90"}, // 100 * 10 ** 12
    {name: "pheonixTears",h:"75",w:"85"}, // 140 * 10 ** 12
    {name: "scabbers",h:"70",w:"75"}, // 255 * 10 ** 12
    {name: "pensive",h:"65",w:"70"}, // 500 * 10 ** 12
    {name: "theGobletOfFire",h:"50",w:"115"}, // 700 * 10 ** 12
    {name: "doePatronus",h:"85",w:"70"}, // 1.65 * 10 ** 15
    {name: "tomRiddlesDiary",h:"75",w:"80"}, // 1.7 * 10 ** 15
    {name: "crookshanks",h:"90",w:"95"}, // 3.75 * 10 ** 15
    {name: "resurrectionStone",h:"90",w:"150"}, // 7 * 10 ** 15
    {name: "gauntFamilyRing",h:"65",w:"65"}, // 8.5 * 10 ** 15
    {name: "deluminator",h:"75",w:"90"}, // 25.5 * 10 ** 15
    {name: "fawkesThePheonix",h:"60",w:"65"}, // 50 * 10 ** 15
    {name: "slitherensLocket",h:"75",w:"80"}, // 85 * 10 ** 15
    {name: "timeTurner",h:"75",w:"80"}, // 375 * 10 ** 15
    {name: "elderWand",h:"60",w:"65"}, // 700 * 10 ** 15
    {name: "swordOfGryffindor",h:"60",w:"65"}, // 5 * 10 ** 18
    {name: "ravenclawsDiadem",h:"75",w:"80"}, // 8.5 * 10 ** 18
    {name: "cloakOfInvisibility",h:"65",w:"45"}, // 70 * 10 ** 18
    {name: "hufflepuffsCup",h:"60",w:"65"}, // 850 * 10 ** 18
    {name: "nagini",h:"50",w:"70"}, // 85 * 10 ** 21
    {name: "harryPotter",h:"70",w:"58"} // 85 * 10 ** 24
];

function upgradeImages(){
    ids.forEach(function(ids){
        let upperCaseId = ids.name[0].toUpperCase() +  ids.name.substring(1)
        document.writeln('<div class="Upgrades"  id="' + ids.name + '" onclick="buyUpgrade(this)" onmousemove="upgradeInfoUpdate(this)" onmouseleave="upgradeInfoRemove()" style="display: none">');
        document.writeln('  <img src="Pictures/Upgrades/' + upperCaseId + '.png" height="' + ids.h + '" width ="' + ids.w + '" alt="">');
        document.writeln('</div>');
    });
}

upgradeImages();