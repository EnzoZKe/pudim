//debugger
var pontos = 0
var upgrades = 0
var PontosAutomaticos = 0

function mais_pontos() {
    pontos++
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`

    var audio = document.getElementById("clickSoud")
    audio.pause();
    audio.currentTime = 0.3;
    audio.play()
}

function Upgrade(Aumenta,Preco) {

    if (pontos >= Preco) {
        pontos -= Preco
        upgrades++
        PontosAutomaticos += Aumenta

        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

    }else {
        alert(`Hey, você precisa de ${Preco} pudins`)
    }
}

setInterval((mais_pontos) => {
    pontos += PontosAutomaticos
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`

    if (PontosAutomaticos >= 1) {
        var audio = document.getElementById("clickSoud")
        audio.pause();
        audio.currentTime = 0.3;
        audio.play()
    }

}, 500);
