let pass=1234;
let passEnter=prompt('Decime la clave');
while(pass!=passEnter){
   alert("Clave incorrecta. Otra vez");
   passEnter=prompt('Decime la clave'); /importante ponerlo, porque sino loopea siempre dentro de lo mismo/
}
if(pass==passEnter){
   alert('Clave correcta')
}
//version 2:
let clave=prompt("clave");
while (clave!= "fede123"){
   clave =prompt("clave ?");
}
//version 3:
let clave=prompt("clave");
for(let i=0; i<5;i++){
   if (clave!= "fede123"){
       clave=prompt("clave?")
   }else if(clave =="fede123"){
       i=5;
   }
}
version 4: /neceesito tener una clave en el scope (contexto) en el que estoy trabajando. eso define/
let clave;
do{
   clave=prompt('clave?');
}while(clave!="fede123");
/////////////////////////////////////////////
let clave=[
   "hola",
   "prueba",
   1234,
   "prueba2",
   "clave"
];
let passEnter=prompt('la clave');
for(let i=0;i<clave.lenght; i++){
   if (clave[i]==passEnter){
       alert('correcto');
       i=6;
       }
}