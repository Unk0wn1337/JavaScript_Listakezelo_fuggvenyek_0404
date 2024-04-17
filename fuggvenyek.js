export function tablazatOsszealit(lista){
    let txt = `<table class="table" "table-striped">`;
    txt += `<tr>`;
    /*Szorgalmi, hogy a fejléc kulcsait is ciklussal írd ki*/
    for (const key in lista[0]) {
        txt += `<th>${key}</th>`
    }
    txt += `</tr>`;

    lista.forEach((element,i) => {
        txt +=  `<tr>`
        for (const key in element) /*Objektumokon tudok végig iterálni*/{
            txt  += `<td>${element[key]}</td>`;
        }
        txt  += `<td id=${i} class="kuka">${"🗑️"}</td>`;
        txt += `</tr>`;
    });
    txt += "</table>";
    return txt;

}

export function megjelenites(txt){
    /*megjelenites(txt)->nincs - megjeleniti egy html szöveget egy html elemben*/
    const ADATOK_ELEM = $(".adatok");
    ADATOK_ELEM.html(txt);

}