let game = {
    galleon : 0,

    clickRate : 1,

    muggleGPS : 0.1,
    goblinGPS : 1,
    dobbyGPS: 8,
    hagridGPS: 47,
    trelawneyGPS: 260,
    lupinGPS: 1400,
    mcGonagallGPS: 7800,
    snapeGPS: 44000,
    ronGPS: 260000,
    hermioneGPS: 1600000,
    dumbledoreGPS: 10_000_000,
    harryGPS: 65_000_000,
    voldemortGPS: 430_000_000,

    // Costs
    muggleCost : 15,
    goblinCost : 100,
    dobbyCost: 1100,
    hagridCost: 12000,
    trelawneyCost: 130000,
    lupinCost: 1400000,
    mcGonagallCost: 20000000,
    snapeCost: 330000000,
    ronCost: 5100000000,
    hermioneCost: 75000000000,
    dumbledoreCost: 1000000000000,
    harryCost: 14000000000000,
    voldemortCost: 170000000000000,

    // Levels
    muggleLevel: 0,
    goblinLevel: 0,
    dobbyLevel: 0,
    hagridLevel: 0,
    trelawneyLevel: 0,
    lupinLevel: 0,
    mcGonagallLevel: 0,
    snapeLevel: 0,
    ronLevel: 0,
    hermioneLevel: 0,
    dumbledoreLevel: 0,
    harryLevel: 0,
    voldemortLevel: 0,

    totalWizards : 0,
}

let gameStats = {
    // galleons earned
    totalGalleonsClicked: 0,
    totalGalleonsEarned: 0,

    // time
    timeBegan : new Date().getTime() / 1000,
    currentTime : 0,
    totalTimePlayed : 0,

}

