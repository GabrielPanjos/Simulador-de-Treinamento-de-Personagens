import { mostrarStats, cooldown } from "./controle.js"

// criando classe Personagem e seus atributos
export class Personagem {
    constructor(nome, forca = 10, agilidade = 10, energia = 100, energiaTotal = energia) {
        this.nome = nome;
        this.forca = forca;
        this.agilidade = agilidade;
        this.energia = energia;
        this.energiaTotal = energiaTotal;
        this.treinando = false
    }

    // método para treinar força
    treinarForca() {


        if (this.treinando) {
            alert(`${this.nome} ja está em treinamento. Espere o tempo acabar.`)

        } else {

            if ((this.energia - 5) < 0) {
                alert(`${this.nome} não consegue mais treinar. Energia esgotada`)
            } else {
                const cooldown = setInterval(() => {
                    this.treinando = true

                    if ((this.energia - 5) < 0) {
                        this.treinando = false

                        alert(`${this.nome} terminou seu treino de força.`)
                        clearInterval(cooldown)
                    } else {
                        this.forca += 1
                        this.energia -= 5
                    }
                    mostrarStats()
                }, 2000);
            }
        }

    }

    // método para treinar agilidade
    treinarAgilidade() {

        if (this.treinando) {
            alert(`${this.nome} ja está em treinamento. Espere o tempo acabar.`)
        } else {

            if ((this.energia - 3) < 0) {
                alert(`${this.nome} não consegue mais treinar. Energia esgotada`)
            } else {
                const cooldown = setInterval(() => {
                    this.treinando = true

                    if ((this.energia - 3) < 0) {
                        this.treinando = false

                        alert(`${this.nome} terminou seu treino de agilidade.`)
                        clearInterval(cooldown)
                    } else {
                        this.agilidade += 1
                        this.energia -= 3
                    }
                    mostrarStats()
                }, 3000);
            }
        }

    }

    // método para descansar (recuperar energia)
    descansar() {

        if (this.treinando) {
            alert(`${this.nome} ja está em treinamento. Espere o tempo acabar.`)
        } else {
            const cooldown = setInterval(() => {
                this.treinando = true

                if ((this.energia + 20) >= this.energiaTotal) {
                    this.treinando = false

                    alert(`${this.nome} terminou seu descanso. Pronto para treinar`)
                    this.energia = this.energiaTotal
                    clearInterval(cooldown)
                } else {
                    this.energia += 20
                }
                mostrarStats()
            }, 5000);
        }
    }

}

