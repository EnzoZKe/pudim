//debugger
var pontos = 0
var upgrades = 0
var PontosAutomaticos = 0

presente()

function mais_pontos() {
    pontos++
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`

    var audio = document.getElementById("clickSoud")
    audio.pause();
    audio.currentTime = 0.3;
    audio.play()

    if (pontos >= 50) {
        document.getElementById("pudim50").innerHTML =
            `<button onclick="Upgrade(1,50)">Uprade: pudins +1 (50 pudins)</button>`
    } if (pontos >= 150) {
        document.getElementById("pudim150").innerHTML =
            `<button onclick="Upgrade(3,150)">Upgrade: pudins +3 (150 pudins)</button>`
    } if (pontos >= 450) {
        document.getElementById("pudim450").innerHTML =
            `<button onclick="Upgrade(5,450)">Upgrade: pudins +5 (450 pudins)</button>`
    } if (pontos >= 700) {
        document.getElementById("pudim700").innerHTML =
            `<button onclick="Upgrade(10,700)">Upgrade: pudins +10 (700 pudins)</button>`
    }
}

function Upgrade(Aumenta, Preco) {

    if (pontos >= Preco) {
        pontos -= Preco
        upgrades++
        PontosAutomaticos += Aumenta

        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

    } else {
        alert(`Hey, você precisa de ${Preco} pudins`)
    }
}

setInterval((mais_pontos) => {
    pontos += PontosAutomaticos
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`

    /*if (PontosAutomaticos >= 1) {
        var audio = document.getElementById("clickSoud")
        audio.pause();
        audio.currentTime = 0.3;
        audio.play()
    }*/

}, 500);

function presente() {

    setInterval((presente) => {
        var randNum = 100 * Math.random()
        console.log(randNum);

        if (randNum > 70) {
            document.getElementById("presente").innerHTML =
                `<img src="https://play-lh.googleusercontent.com/JFsWuM7yWlTxhoddyAA5eLAaS92hjJz5-hAa-82o8hMr2Kbeg8yDzIounvNSNCTYNg"
            alt="" class="pres" onclick="recebePresente()">`
        } else {
            document.getElementById("presente").innerHTML = ``
        }

    }, 15000);
}

function recebePresente(){
    alert("Parabéns, você conseguiu um presente!, pegue estes pudins!")
    if (upgrades <= 5) {
        pontos = pontos + 100
    } else {
        pontos = pontos + 400
    }
    document.getElementById("presente").innerHTML = ``
}
