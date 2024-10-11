alert("Hola quieres acceder a Esta calculadora:");
function operacion(){
    let n1,n2,tipoope,ope,resul;
     n1=parseFloat(document.getElementById("n1").value);
     n2=parseFloat(document.getElementById("n2").value);
     tipoope=document.getElementById("tipo").value.toLowerCase();
    
    if(isNumber(n1) && isNumber(n2))
    {
        switch(tipoope)
        {
         case"+":ope=n1+n2;break
         case"-":ope=n1-n2;break
         case"*":ope=n1*n2;break
         case"/":ope=n1/n2;break
        }   
        resul=document.getElementById("resultado").innerHTML=`<h2>${n1}${tipoope}${n2}=${ope}</h2>`;  
    }
   else
   //para que este muestre sel numero ariba como mensaje
   alert("Ingresa solo un numrero:");
//es para qaue aparesca en el formulario abajo grande 
   //resul=document.getElementById("resultado").innerHTML=`<h2>Ingresa solo un numero</h2>`;
  }

function limpiar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
function isNumber(n){
    return !isNaN(parseFloat() && isFinite(n))
}