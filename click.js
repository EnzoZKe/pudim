//debugger
var pontos = 0
var upgrades = 0
var PontosAutomaticos = 0

presente()

var UpgradesValores = [
    //Esse primeiro corresponde ao Upgrade de 50 pontos
    {
        Texto: "Uprade: pudins +", // Aqui você quarda o texto padrão que ficara no botão
        Custo: 50, //Aqui vocÊ quardara o custo do upgrade
        Aumenta: 1, // Criei esta baseada no seu codigo, essa parte quardara quantos pudins cada upgrade aumenta
        //Deixei assim para caso vocÊ queira fazer a quantidade de pudins aumentar tambem apos comprar o upgrade
        //Exemplo: 50 => +1 pudin // 100 => +2 pidins e por aivai

        id: "pudim50" // esta parte quarda o id onde o botão sera colocado, fiz isso só pra otimiza
    },
    {
        Texto: "Uprade: pudins +",
        Custo: 150, 
        Aumenta: 3, 
        id: "pudim150" 
    },
    {
        Texto: "Uprade: pudins +",
        Custo: 450, 
        Aumenta: 5, 
        id: "pudim450" 
    },
    {
        Texto: "Uprade: pudins +",
        Custo: 700, 
        Aumenta: 10, 
        id: "pudim700" 
    },


]

function mais_pontos() {
    pontos++
    document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`

    var audio = document.getElementById("clickSoud")
    audio.pause();
    audio.currentTime = 0.3;
    audio.play()

    // sando UpgradesValores[id].Custo, você pode continuar fazendo o upgrade só aparecerse a pessoa tiver pontos 
    //suficientes e ainda manter o aumento do custo

    
}

function Upgrade(Aumenta, Preco, index) {

    if (pontos >= Preco) {
        pontos -= Preco
        upgrades++
        PontosAutomaticos += Aumenta

        //Aqui aumentamos o valor do preço somando 5 ao valor atual
        UpgradesValores[index].Custo = UpgradesValores[index].Custo + 50 / 100 * UpgradesValores[index].Custo

        document.getElementById("mostraPontos").innerHTML = `pudins: ${pontos}`
        document.getElementById("upgrades").innerHTML = `você tem ${upgrades} upgrade`

    } else {
        alert(`Hey, você precisa de ${Preco} pudins`)
    }
}

function checarUpgrades(){
    UpgradesValores.forEach((upgrade,i) => {
        //Fazemos um loop por todos os upgrades pra sempre cria eles com o valor e o aumento certo
        if (pontos >= upgrade.Custo) {

            //Aqui colocaresmos o testo padrão + o quanto aumenta + o custo
    
            //ao criar o upgrade passamos tambem o index I que é a posição dele no objeto dos upgrades que es la em cima
            document.getElementById(upgrade.id).innerHTML =
                `<button onclick="
            
                    Upgrade(${upgrade.Aumenta},${upgrade.Custo},${i})">

                    ${upgrade.Texto}${upgrade.Aumenta} (${upgrade.Custo} pudins)
                </button>`
        } else {
            // coloquei este else para que ele suma com o upgrade se a pessoa não tiver pontos para compralo
            document.getElementById(upgrade.id).innerHTML = ""
        }
    })
}

setInterval((mais_pontos) => {

    checarUpgrades()//Crieie esta função pra organiza o codigo, e a coloquei aqui para que o programa sempre
    //confira se o usuario tem os pontos necessarios

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

    //Coloquei esse - 100 para que o rpesente não seja criado fora da tela
    var TamanhoTelaX = window.innerWidth - 100;
    var TamanhoTelaY = window.innerHeight - 100;

    var PosicaoAleatoriaX = Math.random()* TamanhoTelaX
    var PosicaoAleatoriaY = Math.random()* TamanhoTelaY

    console.log(PosicaoAleatoriaX,PosicaoAleatoriaY);

    // para ficar mais justo criei um tempo aleatorio kkk
    var Tempo = parseInt(Math.random() * 30000)

    document.getElementById("presente").innerHTML =
    `<img src="imgs/presente.png" alt="" class="pres" onclick="recebePresente()">`

    //Aqui auteramos o estilo css dele mudnado as posições da esquerda e topo
    document.getElementById("presente").style.left = `${PosicaoAleatoriaX}px`
    document.getElementById("presente").style.top = `${PosicaoAleatoriaY}px`

    //o set time out é um delay ele aguardara o tempo aleatorio e depois chamara a função para criar o presente
    setTimeout(() => {
        presente()
    }, Tempo);
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
