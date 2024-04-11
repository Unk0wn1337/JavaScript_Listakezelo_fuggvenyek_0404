import { emberekLISTA  } from "./adat.js";

/* jelenítsük meg az adatainkat egy tábláztatban az adatok div-ben
 az urlap divben pedig legyen egy űrlap amivel ilyen adatokat tudunk a táblázatba belerakni

1. ha a táblázat fejlécére kattintunk, akkor azon mező szerint tudjunk rendezni a táblázatot
2. tudjunk törölni a táblázat adott sorát
3. legyen egy szűrőmező, ahova beírva szavakat, tudunk szűrni, név szerint. 

Milyen függvények kellenek?

1. tablazatbaOsszealit(lista) -> txt - összeálítja a html kódot szöveges formában,
   minden sor végén legyen egy kuka!
2. megjelenites(txt)->nincs - megjeleniti egy html szöveget egy html elemben
3. tablazatbaTesz(lista) - összszedi az az űrlap elemeket, és hozzáfűzi a listához, majd 
   megjeleníti a újra a táblázatot. akkor hívódik meg, ha a Submit gombra kattintunk

4. tablazatRendez(lista) - adott mezőszerint rendezi a táblázatot. - akkor hívódik meg, ha a tablazat
    nev fejlecere kattintunk. Rendezzük a listát, megjelenitjuk újra a táblázatot.
   kattintunk 
   
5. sorTorles(lista, id) - minden sor végén legyen egy kuka a sor indexével, erre a kukára kattintva töröljük az 
   adott sort listából, és újra megjelenítjük a táblázatot a módosult listával. 

6. szuresNevSzerint(lista, szurtSzoveg) - a szűrőben írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezejében az adott szó 
   Ezután megjelenítjük a szürt listát az oldalon.
   Akkor fog lefutni amikor megváltozik a szűrőmező tartalma.
*/
main();

function main(){
    feladat();

}


function feladat(){
    tablazatOsszealit(emberekLISTA);
}

function tablazatOsszealit(lista){
    let segedValtozo = `<table>`
    segedValtozo += `<tr>`
    segedValtozo += `<th>nev</th>`
    segedValtozo += `<th>kor</th>`
    segedValtozo += `<th>nem</th>`
    segedValtozo += `</tr>`
    for (let index = 0; index < lista.length; index++) {
        segedValtozo += `<tr>`
        
        segedValtozo += `</tr>`
        
    }
}