let upgradesBought = {
    // mouse
    plasticMouseBought: false,
    copperMouseBought: false,
    ironMouseBought: false,
    titaniumMouseBought: false,
    magicalMouseBought: false,

    // muggles
    lotionBought: false,
    workUniformBought: false,
    carBought: false,
    phoneBought: false,
    computerBought: false,

    // goblins
    pouchOfGalleonsBought: false,
    bankNoteBought: false,
    vaultKeyBought: false,
    goblinHelmetBought: false,
    ukrainianIronbellyBought: false,

    // dobbys
    puddingBought: false,
    bludgerBought: false,
    cookingPotBought: false,
    sockBought: false,
    freeElfBought: false,

    // hagrids
    blastEndedSkrewtBought: false,
    norbertBought: false,
    buckBeakBought: false,
    fluffyBought: false,
    arragogBought: false,

    // trelawneys
    beadedShawlsBought: false,
    crystalBallBought: false,
    lightningStruckTowerBought: false,
    theGrimBought: false,
    harrysProphecyBought: false,

    // Lupins
    moonBought: false,
    maraudersMapBought: false,
    wolfPatronusBought: false,
    wolfsbanePotionBought: false,
    prefectBadgeBought: false,

    // mcGonagall
    gingerNewtBought: false,
    spectaclesBought: false,
    headGirlBadgeBought: false,
    wizardsChessSetBought: false,
    tabbyCatBought: false,

    // snape
    lacewingFlysBought: false,
    potionStoreroomBought: false,
    felixFelicisBought: false,
    halfBloodPrincesBookBought: false,
    doePatronusBought: false,

    // ron
    spiderSprayBought: false,
    chocolateFrogCardBought: false,
    lovePotionBought: false,
    scabbersBought: false,
    deluminatorBought: false,

    // hermione
    polyjuicePotionBought: false,
    talesOfBeedleTheBardBought: false,
    magicallyEnlargedBagBought: false,
    crookshanksBought: false,
    timeTurnerBought: false,

    // dumbledore
    halfMoonGlassesBought: false,
    orderOfMerlin1stClassBought: false,
    pensiveBought: false,
    fawkesThePheonixBought: false,
    swordOfGryffindorBought: false,

    // harry
    pheonixTearsBought: false,
    theGobletOfFireBought: false,
    resurrectionStoneBought: false,
    elderWandBought: false,
    cloakOfInvisibilityBought: false,

    // voldemort
    tomRiddlesDiaryBought: false,
    gauntFamilyRingBought: false,
    slitherensLocketBought: false,
    ravenclawsDiademBought: false,
    hufflepuffsCupBought: false,
    naginiBought: false,
    harryPotterBought: false
}
let upgradesCost = {
    // mouse
    plasticMouseCost: 50_000,
    copperMouseCost: 5 * 10 ** 6,
    ironMouseCost: 500 * 10 ** 6,
    titaniumMouseCost: 50 * 10 ** 9,
    magicalMouseCost: 5 * 10 ** 12,


    // muggles
    lotionCost: 100,
    workUniformCost: 500,
    carCost: 10_000,
    phoneCost: 100_000,
    computerCost: 10 * 10 ** 6,

    // goblins
    pouchOfGalleonsCost: 1_000,
    bankNoteCost: 5_000,
    vaultKeyCost: 50_000,
    goblinHelmetCost: 5 * 10 ** 6,
    ukrainianIronbellyCost: 500 * 10 ** 6,

    // dobbys
    puddingCost: 11_000,
    bludgerCost: 55_000,
    cookingPotCost: 550_000,
    sockCost: 55 * 10 ** 6,
    freeElfCost: 5.5 * 10 ** 9,

    // hagrids
    blastEndedSkrewtCost: 120_000,
    norbertCost: 600_000,
    buckBeakCost: 6 * 10 ** 6,
    fluffyCost: 600 * 10 ** 6,
    arragogCost: 60 * 10 ** 9,

    // trelawnys
    beadedShawlsCost: 1.3 * 10 ** 6,
    crystalBallCost: 6.5 * 10 ** 6,
    lightningStruckTowerCost: 65 * 10 ** 6,
    theGrimCost: 6.5 * 10 ** 9,
    harrysProphecyCost: 650 * 10 ** 9,

    // lupins
    moonCost: 14 * 10 ** 6,
    maraudersMapCost: 70 * 10 ** 6,
    wolfPatronusCost: 700 * 10 ** 6,
    wolfsbanePotionCost: 70 * 10 ** 9,
    prefectBadgeCost: 7 * 10 ** 12,

    // mcGonagall
    gingerNewtCost: 200 * 10 ** 6,
    spectaclesCost: 10 ** 9,
    headGirlBadgeCost: 10 * 10 ** 9,
    wizardsChessSetCost: 10 ** 12,
    tabbyCatCost: 100 * 10 ** 12,

    // snape
    lacewingFlysCost: 3.3 * 10 ** 9,
    potionStoreroomCost: 16.5 * 10 ** 9,
    felixFelicisCost: 165 * 10 ** 9,
    halfBloodPrincesBookCost: 16.5 * 10 ** 12,
    doePatronusCost: 1.65 * 10 ** 15,

    // ron
    spiderSprayCost: 51 * 10 ** 9,
    chocolateFrogCardCost: 255 * 10 ** 9,
    lovePotionCost: 2.55 * 10 ** 12,
    scabbersCost: 255 * 10 ** 12,
    deluminatorCost: 25.5 * 10 ** 15,

    // hermione
    polyjuicePotionCost: 750 * 10 ** 9,
    talesOfBeedleTheBardCost: 3.75 * 10 ** 12,
    magicallyEnlargedBagCost: 37.5 * 10 ** 12,
    crookshanksCost: 3.75 * 10 ** 15,
    timeTurnerCost: 375 * 10 ** 15,

    // dumbledore
    halfMoonGlassesCost: 10 * 10 ** 12,
    orderOfMerlin1stClassCost: 50 * 10 ** 12,
    pensiveCost: 500 * 10 ** 12,
    fawkesThePheonixCost: 50 * 10 ** 15,
    swordOfGryffindorCost: 5 * 10 ** 18,

    // harry
    pheonixTearsCost: 140 * 10 ** 12,
    theGobletOfFireCost: 700 * 10 ** 12,
    resurrectionStoneCost: 7 * 10 ** 15,
    elderWandCost: 700 * 10 ** 15,
    cloakOfInvisibilityCost: 70 * 10 ** 18,

    // voldemort
    tomRiddlesDiaryCost: 1.7 * 10 ** 15,
    gauntFamilyRingCost: 8.5 * 10 ** 15,
    slitherensLocketCost: 85 * 10 ** 15,
    ravenclawsDiademCost: 8.5 * 10 ** 18,
    hufflepuffsCupCost: 850 * 10 ** 18,
    naginiCost: 85 * 10 ** 21,
    harryPotterCost: 85 * 10 ** 24,
}
let upgradesDescription = {
    // mouse
    plasticMouseDescription : "Clicking gains +1% of your CpS.",
    copperMouseDescription : "Clicking gains +1% of your CpS.",
    ironMouseDescription : "Clicking gains +1% of your CpS.",
    titaniumMouseDescription : "Clicking gains +1% of your CpS.",
    magicalMouseDescription : "Clicking gains +1% of your CpS.",

    // muggles
    lotionDescription : "The mouse and muggles are twice as efficient.",
    workUniformDescription: "The mouse and muggles are twice as efficient.",
    carDescription: "The mouse and muggles are twice as efficient.",
    phoneDescription: "The mouse and muggles gain +0.1 galleons for each non-muggle owned.",
    computerDescription: "Multiplies the gain from phone by 5.",

    // goblins
    pouchOfGalleonsDescription: "Goblins are twice as efficient.",
    bankNoteDescription: "Goblins are twice as efficient.",
    vaultKeyDescription: "Goblins are twice as efficient.",
    goblinHelmetDescription: "Goblins are twice as efficient.",
    ukrainianIronbellyDescription: "Goblins are twice as efficient.",

    // dobbys
    puddingDescription: "Dobbys are twice as efficient.",
    bludgerDescription: "Dobbys are twice as efficient.",
    cookingPotDescription: "Dobbys are twice as efficient.",
    sockDescription: "Dobbys are twice as efficient.",
    freeElfDescription: "Dobbys are twice as efficient.",

    // hagrids
    blastEndedSkrewtDescription: "Hagrids are twice as efficient.",
    norbertDescription: "Hagrids are twice as efficient.",
    buckBeakDescription: "Hagrids are twice as efficient.",
    fluffyDescription: "Hagrids are twice as efficient.",
    arragogDescription: "Hagrids are twice as efficient.",

    // trelawneys
    beadedShawlsDescription: "Trelawneys are twice as efficient.",
    crystalBallDescription: "Trelawneys are twice as efficient.",
    lightningStruckTowerDescription: "Trelawneys are twice as efficient.",
    theGrimDescription: "Trelawneys are twice as efficient.",
    harrysProphecyDescription: "Trelawneys are twice as efficient.",

    // lupins
    moonDescription: "Lupins are twice as efficient.",
    maraudersMapDescription: "Lupins are twice as efficient.",
    wolfPatronusDescription: "Lupins are twice as efficient.",
    wolfsbanePotionDescription: "Lupins are twice as efficient.",
    prefectBadgeDescription: "Lupins are twice as efficient.",

    // mcGonagall
    gingerNewtDescription: "McGonagalls are twice as efficient.",
    spectaclesDescription: "McGonagalls are twice as efficient.",
    headGirlBadgeDescription: "McGonagalls are twice as efficient.",
    wizardsChessSetDescription: "McGonagalls are twice as efficient.",
    tabbyCatDescription: "McGonagalls are twice as efficient.",

    // snape
    lacewingFlysDescription: "Snapes are twice as efficient.",
    potionStoreroomDescription: "Snapes are twice as efficient.",
    felixFelicisDescription: "Snapes are twice as efficient.",
    halfBloodPrincesBookDescription: "Snapes are twice as efficient.",
    doePatronusDescription: "Snapes are twice as efficient.",

    // ron
    spiderSprayDescription: "Rons are twice as efficient.",
    chocolateFrogCardDescription: "Rons are twice as efficient.",
    lovePotionDescription: "Rons are twice as efficient.",
    scabbersDescription: "Rons are twice as efficient.",
    deluminatorDescription: "Rons are twice as efficient.",

    // hermione
    polyjuicePotionDescription: "Hermiones are twice as efficient.",
    talesOfBeedleTheBardDescription: "Hermiones are twice as efficient.",
    magicallyEnlargedBagDescription: "Hermiones are twice as efficient.",
    crookshanksDescription: "Hermiones are twice as efficient.",
    timeTurnerDescription: "Hermiones are twice as efficient.",

    // dumbledore
    halfMoonGlassesDescription: "Dumbledores are twice as efficient.",
    orderOfMerlin1stClassDescription: "Dumbledores are twice as efficient.",
    pensiveDescription: "Dumbledores are twice as efficient.",
    fawkesThePheonixDescription: "Dumbledores are twice as efficient.",
    swordOfGryffindorDescription: "Dumbledores are twice as efficient.",

    // harry
    pheonixTearsDescription: "Harrys are twice as efficient.",
    theGobletOfFireDescription: "Harrys are twice as efficient.",
    resurrectionStoneDescription: "Harrys are twice as efficient.",
    elderWandDescription: "Harrys are twice as efficient.",
    cloakOfInvisibilityDescription: "Harrys are twice as efficient.",

    // voldemort
    tomRiddlesDiaryDescription: "Voldemorts are twice as efficient.",
    gauntFamilyRingDescription: "Voldemorts are twice as efficient.",
    slitherensLocketDescription: "Voldemorts are twice as efficient.",
    ravenclawsDiademDescription: "Voldemorts are twice as efficient.",
    hufflepuffsCupDescription: "Voldemorts are twice as efficient.",
    naginiDescription: "Voldemorts are twice as efficient.",
    harryPotterDescription: "Voldemorts are twice as efficient.",
}

