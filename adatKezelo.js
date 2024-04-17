export function tablazatRendez(lista,irany){
    /*adott mező (név) - adott mezőszerint rendezi a táblázatot. - akkor hívódik meg, ha a tablazat
    nev fejlecere kattintunk. Rendezzük a listát, megjelenitjuk újra a táblázatot.
   kattintunk */ 
    lista.sort(function(a,b){
        /*Szorgalmi: a.nev első betűjének karakterkódja alapján (ASCI)*/
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1*irany : -1*irany;
        /*pozitiv vagy negativ kell */
    });
    return lista;

}


/*Szorgalmi HF: lehessen rendezni kor szerint is!* *** tetszőleges mező szerint/ */
let rendezesNovekvoCsokkeno = true;
export function korSzerintRendez(lista) {
    lista.sort(function(a, b) {
        if (rendezesNovekvoCsokkeno == true) {
            return a.Kor - b.Kor;
        } else {
            return b.Kor - a.Kor;
        }
    });
    rendezesNovekvoCsokkeno = !rendezesNovekvoCsokkeno;

    return lista;
}


export function atalakitEkezet(szoveg){
    // szorgalmi házi feladat, hogy az Á betűt kicseréljük A-ra az É - E-re
    // replaceAll függvény btw
   

    // NEM JÓ MEGOLDÁS!
    // szoveg.forEach(element => {
    //     element.nev = element.nev
    //     .replaceAll("á", "a")
    //     .replaceAll("é", "e")
    //     .replaceAll("ú", "u")
    //     .replaceAll("ű", "u")
    //     .replaceAll("ü", "u")
    //     .replaceAll("ö", "o")
    //     .replaceAll("ő", "o")
    //     .replaceAll("ü", "u");
    // });

    // return szoveg;
}

export function szuresNevSzerint(lista, szurtSzoveg){
    /*szuresNevSzerint(lista, szurtSzoveg) - a szűrőben írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezejében az adott szó 
   Ezután megjelenítjük a szürt listát az oldalon.
   Akkor fog lefutni amikor megváltozik a szűrőmező tartalma.*/
   const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg)
   });
   console.log(SZURTLISTA);
   return SZURTLISTA;

}

export function sorTorles(lista,index){
    
    /*sorTorles(lista, id) - minden sor végén legyen egy kuka a sor indexével, erre a kukára kattintva töröljük az 
   adott sort listából, és újra megjelenítjük a táblázatot a módosult listával. */
    lista.splice(index, 1);
    return lista;

}
