//Punto 1

function calcular(base, altura)
{
   
     const area=base*altura;
     const perimetro=2*(base+altura);

     return [area, perimetro];    
}

//Punto 2

function calcular_hipotenusa(a, b)
{
    //Math.pow(a,2)
    const hipotenusa= Math.sqrt(a**2+b**2);    
    return hipotenusa;
}

//Punto 3
function calculadora(a,b)
{

    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);
}

//Punto 4

function media(){

    //alert(), prompt(): Usarla con precaución    
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');

    //Casting: Transformar de manera explícita el tipo
    //de dato de una variable en js 
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio= (x+y+z)/3;
    console.log(promedio);
    return promedio;
    
}
//Punto 5
function calcular_tiempo(){
    
    let v1= parseInt(document.getElementById("x").value);
    let v2= parseInt(document.getElementById("y").value);
    let d= parseInt(document.getElementById("z").value);

    let t=d/(v1-v2);
    let tf=t*60

    let resultado= document.getElementById("resultado");
    resultado.value= tf;
    return tf;
}
 
//Punto 6

function notas(){

      
    let notap1 = parseFloat(document.getElementById("notap1").value);
    let notap2 = parseFloat(document.getElementById("notap3").value);
    let notap3 = parseFloat(document.getElementById("notap3").value);
    let notae = parseFloat(document.getElementById("notae").value);
    let notat = parseFloat(document.getElementById("notat").value);
    let notap=(notap1+notap2+notap3)/3;
    let notaf =(notap*0.55)+(notae*0.3)+(notat*0.15);

    console.log(notaf);
    return notaf;
}