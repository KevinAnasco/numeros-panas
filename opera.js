var num =0;
var i = 0;
var divisores = "";
var sumaDivisores = 0;
var divisoresSuma = "";
var otrasumaDivisores = 0;

num = prompt("Escribe un numero");

//FASE 1

for (i=1;i < num; i++) {
    if (num % i === 0) {
        divisores = divisores + i + " ";
        sumaDivisores = sumaDivisores + i;
        
        
    } 
}alert("Los divisores de " + num + " son: " + divisores);
alert("La suma de los divisores es: " + sumaDivisores);

//FASE 2
   
for (i = 1; i < sumaDivisores; i++) {
    if (sumaDivisores % i === 0) {
        divisoresSuma = divisoresSuma + i + " ";
        otrasumaDivisores = otrasumaDivisores +i;
    }
}alert("Los divisores de " + sumaDivisores+ " son: " + divisoresSuma);
alert("La suma de los divisores es: " + otrasumaDivisores);

//FASE 3

if (num == otrasumaDivisores && sumaDivisores == sumaDivisores ){

    alert(num+" y "+sumaDivisores+" SI son numeros Amigos" )

}else {

    alert(num+" y "+sumaDivisores+" NO son numeros Amigos" )
}