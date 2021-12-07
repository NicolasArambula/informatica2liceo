
do{
    nota1=Number(prompt("¿Cual es su primera nota?\nIndique sus notas usando solo números positivos validos"))
}while (Number.isNaN(nota1)||nota1>10||nota1<0)
do{
    nota2=Number(prompt("¿Cual es su segunda nota?\nIndique sus notas usando solo números positivos validos"))
}while (Number.isNaN(nota2)||nota2>10||nota2<0)
do{
    nota3=Number(prompt("¿Cual es su tercera nota?\nIndique sus notas usando solo números positivos validos"))
}while (Number.isNaN(nota3)||nota3>10||nota3<0)
    promedio= (nota1+nota2+nota3)/3
    let urlFeliz ="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"
    let urlTriste="https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
    let imgHtml=document.querySelector("#imagen")
    if(promedio>=6){
        imgHtml.src =urlFeliz
    } else{
        imgHtml.src = urlTriste
    }