let yMousePosition = 0
let xMousePosition = 0

window.addEventListener('resize',()=>{
    resizer()
})

document.addEventListener('mousemove',(event)=>{
    yMousePosition = event.clientY
    xMousePosition = event.clientX
})
document.getElementById('inputTitle').addEventListener('keypress',(event)=> {if(event.key === "Enter") changeTitle()})

let lastCallTimeGC = 0
let lastCallTimeGCNoise = 0
let lastCallSave = 0
let currentAudio = null
let checksCheated = 0

let currentTitleName = {title:'Galleon Clicker'}

// resizes the divs according to the window size
function resizer(){
    let gameStatsBar = document.getElementById('gameStatsBar')
    let gameDescription = document.getElementById('gameDescription')
    let StoreWizards = document.getElementById('StoreWizards')
    let middleDiv = document.getElementById('middleDiv')
    let upgrades = document.getElementById('middleUpgradeDiv')

    StoreWizards.style.height = window.innerHeight - 140 + 'px'

    gameStatsBar.style.height = window.innerHeight - 180 + 'px'
    gameStatsBar.style.width = window.innerWidth - 1055 +  'px'

    gameDescription.style.height = window.innerHeight - 180 + 'px'
    gameDescription.style.width = window.innerWidth - 1055 +  'px'

    middleDiv.style.width = window.innerWidth - 945 +  'px'
    middleDiv.style.height = window.innerHeight - 16 +  'px'

    upgrades.style.width = window.innerWidth - 945 +  'px'
    upgrades.style.height = window.innerHeight - 95 +  'px'
}

// Saves the game
function saveGame(){
    localStorage.setItem("game",JSON.stringify(game))
    localStorage.setItem("gameStats",JSON.stringify(gameStats))
    localStorage.setItem("upgradesBought",JSON.stringify(upgradesBought))
    localStorage.setItem("TitleName",JSON.stringify(currentTitleName))
}

// Opens a div that says that the game is being saved
function saveVerified(){
    let saveVerified = document.getElementById("saveVerified")
    saveVerified.style.display = 'block'


    saveGame()
    let currTime = Date.now()
    let timeSinceLastCall = currTime - lastCallSave
    if (timeSinceLastCall >= 1550){
        setTimeout(() => {
            saveGame();
            saveVerified.style.display = 'none'
        }, 1500)
        lastCallSave = currTime
    }
}

// opens the game stats bar
function openStatsBar(){
    let gameStatsBar = document.getElementById('gameStatsBar')
    let gameDescription = document.getElementById('gameDescription')
    let upgrades = document.getElementById('middleUpgradeDiv')
    let changeTitle = document.getElementById('changeTitle')

    if (gameStatsBar.style.display === 'block') {
        upgrades.style.display = 'block'
        closeStatsBar()
    }
    else {
        gameDescription.style.display = 'none'
        upgrades.style.display = 'none'
        changeTitle.style.display = 'none'
        gameStatsBar.style.display = 'block'
        update()
    }
}

// closes the game stats bar
function closeStatsBar(){
    let gameStatsBar = document.getElementById('gameStatsBar')
    let timePlayed = document.getElementById('timePlayed')
    let galleonsClicked = document.getElementById('galleonsClicked')
    let lifeTimeGalleons = document.getElementById('lifeTimeGalleons')

    gameStatsBar.style.display = 'none'
    timePlayed.innerHTML = ''
    galleonsClicked.innerHTML = ''
    lifeTimeGalleons.innerHTML = ''
}

