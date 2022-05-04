let juego = Number(prompt("DI UN NUMERO DEL 1 AL 100"))
let resultado = 63

if(juego===resultado)
{
    alert ("GANASTE EL JUEGO")
}
else{
    alert("INTENTA OTRA VEZ")
}


while(juego!==resultado){
    let juego = Number(prompt("DI UN NUMERO DEL 1 AL 100"))
    if(juego===resultado)
{
    alert ("GANASTE EL JUEGO")
    stop
}
else{
    alert("INTENTA OTRA VEZ")
}
}