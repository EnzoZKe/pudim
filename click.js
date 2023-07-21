//debugger
var pontos = 0
var upgrades = 0

function mais_pontos() {
    pontos++
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
}


function autoPonto() {
    if (pontos >= 50) {
        pontos = pontos - 50
        upgrades++
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

        setInterval((mais_pontos) => {
        pontos++
        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        }, 500);
    } else {
        alert("Hey, você precisa de 50 pudins")
    }
}

function autoPonto2() {
    if (pontos >= 150) {
        pontos = pontos - 150
        upgrades++
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

        setInterval((mais_pontos) => {
        pontos = pontos + 3
        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        }, 500);
    } else {
        alert("Hey, você precisa de 150 pudins")
    }
}

function autoPonto3() {
    if (pontos >= 450) {
        pontos = pontos - 450
        upgrades++
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

        setInterval((mais_pontos) => {
        pontos = pontos + 5
        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        }, 500);
    } else {
        alert("Hey, você precisa de 450 pudins")
    }
}

