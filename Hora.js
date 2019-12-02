let hora = prompt("Me dices la hora en formato de 24 horas? Ej 09")
if (hora >= 06 && hora < 14) {
    console.log("Buenos dias");
} else if (hora >= 14 && hora <= 19) {
    console.log("Buenas tardes");
} else if (hora < 6 || hora >= 20 && hora <= 24) {
    console.log("Buenas noches");
} else {
    console.log("Dime la hora, amiga")
}


