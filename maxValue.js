var business = 650;
var minister = 750;
var sochib = 550;

if(business > minister){
    if(business > sochib){
        console.log("Business is bigger");
    }else{
        console.log("Sochib is bigger");
    }
}
else{
    if(minister > sochib){
        console.log("Minister is bigger");
    }else{
        console.log("Sochib is bigger");
    }
}

// Other rule: (js)
var max = Math.max(business, minister, sochib);
console.log(max);