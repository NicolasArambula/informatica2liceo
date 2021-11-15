nombre = String(prompt("Cual es su nombre?"))
apellido = String(prompt("Cual es su Apellido?"))
edad1 = Number(prompt("Cual es su edad?"))
edad2= edad1+10;
document.getElementById("saludo").innerHTML = "Hola "+nombre+" "+ apellido;
document.getElementById("años").innerHTML = "En 10 años usted tendrá "+edad2+" años";