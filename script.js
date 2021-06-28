// Javascript "Klasės" 

// 1. Susikurti klasę "Namas".  

// Klasės kintamieji:
// miestas - tekstas,
// pastatymo data - datos formatas, 
// adresas - tekstas,
// laiptinių skaičius - masyvas, turintis tiek elementų, kiek yra laiptinių. Pvz: [1,2,3,4]
// butų skaičius - masyvas, turintis tiek elementų, kiek butų yra laiptinėje.Pvz: [20, 22, 19, 13]
// bendras butų skaičius - suskaičiuojamas automatiškai. Apskaičiavimui susikurti statinį metodą. 

// 2. Susikurti klasę "Butas".
// Klasės kintamieji:
// numeris - skaičius,
// kambarių skaičius - kiek kambarių turi butas,
// gyventojų skaičius bute - skaičius, 

// Klasės metodai:
// info() - išveda visą informaciją apie butą. 

// 3. Susikurti "Namas" objektų masyvą.
// Masyva sudaro 5 objektai sukurti pagal klasę. 
// Duomenis užpildyti savo nuožiūrą. 

// 4. Masyvą išvesti į console.log. 

// Papildoma: Vieną iš klasės "Namas" objektų "pastatyti".  

// T.y. Pasinaudojant informacija, kiek yra laiptinių ir butų, sudėlioti <div> elementus kubeliais. Pvz:
// Namas turi dvi laiptines [1,2].
// Vienoje laiptinėje yra 4 butai, kitoje 5 butai. Div sudeliojami taip: http://prntscr.com/179gyiv 

// Kiekvieno kvadratėlio viduje atvaizduojamas buto numeris.

"use strict";

//klasė namas

class Namas {

    constructor(miestas, pastatymoData, adresas, laiptiniuSkaicius, butuSkaicius) {
        this.mietas = miestas;
        this.pastatymoData = pastatymoData;
        this.adresas = adresas;
        this.laiptiniuSkaicius = laiptiniuSkaicius;
        this.butuSkaicius = butuSkaicius;
    }

    static bendrasButuSkaicius(a) {

        let bendrasButuSkaicius = 0;
        for (let i in a) {
            bendrasButuSkaicius = bendrasButuSkaicius + a[i];
        }
        return bendrasButuSkaicius;

    }
}

const _date = new Date();
let laiptiniuMasyvas = [1, 2, 3, 4, 5];
let butuMasyvas = [20, 15, 10, 10, 5];
let Namukas1 = new Namas("Vilnius", _date, "Perkūnkiemio 19", laiptiniuMasyvas, butuMasyvas);

console.log(Namukas1);
//išvedame bendrą butų skaičių naudodami statinę funkcija su reikšme a, kuria perduodam kaip butų masyvą
console.log("Bendras butų skaičius: ", Namas.bendrasButuSkaicius(Namukas1.butuSkaicius));

//klasė butas

class Butas {

    constructor(numeris, kambariuSkaicius, gyventojuSkaicius) {
        this.numeris = numeris;
        this.kambariuSkaicius = kambariuSkaicius;
        this.gyventojuSkaicius = gyventojuSkaicius;

    }

    info() {
        console.log("Buto numeris: ", this.numeris);
        console.log("Kambarių skaičius: ", this.kambariuSkaicius);
        console.log("Gyventojų skaičius: ", this.gyventojuSkaicius);
    }
}

let Butukas1 = new Butas(1, 3, 5);
//paleidžiam Buto info metodą, kuris generuoja tris console.log su info apie butą
Butukas1.info();


//padarom 5 namų masyvą
let namuMasyvas = [];
namuMasyvas.push(new Namas("Ignalina", 1945, "Lenino g. 13", [1, 2, 3, 4, 5, 6], [20, 20, 20, 20, 20, 15]));
namuMasyvas.push(new Namas("Kaunas", 1975, "Krabų g. 19", [1, 2, 3, 4, 5], [20, 20, 30, 20, 20]));
namuMasyvas.push(new Namas("Šiauliai", 1992, "Marozų g. 5", [1, 2, 3], [10, 20, 20]));
namuMasyvas.push(new Namas("Klaipėda", 1985, "Luko Gaučo g. 16", [1, 2, 3, 4, 5], [30, 30, 25, 25, 20]));
namuMasyvas.push(new Namas("Radviliškis", 1896, "Garvežių g. 2", [1, 2], [5, 5]));


console.log(namuMasyvas);




