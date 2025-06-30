import { personagens } from "./personagens.js";

// função para treinar força
export const uparForca = function (index) {

    switch (index) {

        case "goku":
            personagens[0].treinarForca()
            break
        case "ohma":
            personagens[1].treinarForca()
            break
        case "gojo":
            personagens[2].treinarForca()
            break
        case "jotaro":
            personagens[3].treinarForca()
            break
        case "mori":
            personagens[4].treinarForca()
            break
        default:
            break
    }
}
// treinar força
document.querySelector('#gokuForca').addEventListener('click', () => {
    uparForca("goku");
});

document.querySelector('#ohmaForca').addEventListener('click', () => {
    uparForca("ohma");
});

document.querySelector('#gojoForca').addEventListener('click', () => {
    uparForca("gojo");
});

document.querySelector('#jotaroForca').addEventListener('click', () => {
    uparForca("jotaro");
});

document.querySelector('#moriForca').addEventListener('click', () => {
    uparForca("mori");
});


// função para treinar agilidade
export const uparAgilidade = function (index) {

    switch (index) {

        case "goku":
            personagens[0].treinarAgilidade()
            break
        case "ohma":
            personagens[1].treinarAgilidade()
            break
        case "gojo":
            personagens[2].treinarAgilidade()
            break
        case "jotaro":
            personagens[3].treinarAgilidade()
            break
        case "mori":
            personagens[4].treinarAgilidade()
            break
        default:
            break
    }
}
// treinar agilidade
document.querySelector('#gokuAgilidade').addEventListener('click', () => {
    uparAgilidade("goku");
});

document.querySelector('#ohmaAgilidade').addEventListener('click', () => {
    uparAgilidade("ohma");
});

document.querySelector('#gojoAgilidade').addEventListener('click', () => {
    uparAgilidade("gojo");
});

document.querySelector('#jotaroAgilidade').addEventListener('click', () => {
    uparAgilidade("jotaro");
});

document.querySelector('#moriAgilidade').addEventListener('click', () => {
    uparAgilidade("mori");
});


// função para descansar (recuperar energia)
export const descansar = function (index) {

    switch (index) {

        case "goku":
            personagens[0].descansar()
            break
        case "ohma":
            personagens[1].descansar()
            break
        case "gojo":
            personagens[2].descansar()
            break
        case "jotaro":
            personagens[3].descansar()
            break
        case "mori":
            personagens[4].descansar()
            break
        default:
            break
    }
}
// descansar
document.querySelector('#gokuDescansar').addEventListener('click', () => {
    descansar("goku");
});

document.querySelector('#ohmaDescansar').addEventListener('click', () => {
    descansar("ohma");
});

document.querySelector('#gojoDescansar').addEventListener('click', () => {
    descansar("gojo");
});

document.querySelector('#jotaroDescansar').addEventListener('click', () => {
    descansar("jotaro");
});

document.querySelector('#moriDescansar').addEventListener('click', () => {
    descansar("mori");
});


// função para mostrar stats
export const mostrarStats = function () {

    // mostrar stats de força
    document.querySelector('#gokuForcaStats').innerHTML = personagens[0].forca
    document.querySelector('#ohmaForcaStats').innerHTML = personagens[1].forca
    document.querySelector('#gojoForcaStats').innerHTML = personagens[2].forca
    document.querySelector('#jotaroForcaStats').innerHTML = personagens[3].forca
    document.querySelector('#moriForcaStats').innerHTML = personagens[4].forca

    // mostrar stats de agilidade
    document.querySelector('#gokuAgilidadeStats').innerHTML = personagens[0].agilidade
    document.querySelector('#ohmaAgilidadeStats').innerHTML = personagens[1].agilidade
    document.querySelector('#gojoAgilidadeStats').innerHTML = personagens[2].agilidade
    document.querySelector('#jotaroAgilidadeStats').innerHTML = personagens[3].agilidade
    document.querySelector('#moriAgilidadeStats').innerHTML = personagens[4].agilidade

    // mostrar stats de energia
    document.querySelector('#gokuEnergiaStats').innerHTML = personagens[0].energia
    document.querySelector('#ohmaEnergiaStats').innerHTML = personagens[1].energia
    document.querySelector('#gojoEnergiaStats').innerHTML = personagens[2].energia
    document.querySelector('#jotaroEnergiaStats').innerHTML = personagens[3].energia
    document.querySelector('#moriEnergiaStats').innerHTML = personagens[4].energia
}

let contagem = 0

// função de cooldown
export const cooldown = function () {


    document.querySelector('#gokuCooldown').innerHTML

    document.querySelector('#ohmaCooldown').innerHTML

    document.querySelector('#gojoCooldown').innerHTML

    document.querySelector('#jotaroCooldown').innerHTML

    document.querySelector('#moriCooldown').innerHTML

}
