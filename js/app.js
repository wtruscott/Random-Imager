const cards = [
    'url(https://www.trustedtarot.com/img/cards/the-fool.png)',
    'url(https://www.trustedtarot.com/img/cards/the-magician.png)',
    'url(https://www.trustedtarot.com/img/cards/the-high-priestess.png)',
    'url(https://www.trustedtarot.com/img/cards/the-empress.png)',
    'url(https://www.trustedtarot.com/img/cards/the-emperor.png)',
    'url(https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'url(https://www.trustedtarot.com/img/cards/the-chariot.png)',
    'url(https://www.trustedtarot.com/img/cards/strength.png)',
    'url(https://media1.tenor.com/images/8c409e6f39acc1bd796e8031747f19ad/tenor.gif?itemid=17029825)',
    'url(https://www.trustedtarot.com/img/cards/the-hermit.png)',
    'url(https://www.trustedtarot.com/img/cards/wheel-of-fortune.png)',
    'url(https://www.trustedtarot.com/img/cards/justice.png)',
    'url(https://www.trustedtarot.com/img/cards/the-hanged-man.png)',
    'url(https://www.trustedtarot.com/img/cards/death.png)',
    'url(https://www.trustedtarot.com/img/cards/temperance.png)',
    'url(https://www.trustedtarot.com/img/cards/the-tower.png)',
    'url(https://www.trustedtarot.com/img/cards/the-moon.png)'
  ]

const $container = $("main")

const $div = $("<div>")

$div.text("Add random image")

console.log($div)

$container.append($div)

$div.addClass("blankCard")

$div.on("click", (event) => {
    const newCard = () => {
        return cards[Math.floor(Math.random()*cards.length)];
    }  
    const $divNew = $("<div>")
    $divNew.addClass("tarot")
    $divNew.css("background-image", newCard())
    $container.append($divNew)
})
