import { emberekLISTA  } from "./adat.js";
import { tablazatOsszealit, megjelenites } from "./fuggvenyek.js";
import { szuresNevSzerint, tablazatRendez, sorTorles, korSzerintRendez, atalakitEkezet } from "./adatKezelo.js";
import { adatokListaba } from "./urlapKezelo.js";

/* jelenítsük meg az adatainkat egy tábláztatban az adatok div-ben
 az urlap divben pedig legyen egy űrlap amivel ilyen adatokat tudunk a táblázatba belerakni

1. ha a táblázat fejlécére kattintunk, akkor azon mező szerint tudjunk rendezni a táblázatot
2. tudjunk törölni a táblázat adott sorát
3. legyen egy szűrőmező, ahova beírva szavakat, tudunk szűrni, név szerint. 

Milyen függvények kellenek?


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
let nevIrany = 1;
init(emberekLISTA);
adatokListaba(emberekLISTA);
export function init(lista){
    let txt = tablazatOsszealit(lista);
    megjelenites(txt);
    console.log(nevIrany);
    nevRendezEsemeny(lista);
    korRendezEsemeny(lista)
    sorTorlesEsemeny();
}

/*adott mezőszerint rendezi a táblázatot. - akkor hívódik meg, ha a tablazat
nev fejlecere kattintunk. Rendezzük a listát, megjelenitjuk újra a táblázatot.
kattintunk */
function nevRendezEsemeny(lista){
    const nevELEM = $(".adatok th").eq(0); /*első fejléc th elem */
    nevELEM.on("click",function(){
        const LISTA = tablazatRendez(lista,nevIrany);
        console.log(LISTA);
        nevIrany*=(-1);
        init(LISTA);        
    });
}
function korRendezEsemeny(lista){
    const KOR_ELEM = $(".adatok th").eq(1);
    KOR_ELEM.on("click", function() {
        const LISTA = korSzerintRendez(lista);
        init(LISTA);
    })
}


/*szűrőben írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezejében az adott szó 
   Ezután megjelenítjük a szürt listát az oldalon.
   Akkor fog lefutni amikor megváltozik a szűrőmező tartalma.*/
function nevSzuresEsemeny(){
    const SZURO_ELEM = $("#szNev");
    SZURO_ELEM.on("keyup", function(){
        let szuroSzoveg = SZURO_ELEM.val();
        const LISTA = szuresNevSzerint(emberekLISTA,szuroSzoveg);
        init(LISTA);
    });
}
/*szorgalmi: szűrés más mezők alapján*/


nevSzuresEsemeny();

function sorTorlesEsemeny(){
     /*sorTorles(lista, id) - minden sor végén legyen egy kuka a sor indexével, erre a kukára kattintva töröljük az 
      adott sort listából, és újra megjelenítjük a táblázatot a módosult listával. */
    const kukaELEM = $(".kuka");
    kukaELEM.on("click", function(){
        let index = event.target.id; /*Aktuális kuka indexe*/
        const lista = sorTorles(emberekLISTA,index);
        init(lista);
    });
}