// opens the game description bar
function openGameDescription(){
    let gameDescription = document.getElementById('gameDescription')
    let gameStatsBar = document.getElementById('gameStatsBar')
    let upgrades = document.getElementById('middleUpgradeDiv')
    let changeTitle = document.getElementById('changeTitle')

    if (gameDescription.style.display === 'block') {
        upgrades.style.display = 'block'
        closeGameDescription()
    }
    else {
        gameStatsBar.style.display = 'none'
        upgrades.style.display = 'none'
        changeTitle.style.display = 'none'
        gameDescription.style.display = 'block'
        update()
    }
}

// closes the game description bar
function closeGameDescription(){
    let gameDescription = document.getElementById('gameDescription')

    gameDescription.style.display = 'none'
}

// Opens a div that asks the user to verify that they want to reset
function verifyReset(){
    let verifyReset = document.getElementById('verifyReset')
    let changeTitle = document.getElementById('changeTitle')

    if (verifyReset.style.display === 'block') {
        verifyReset.style.display = 'none'
    }
    else {
        changeTitle.style.display = 'none'
        verifyReset.style.display = 'block'
    }
}

// Opens a div that asks the user to verify that they want to reset again
function verifyReset2(){
    let verifyReset = document.getElementById('verifyReset')
    let verifyReset2 = document.getElementById('verifyReset2')

    verifyReset.style.display = 'none'

    if (verifyReset2.style.display === 'block') {
        verifyReset2.style.display = 'none'
    }
    else {
        verifyReset2.style.display = 'block'
    }
}

// Opens a div that says that the game is being reset
function resetVerified(){
    let resetVerified = document.getElementById("resetVerified")

    document.getElementById('verifyReset').style.display = 'none'
    resetVerified.style.display = 'block'

    setTimeout(()=> {
        resetVerified.style.display = 'none'; localStorage.clear(); location.reload()
    },2000)
}

// opens the change title div
function openChangeTitle(){
    let changeTitle = document.getElementById('changeTitle')
    let inputTitle = document.getElementById('inputTitle')
    let verifyReset = document.getElementById('verifyReset')
    let verifyReset2 = document.getElementById('verifyReset2')


    if (changeTitle.style.display === 'block') {
        closeChangeTitle()
    }
    else {
        verifyReset.style.display = 'none'
        verifyReset2.style.display = 'none'
        changeTitle.style.display = 'block'
        inputTitle.focus()

        update()
    }
}

// closes the change title div
function closeChangeTitle(){
    let changeTitle = document.getElementById('changeTitle')
    let inputTitle = document.getElementById('inputTitle')

    changeTitle.style.display = 'none'
    inputTitle.value = ''
}

// when the page is refreshed the new title is loaded with it
function loadCurrentTitle(){
    document.getElementById('pageTitle').innerHTML = currentTitleName.title
    document.getElementById('editIcon').style.marginLeft = 280 + (currentTitleName.title.length * 6) + 'px'
}

// change name of clicker page title
function changeTitle(){
    let inputTitle = document.getElementById('inputTitle')
    let checkInputValue = ''
    for (let i in inputTitle.value){
        if (inputTitle.value[i] !== ' '){
            checkInputValue += inputTitle.value[i]
        }
    }
    if(checkInputValue !== '') {
        currentTitleName.title = (inputTitle.value).trim()
        inputTitle.value = ''
        document.getElementById('changeTitle').style.display = 'none'
        loadCurrentTitle()
        saveGame()
    }
}

// Updates the numbers in the game
function update(){
    document.getElementById('tabTitle').innerHTML = `${numberString(game.galleon)} ${currentTitleName.title}`
    document.getElementById('displayGalleonNumber').innerHTML = `${numberString(game.galleon)} Galleons`
    document.getElementById('galleonPerSecond').innerHTML = `${numberString(galleonPS())} PER SECOND`
    updateTime()
    updateWizards()
    upgradeBought()
    showUpgrade()


    let gameStatsBar = document.getElementById('gameStatsBar')
    let timePlayed = document.getElementById('timePlayed')
    let galleonsClicked = document.getElementById('galleonsClicked')
    let lifeTimeGalleons = document.getElementById('lifeTimeGalleons')
    if(gameStatsBar.style.display === 'block'){
        let totalTime = gameStats.totalTimePlayed

        totalTime = timeString(totalTime)

        timePlayed.innerHTML = `Total Time Played: ${totalTime}`
        galleonsClicked.innerHTML = `Total Galleons Clicked: ${numberString(Math.round(gameStats.totalGalleonsClicked * 10) / 10)}`
        lifeTimeGalleons.innerHTML = `Total Galleons Earned: ${numberString(Math.round(gameStats.totalGalleonsEarned * 10) / 10)}`
    }

    // checks if cheated
    if(gameStats.totalGalleonsEarned < game.galleon)
        game.galleon = checksCheated
    else
        checksCheated = game.galleon
}

// the time in seconds, mins, etc.
function timeString(time){
    let word = 'seconds'
    if (time >= 60) {
        time /= 60
        word = 'minutes'
        if (time >= 60){
            time /= 60
            word = 'hours'
            if (time >= 24){
                time /= 24
                word = 'days'
                if (time >= 365){
                    time /= 365
                    word = 'years'
                }
            }
        }
    }
    let timeWord = ''
    if (word === 'seconds' || word === 'minutes' || word === 'hours'){
        time = Math.round(time)
        timeWord += time + ' ' +  word
    }
    else {
        time = Math.floor(time * 10) / 10
        timeWord += numberString(time) + ' ' + word
    }

    if (time === 1)
        return timeWord.slice(0,-1)
    return timeWord
}

