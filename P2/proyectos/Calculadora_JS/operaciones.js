alert("Hola quieres acceder a Esta calculadora:");
function operacion(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let tipoope=document.getElementById("tipo").value.toLowerCase();
    let operacionStr = "";
    let ope;
   
   switch(tipoope)
   {
    case"+":ope=n1+n2;break
    case"-":ope=n1-n2;break
    case"*":ope=n1*n2;break
    case"/":ope=n1/n2;break
   }
   
   let resul=document.getElementById("resultado")
   resul.innerHTML=`<h2>${n1}${tipoope}${n2}=${ope}</h2>`;
}
function limpiar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
