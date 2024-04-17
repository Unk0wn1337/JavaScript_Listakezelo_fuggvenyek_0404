export function tablazatOsszealit(lista){
    let txt = `<table class="table" "table-striped">`;
    txt += `<tr>`;
    txt += `<th>nev</th>`;
    txt += `<th>kor</th>`;
    txt += `<th>nem</th>`;
    txt += `<th></th>`
    txt += `</tr>`;

    /*Szorgalmi, hogy a fejléc kulcsait is ciklussal írd ki*/
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