// converts number to string
function numberString(number){
    if (number < 10 ** 6)
        return number.toLocaleString()

    let numString = ['Million','Billion','Trillion','Quadrillion','Quintillion','Sextillion','Septillion','Octillion','Nonillion','Decillion']

    let word = ''
    for (let i = 0; i < numString.length; i++){
        if(number >= (10 ** (3 * (2 + i))))
            word = numString[i]
        else {
            number /= (10 ** (3 * (1 + i)))
            return (Math.floor(number * 10) / 10).toLocaleString() + ' ' + word
        }
    }
}

// updates the time played
function updateTime(){
    gameStats.currentTime = new Date().getTime() / 1000
    gameStats.totalTimePlayed = gameStats.currentTime - gameStats.timeBegan
}

// updates the wizards stats
function updateWizards(){
    let totalWizards = 0
    for(let key in game){
        if(key.indexOf('Cost') !== -1){
            document.getElementById(key).innerHTML = `${numberString(game[key])}`
            let wizard = document.getElementById(key.substring(0,key.indexOf('Cost')))
            if(game.galleon >= game[key]){
                wizard.style.opacity = '100%'

                document.getElementById(key).style.color = 'green'
            }
            else{
                document.getElementById(key).style.color = '#942121'
                wizard.style.opacity = '11%'
            }
        }
        else if(key.indexOf('Level') !== -1){
            document.getElementById(key).innerHTML = `${game[key].toLocaleString()}`
            totalWizards += game[key]
            let wizard = document.getElementById(key.substring(0,key.indexOf('Level')))

            if (game[key] >= 1){
                wizard.style.opacity = '100%'
            }
        }
    }
    game.totalWizards = totalWizards
}

// Adds currency every time the galleon is clicked
function galleonClicked(){
    let currTime = Date.now()
    let timeSinceLastCall = currTime - lastCallTimeGC

    // to make auto clicker less powerful
    if (timeSinceLastCall >= (100)) {
        let galleon = document.getElementById('galleonPicture')
        galleon.addEventListener('mousedown',()=>{clickingNoise()})
        galleon.addEventListener('mouseup',()=>{clickingNoise()})

        game.galleon += game.clickRate
        gameStats.totalGalleonsClicked += game.clickRate
        gameStats.totalGalleonsEarned += game.clickRate

        let numberFlying = document.createElement('div')
        numberFlying.style.position = 'fixed'
        numberFlying.style.zIndex = '1'
        numberFlying.style.fontSize = '20px'
        numberFlying.style.fontWeight = 'bold'
        numberFlying.style.transition = 'transform 2s, opacity 5s'
        numberFlying.style.cursor = 'pointer'
        numberFlying.style.pointerEvents = 'none'

        numberFlying.innerHTML = '+' + numberString(Math.round(game.clickRate * 10) / 10)

        let randomPosition = Math.random() * 12

        numberFlying.style.top = yMousePosition - 40 + 'px';
        numberFlying.style.left = xMousePosition - 17 - (numberFlying.innerHTML.length * 2.5) + randomPosition + 'px';

        document.getElementById('Galleon').prepend(numberFlying)

        setTimeout(() => {numberFlying.style.transform = 'translateY(-90px)';numberFlying.style.opacity = '0';}, 5)

        setTimeout(() => {numberFlying.remove()}, 2000)

        update()

        lastCallTimeGC = currTime
    }
}

// noise when something is clicked
function clickingNoise(){
    let currTime = Date.now()
    let timeSinceLastCall = currTime - lastCallTimeGCNoise

    if (timeSinceLastCall >= (1000 / 55)) {
        let randomize = Math.floor(Math.random() * 7 + 1)
        let sound = new Audio(`Sounds/click${randomize}.mp4`)
        sound.volume = .25
        sound.play()

        lastCallTimeGCNoise = currTime
    }
}

// changes the gps
function galleonPS(){
    let gps = 0
    for(let key in game){
        if (key.indexOf('GPS') !== -1){
            gps += game[key] * (game[key.slice(0,-3) + 'Level'])
        }
    }
    return gps
}

// Wizard functions when bought
function wizards(idName){
    let wizardName = idName.id
    let cost = `${wizardName}Cost`
    let level = `${wizardName}Level`

    if(game.galleon >= game[cost]) {
        let originalGPS = galleonPS()
        game.galleon -= game[cost]
        game[level] += 1
        game[cost] = Math.floor(game[cost] * 1.15)

        // change / add for every upgrade
        // mouse upgrade
        let mousesBought = 0
        if (upgradesBought.plasticMouseBought)
            mousesBought ++
        if (upgradesBought.copperMouseBought)
            mousesBought ++
        if (upgradesBought.ironMouseBought)
            mousesBought ++
        if (upgradesBought.titaniumMouseBought)
            mousesBought ++
        if (upgradesBought.magicalMouseBought)
            mousesBought ++

        game.clickRate -= (0.01 * mousesBought * originalGPS)
        game.clickRate += (0.01 * mousesBought * galleonPS())

        // muggle upgrade
        if(wizardName !== 'muggle'){
            if(upgradesBought.phoneBought){
                if (upgradesBought.computerBought){
                    game.clickRate += 0.5
                    game.muggleGPS += (0.5 / game.muggleLevel)
                }
                else{
                    game.clickRate += 0.1
                    game.muggleGPS += (0.1 / game.muggleLevel)
                }
            }
        }

        playWizardNoise(wizardName)
    }
    updateWizards()
    update()
}

