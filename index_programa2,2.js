do {
    masa=Number(prompt("¿Cual es su masa (Kg)? \n introduzca solo datos validos"))
} while (Number.isNaN(masa)||masa<0);
do {
    estatura=Number(prompt("¿Cual es su estatura (m usando punto)? \nintroduzca solo datos validos"))
} while (Number.isNaN(estatura)||estatura<0);
IMC=masa/(estatura*estatura)
var clasificacion
if (IMC >= 40) {
    clasificacion="Obecidad de clase III"
}else{
    if (IMC >= 35) {
        clasificacion="Obecidad de clase II"
    }else{
        if (IMC >= 30) {
            clasificacion="Obecidad de clase I" 
        }else{
            if (IMC >= 25) {
                clasificacion="Preobesidad" 
            }else{
                if (IMC >= 18.5) {
                    clasificacion="Intervalo normal" 
                }else{
                    clasificacion="Insuficiencia ponderal" 
                }
            }
        }
    }
}
document.getElementById("texto").innerHTML="Usted esta en la clasificacion " + clasificacion