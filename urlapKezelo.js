import { init } from "./main.js";

export function adatokListaba(lista){
    /*
    összegyűjti az űrlapról az adatokat
     */
   
    let adat = 
    {
        nev:"",
        Kor:0,
        nem:true
    };
    /*megfogjuk az űrlapmezőket*/
  
    // console.log(NEV_ELEM);
     /* 
    és beleteszi a listába ha rákattintunk a a hozzáaad gombra
    */
    const SUBMIT_ELEM = $("#submit");
    SUBMIT_ELEM.on("click",function(){
        /*submit gombról levesszük az default eseménykezelőt*/
        event.preventDefault();
        const NEV_ELEM = $("#nev");
        const KOR_ELEM = $("#kor");
        const NEM_ELEM = $("input[name='nem']:checked");
        adat={
            nev:NEV_ELEM.val(),
            kor:KOR_ELEM.val(),
            nem:NEM_ELEM.val() === "false" ? false : true
        }  
        const VALID_ELEMEK = $(".valid-feedback");      
        console.log(VALID_ELEMEK.eq(0).css("display"));
        if(VALID_ELEMEK.eq(0).css("display") === "block" && VALID_ELEMEK.eq(0).css){
            lista.push(adat);
            init(lista)
            
        }
        console.log(adat);
        console.log(lista);
    })
}