// plays wizard sounds
function playWizardNoise(wizardName){
    let newAudio = new Audio(`Sounds/${wizardName}Sound.mp4`)
    if(currentAudio === null || currentAudio.paused) {
        newAudio.play()
        currentAudio = newAudio
    }
    else if(currentAudio.src !== newAudio.src){
        currentAudio.pause()
        newAudio.play()
        currentAudio = newAudio
    }
}

// updates wizard stats when you hover over a wizard
function wizardStatsUpdate(idName){
    // position
    let wizardStats = document.getElementById('wizardStats')
    let e = document.getElementById(idName.id)

    let xPosition = document.getElementById(idName.id).getBoundingClientRect().x - 425
    e.addEventListener('mousemove',()=>{
        wizardStats.style.top = yMousePosition - 80 + 'px';
        wizardStats.style.left = xPosition + 'px';
        wizardStats.style.display = 'block'
    })


    let wizardStatsLevel = document.getElementById('wizardStatsLevel')
    let wizardStatsGPSPer = document.getElementById('wizardStatsGPSPer')
    let wizardStatsGPSTotal = document.getElementById('wizardStatsGPSTotal')
    let wizardStatsTimeLeft = document.getElementById('wizardStatsTimeLeft')

    let wizardName = idName. id
    let level = game[wizardName + 'Level']
    let wizardGPS = game[wizardName + 'GPS']
    let timeLeftToBuy = 0

    // time left
    if(game.galleon < game[wizardName + 'Cost'])
        timeLeftToBuy = (game[wizardName + 'Cost'] - game.galleon)/ galleonPS()

    if(game.galleon < game[wizardName + 'Cost'] && galleonPS() === 0)
        wizardStatsTimeLeft.innerHTML = 'Time Left: N/A'

    else
        wizardStatsTimeLeft.innerHTML = `Time Left: ${timeString(timeLeftToBuy)}`

    wizardStatsLevel.innerHTML = `Owned: ${level}`

    wizardName = wizardName[0].toUpperCase() + wizardName.substring(1)
    let GPSPercent = ((wizardGPS * level) * 100 / galleonPS()).toFixed(1)

    // percentage of gps
    if (GPSPercent * 10 % 10 === 0) {
        GPSPercent -= '.0'
    }

    if (level > 0)
        wizardStatsGPSTotal.innerHTML = `${level} ${wizardName} produces ${numberString(wizardGPS * level)} per second (${GPSPercent}% of total GPS)\n`
    else
        wizardStatsGPSTotal.innerHTML = `${wizardName} is currently not producing any per second\n`

    wizardStatsGPSPer.innerHTML = `\nEach ${wizardName} produces ${numberString(Math.round(wizardGPS * 10) / 10)} per second\n`

}

// removes wizards stats once you un-hover from a wizard
function wizardStatsRemove(){
    let wizardStats = document.getElementById('wizardStats')
    wizardStats.style.display = 'none'
}

// removes the upgrades that were bought from the screen
function upgradeBought(){
    for(let key in upgradesBought) {
        if(upgradesBought[key]){
            document.getElementById(key.slice(0,-6)).style.display = 'none'
        }
    }
}

// shows the upgrade on the screen
function showUpgrade(){
    // mouse
    if(!upgradesBought['plasticMouseBought'] && gameStats.totalGalleonsClicked >= 1_000)
        document.getElementById('plasticMouse').style.display = 'inline-grid'
    if(!upgradesBought['copperMouseBought'] && gameStats.totalGalleonsClicked >= 100_000)
        document.getElementById('copperMouse').style.display = 'inline-grid'
    if(!upgradesBought['ironMouseBought'] && gameStats.totalGalleonsClicked >= 10 * 10 ** 6)
        document.getElementById('ironMouse').style.display = 'inline-grid'
    if(!upgradesBought['titaniumMouseBought'] && gameStats.totalGalleonsClicked >= 10 ** 9)
        document.getElementById('titaniumMouse').style.display = 'inline-grid'
    if(!upgradesBought['magicalMouseBought'] && gameStats.totalGalleonsClicked >= 100 * 10 ** 9)
        document.getElementById('magicalMouse').style.display = 'inline-grid'

    // muggles
    if(!upgradesBought['lotionBought'] && game.muggleLevel >= 1)
        document.getElementById('lotion').style.display = 'inline-grid'
    if(!upgradesBought['workUniformBought'] && game.muggleLevel >= 1)
        document.getElementById('workUniform').style.display = 'inline-grid'
    if(!upgradesBought['carBought'] && game.muggleLevel >= 10)
        document.getElementById('car').style.display = 'inline-grid'
    if(!upgradesBought['phoneBought'] && game.muggleLevel >= 25)
        document.getElementById('phone').style.display = 'inline-grid'
    if(!upgradesBought['computerBought'] && upgradesBought["phoneBought"] && game.muggleLevel >= 50)
        document.getElementById('computer').style.display = 'inline-grid'

    let n = 0
    let wizards = ['muggle', 'goblin', 'dobby', 'hagrid', 'trelawney', 'lupin', 'mcGonagall', 'snape', 'ron', 'hermione', 'dumbledore', 'harry', 'voldemort']
    for(let key in upgradesBought){
        if(n >= 70)
            break
        n++
        if(n > 10){
            if (n % 5 === 1){
                if(!upgradesBought[key] && game[wizards[Math.floor(n / 5) - 1] + 'Level'] >= 1)
                    document.getElementById(key.slice(0,-6)).style.display = 'inline-grid'
            }
            else if (n % 5 === 2){
                if(!upgradesBought[key] && game[wizards[Math.floor(n / 5) - 1] + 'Level'] >= 5)
                    document.getElementById(key.slice(0,-6)).style.display = 'inline-grid'
            }
            else if (n % 5 === 3){
                if(!upgradesBought[key] && game[wizards[Math.floor(n / 5) - 1] + 'Level'] >= 25)
                    document.getElementById(key.slice(0,-6)).style.display = 'inline-grid'
            }
            else if (n % 5 === 4){
                if(!upgradesBought[key] && game[wizards[Math.floor(n / 5) - 1] + 'Level'] >= 50)
                    document.getElementById(key.slice(0,-6)).style.display = 'inline-grid'
            }
            else if (n % 5 === 0){
                if(!upgradesBought[key] && game[wizards[Math.floor(n / 5) - 2] + 'Level'] >= 100)
                    document.getElementById(key.slice(0,-6)).style.display = 'inline-grid'
            }
        }
    }

    if(!upgradesBought['naginiBought'] && game.voldemortLevel >= 150)
        document.getElementById('nagini').style.display = 'inline-grid'
    if(!upgradesBought['harryPotterBought'] && game.voldemortLevel >= 200)
        document.getElementById('harryPotter').style.display = 'inline-grid'

}

