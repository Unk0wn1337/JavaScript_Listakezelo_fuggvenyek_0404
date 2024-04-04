import { emberekLISTA  } from "./adat.js";


for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element);
}

emberekLISTA.forEach((element,index) => {
    
});

// Szűrjük férfiakra a listánkat

const FERFIAK = emberekLISTA.filter(function(emberekLISTA){
    return !emberekLISTA.Kor === true; //ez az érték mindig logikiai változó true/false
});
const FERFIAK2 = emberekLISTA.filter(function(emberekLISTA){
    return !emberekLISTA.Kor === true; //ez az érték mindig logikiai változó true/false
});
console.log(FERFIAK);

// azokat az embereket szeretném akik 20 évnél fiatalabbak
const FIATALOK = emberekLISTA.filter(function(emberekLISTA){
    return emberekLISTA.Kor < 20;
});
console.log(FIATALOK);

// 10 évnél idősebb férfiak 
const FERFIAK10FELETT = emberekLISTA.filter((ember) => {
    return ember.Kor> 10 && !ember.nem
});

// rendezzük fordított sorrendbe kor szerint az embereinket

emberekLISTA.sort(function(e1,e2){
    return e2.Kor-e1.Kor

});

console.log(emberekLISTA);


// véletelen sorrendű rendezés, kor szerinbt keverés

emberekLISTA.sort(function(e1,e2){
    // véletlen számot generálok -0.5 és + 0,5 között
    return Math.random()*-0,5
});
console.log(emberekLISTA);

