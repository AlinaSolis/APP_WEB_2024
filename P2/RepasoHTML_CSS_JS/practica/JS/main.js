//esto es un  comentario en una linea
/*
un comentario de varias lineas
*/
//alerta
//alert("Hola soy un alert")

//variables
//ver nombre="Alina Soliss";
//es mejor esta 
let nombre2="Alina Guereca";
//mosrear en pantalla
let edad=20;
let estatura=1.80;
let logico=true;

//mostrar en consola
console.log("Hola estoy aqui")
console.log("Hola tengo"+edad+"año");

//mostrar en pantalla estoy accediendo a un documento
document.write("Hola estoy aqui a tu lado<br>")
document.write("<h2>Hola tengo"+edad+"año</h2>")

//mostrar en pantalla getElementById
//vamos a buscar dentro de este documento vamos a buscar hola y vamos a ligar en como un subjefe
//vincula
let datos=document.getElementById("Hola");
datos.innerHTML="hola este es el contenido de innerHTML";

datos.innerHTML+="<hr><h3>hola soy otro contenido de innerHTML</h3>";
datos.innerHTML+="<hr><h3>Mido: "+estatura+"metros</h3>";
/*datos.innerHTML+=
    <br>
    <hr>
    <h1>
     Hola soy un contenedor de innerHTML mi nombre es: ${nombre}
     <br>y mi estatura es:${estatura}
     </h1>
    
;
Solo me falto la comita bolteada para afuera

//condicionales
if (edad>18)
datos.innerHTML+='<hr>soy mayor de edad';
else
datos.innerHTML+='<hr>Soy menor de edad<hr>';

//ciclos
for(let i=1;i<=5;i++)
{
    datos.innerHTML+='<hr><h3>El numero es ${i}</h3>'
}
let i=1;
while (i=5)
        {
            datos.innerHTML+='<hr><h3>El numero es ${i}</h3>'
            i++;
        }

i=1;
do
    {
     datos.innerHTML+='<hr><h3>El numero es ${i}</h3>';
     i++;
     }
     while (i<=5);
*/
    //funciones
    //1-Funcion que no recibe paramento y no regresa valor
function suma1()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    datos.innerHTML+="<hr><h1>El resultado de la sumatoria es: ${suma}</h1>";
}
suma1();
    //2-Funcion que no recibe paramentros y regresa valor
    function suma2()
    {
        let n1=2;
        let n2=3;
        let suma=n1+n2;
        return suma;
    }
    let sum=suma2();
    datos.innerHTML+="<hr><h1>El resultado de la sumatoria 2 es: ${sum}</h1>";

    //3-Funcion que recibe paramentros y no regresa valor
    function suma3(numero1,numero2)
    {
        let n1=numero1;
        let n2=numero2;
        let suma=n1+n2;
        datos.innerHTML+="<hr><h1>El resultado de la sumatoria 3 es: ${sum}</h1>";
    }
   suma3(3,4);
   
      //3-Funcion que recibe paramentros y regresa valor
        
      function suma4(numero1,numero2)
      {
          let n1=numero1;
          let n2=numero2;
          let suma=n1+n2;
          return suma;
      }
    
     sum=suma4(4,4);
     datos.innerHTML+="<hr><h1>El resultado de la sumatoria 4 es: ${sum}</h1>";

 //Arreglos 
let animales=[];
//todos los arreglos empiezan en la ´posivcion 0
animales[0]="Perro"
animales[1]="Gato"
animales[2]="Ave"

let animales2=("Trigre","Leon","Elefantes");
for(let i=0;i<animales.length;i++)
{
    datos.innerHTML+="<hr><h1>El animal es: ${animal[i]}</h1>";
}

animales2.forEach(element => {
    datos.innerHTML+="<hr><h1>El animal es: ${animal[element]}</h1>";
});
