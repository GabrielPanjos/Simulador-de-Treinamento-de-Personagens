import { Personagem } from "./personagem.js"

// criando novo personagem
const Goku = new Personagem("Goku");
const Ohma = new Personagem("Ohma Tokita", 100, 120, 200);
const Gojo = new Personagem("Satoru Gojo", 600, 320, 220);
const Jotaro = new Personagem("Jotaro Kujo", 900, 1200, 300);
const Mori = new Personagem("Jin Mori", 2000, 2000, 10);

// criando lsita com personagens
export const personagens = [Goku, Ohma, Gojo, Jotaro, Mori];