// what happens when upgrade is bought
function buyUpgrade(idName) {
    let upgradeName = idName.id

    let nonMuggle = (game.totalWizards - game.muggleLevel)

    if(game.galleon >= upgradesCost[upgradeName + 'Cost']) {
        game.galleon -= upgradesCost[upgradeName + 'Cost']
        upgradesBought[upgradeName + 'Bought'] = true

        // mouse
        if (upgradeName === 'plasticMouse' || upgradeName === 'copperMouse' || upgradeName === 'ironMouse' || upgradeName === 'titaniumMouse' || upgradeName === 'magicalMouse') {
            game.clickRate += (0.01 * galleonPS())
        }

        // Muggles
        else if(upgradeName === 'lotion' || upgradeName === 'workUniform' || upgradeName === 'car'){
            let mousesBought = 0
            if (upgradesBought.plasticMouseBought)
                mousesBought ++
            if (upgradesBought.copperMouseBought)
                mousesBought ++
            if (upgradesBought.ironMouseBought)
                mousesBought ++
            if (upgradesBought.titaniumMouseBought)
                mousesBought ++
            if (upgradesBought.magicalMouseBought)
                mousesBought ++
            game.clickRate -= (0.01 * mousesBought * galleonPS())

            let muggleGainRate = 0
            if (upgradesBought.phoneBought) {
                if (upgradesBought.computerBought){
                    muggleGainRate = 5
                }
                else{
                    muggleGainRate = 1
                }
            }

            game.muggleGPS -= ((0.1 * nonMuggle * muggleGainRate) / game.muggleLevel)
            game.clickRate -= 0.1 * nonMuggle * muggleGainRate

            game.muggleGPS *= 2
            game.clickRate *= 2

            game.muggleGPS += ((0.1 * nonMuggle * muggleGainRate) / game.muggleLevel)
            game.clickRate += 0.1 * nonMuggle * muggleGainRate

            game.clickRate += (0.01 * mousesBought * galleonPS())
        }
        else if (upgradeName === 'phone'){
            game.muggleGPS += ((0.1 * nonMuggle) / game.muggleLevel) // for each muggle
            game.clickRate += 0.1 * nonMuggle
        }
        else if (upgradeName === 'computer'){
            game.clickRate -= 0.1 * nonMuggle
            game.clickRate += 0.1 * nonMuggle * 5

            game.muggleGPS -= ((0.1 * nonMuggle) / game.muggleLevel)
            game.muggleGPS += ((0.1 * nonMuggle * 5) / game.muggleLevel)
        }


        //Goblins are twice as efficient
        else if (upgradeName === 'pouchOfGalleons' || upgradeName === 'bankNote' || upgradeName === 'vaultKey' || upgradeName === 'goblinHelmet' || upgradeName === 'ukrainianIronbelly'){
            game.goblinGPS *= 2
        }

        //Dobbys are twice as efficient
        else if (upgradeName === 'pudding' || upgradeName === 'bludger' || upgradeName === 'cookingPot' || upgradeName === 'sock' || upgradeName === 'freeElf'){
            game.dobbyGPS *= 2
        }

        //Hagrids are twice as efficient
        else if (upgradeName === 'blastEndedSkrewt' || upgradeName === 'norbert' || upgradeName === 'buckBeak' || upgradeName === 'fluffy' || upgradeName === 'arragog'){
            game.hagridGPS *= 2
        }

        //Trelawneys are twice as efficient
        else if (upgradeName === 'beadedShawls' || upgradeName === 'crystalBall' || upgradeName === 'lightningStruckTower' || upgradeName === 'theGrim' || upgradeName === 'harrysProphecy'){
            game.trelawneyGPS *= 2
        }

        //Lupins are twice as efficient
        else if (upgradeName === 'moon' || upgradeName === 'maraudersMap' || upgradeName === 'wolfPatronus' || upgradeName === 'wolfsbanePotion' || upgradeName === 'prefectBadge'){
            game.lupinGPS *= 2
        }

        //McGonagalls are twice as efficient
        else if (upgradeName === 'gingerNewt' || upgradeName === 'spectacles' || upgradeName === 'headGirlBadge' || upgradeName === 'wizardsChessSet' || upgradeName === 'tabbyCat'){
            game.mcGonagallGPS *= 2
        }

        //Snapes are twice as efficient
        else if (upgradeName === 'lacewingFlys' || upgradeName === 'potionStoreroom' || upgradeName === 'felixFelicis' || upgradeName === 'halfBloodPrincesBook' || upgradeName === 'doePatronus'){
            game.snapeGPS *= 2
        }

        //Rons are twice as efficient
        else if (upgradeName === 'spiderSpray' || upgradeName === 'chocolateFrogCard' || upgradeName === 'lovePotion' || upgradeName === 'scabbers' || upgradeName === 'deluminator'){
            game.ronGPS *= 2
        }

        //Hermiones are twice as efficient
        else if (upgradeName === 'polyjuicePotion' || upgradeName === 'talesOfBeedleTheBard' || upgradeName === 'magicallyEnlargedBag' || upgradeName === 'crookshanks' || upgradeName === 'timeTurner'){
            game.hermioneGPS *= 2
        }

        //Dumbledores are twice as efficient
        else if (upgradeName === 'halfMoonGlasses' || upgradeName === 'orderOfMerlin1stClass' || upgradeName === 'pensive' || upgradeName === 'fawkesThePheonix' || upgradeName === 'swordOfGryffindor'){
            game.dumbledoreGPS *= 2
        }

        //Harrys are twice as efficient
        else if (upgradeName === 'pheonixTears' || upgradeName === 'theGobletOfFire' || upgradeName === 'resurrectionStone' || upgradeName === 'elderWand' || upgradeName === 'cloakOfInvisibility'){
            game.harryGPS *= 2
        }

        //Voldemorts are twice as efficient
        else if (upgradeName === 'tomRiddlesDiary' || upgradeName === 'gauntFamilyRing' || upgradeName === 'slitherensLocket' || upgradeName === 'ravenclawsDiadem' || upgradeName === 'hufflepuffsCup'){
            game.voldemortGPS *= 2
        }

        clickingNoise()
        update()
    }
}

// updates upgrade info when you hover over an upgrade
function upgradeInfoUpdate(idName){
    let upgradeName = idName.id
    let upgrade = document.getElementById('upgradeInfo')

    // position
    let e = document.getElementById(idName.id)

    let yPosition = document.getElementById(idName.id).getBoundingClientRect().y - 18
    e.addEventListener('mousemove',()=>{
        upgrade.style.top = yPosition - upgrade.offsetHeight + 'px';
        upgrade.style.left = xMousePosition - 180 + 'px';
        upgrade.style.display = 'block'
    })

    let upgradeTimeLeft = document.getElementById('upgradeTimeLeft')
    let upgradeTitle = document.getElementById('upgradeTitle')
    let upgradeDescription = document.getElementById('upgradeDescription')
    let upgradeCost = document.getElementById('upgradeCost')
    let timeLeftToBuy = 0

    if((Math.round(game.galleon * 10) / 10) >= upgradesCost[upgradeName + 'Cost'])
        document.getElementById('upgradeCost').style.color = 'green'
    else
        document.getElementById('upgradeCost').style.color = '#942121'


    // time left
    if(game.galleon < upgradesCost[upgradeName + 'Cost'] && galleonPS() > 0)
        timeLeftToBuy = (upgradesCost[upgradeName + 'Cost'] - game.galleon)/ galleonPS()

    if(game.galleon < upgradesCost[upgradeName + 'Cost'] && galleonPS() === 0)
        upgradeTimeLeft.innerHTML = 'Time Left: N/A'

    else
        upgradeTimeLeft.innerHTML = `Time Left: ${timeString(timeLeftToBuy)}`

    // upgrade title
    let spacedUpgradeName = upgradeName[0].toUpperCase()
    for(let i = 1; i < upgradeName.length; i++){
        if (upgradeName[i] === upgradeName[i].toUpperCase()){
            spacedUpgradeName += ' '
        }
        spacedUpgradeName += upgradeName[i]
    }
    let updatedUpgradeName = ''
    for(let i = 0; i < spacedUpgradeName.length;i++){
        if(spacedUpgradeName.charAt(i+1) === ' ' && spacedUpgradeName.charAt(i) === 's'){
            updatedUpgradeName += "'s"
        }
        else {
            updatedUpgradeName += spacedUpgradeName.charAt(i)
        }
    }

    if (upgradeName === 'wizardsChessSet')
        updatedUpgradeName = spacedUpgradeName

    upgradeTitle.innerHTML = updatedUpgradeName

    // upgrade description
    upgradeDescription.innerHTML = upgradesDescription[upgradeName + 'Description']

    // upgrade cost
    upgradeCost.innerHTML = numberString(upgradesCost[upgradeName + 'Cost'])
}

// removes upgrade info once you un-hover from an upgrade
function upgradeInfoRemove(){
    let upgrade = document.getElementById('upgradeInfo')
    upgrade.style.display = 'none'
}

// self calling function
(()=> {
    // save game items
    if (localStorage.getItem("game") == null)
        localStorage.setItem("game", JSON.stringify(game))
    else
        game = JSON.parse(localStorage.getItem("game"))

    // save upgrade items
    if (localStorage.getItem("upgradesBought") == null)
        localStorage.setItem("upgradesBought", JSON.stringify(upgradesBought))
    else
        upgradesBought = JSON.parse(localStorage.getItem("upgradesBought"))

    // save game stats
    if (localStorage.getItem("gameStats") == null)
        localStorage.setItem("gameStats", JSON.stringify(gameStats))
    else
        gameStats = JSON.parse(localStorage.getItem("gameStats"))

    // save title name
    if (localStorage.getItem("TitleName") == null)
        localStorage.setItem("TitleName", JSON.stringify(currentTitleName))
    else
        currentTitleName = JSON.parse(localStorage.getItem("TitleName"))

    loadCurrentTitle()
    update()
    saveGame()
    resizer()

    // startup sound
    let sound = document.getElementById('startupSound')
    sound.volume = .7


    setInterval(() => {
        game.galleon += galleonPS()
        gameStats.totalGalleonsEarned += galleonPS()
        update()
    }, 1000)
    setInterval(() => {
        saveVerified()
    }, 30000)
})()
