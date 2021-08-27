/*
1) 
Implementar un algoritmo que reciba 2 argumentos y los sume, 
el resultado se deberá imprimir en pantalla.
*/ 
function ejercicio1(){

    let a = parseFloat(prompt("Ingrese primer valor númerico"));
    let b = parseFloat(prompt("Ingrese segundo valor númerico"));

    alert(a + b);
}

/*
2) 
Un estudiante realiza 4 exámenes, calcular el promedio de estos
*/ 
function ejercicio2() {

    let sumatoria = 0;

    for (let index = 0; index < 4; index++) {
        sumatoria += parseFloat(prompt("Ingrese nota " + "(" + (index + 1)+")"));
    }

    alert("Promedio es : " + (sumatoria / 4));
}

/*
3) 
Calcular el área de un rectángulo
*/ 
function ejercicio3() {

    let base = parseFloat(prompt("Ingrese base en cm :"));
    let altura = parseFloat(prompt("Ingrese altura en cm :"));

    alert("El área de un rectángulo expresada en cm2 es : " + (base * altura));
}

/*
4) 
Calcular el área de un triángulo
*/ 
function ejercicio4() {

    let base = parseFloat(prompt("Ingrese base en cm :"));
    let altura = parseFloat(prompt("Ingrese altura en cm :"));

    alert("El área de un triángulo expresada en cm2 es : " + ((base * altura)/2));
}

/*
5) 
Calcular el área de una circunferencia
*/ 
function ejercicio5() {

    let radio = parseFloat(prompt("Ingrese radio en cm :"));

    alert("El área de una circunferencia expresada en cm2 es : " + (Math.PI * radio * 2).toFixed(4));
}

/*
6) 
Determinar el sueldo semanal de un trabajador basándose en sus horas 
trabajadas y su salario de hora hombre
*/ 
function ejercicio6() {

    let salarioHora = parseFloat(prompt("Ingrese monto del salario por hora :"));
    let horasTrabajadas = parseInt(prompt("Ingrese total de horas trabajadas durante la semana :"));

    alert("El sueldo semanal es : " + (salarioHora * horasTrabajadas).toFixed(4));
}

/*
7) 
Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, 
pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, 
determinando cuantas pulgadas debe pedir con base en los metros que requiere. 
Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
*/ 
function ejercicio7() {

    let pedidoMetros = parseFloat(prompt("Ingrese requerimiento de telas (expresada en metros) :"));
    const valorPulgada = 0.0254;

    alert("La cantidad de requerimiento de telas expresado en pulgadas es : " + (pedidoMetros / valorPulgada).toFixed(4));
}

/*
8) 
Una empresa importadora desea determinar cuántos dólares 
puede adquirir con equis cantidad de dinero peruano.
*/
function ejercicio8() {

    let soles = parseFloat(prompt("Ingrese soles :"));
    let tipoCambio = parseFloat(prompt("Ingrese tipo de cambio :"));

    alert("El monto en dólares es : " + (soles / tipoCambio).toFixed(4));
}

/*
9) 
Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, 
pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
*/
function ejercicio9() {

    let year = parseInt(prompt("Ingrese año de nacimiento :"));
    let edad = new Date().getFullYear() - year;

    if (edad < 0 ) {
        alert("El año de nacimiento es incorrecto")
    }
    else{
        alert("La edad es : " + edad);
    }
}

/*
10) 
Se tiene el nombre y la edad de tres personas. 
Se desea saber el nombre y la edad de la persona de menor edad. 
*/
function ejercicio10() {
    
    let personas = [];
    let persona = "";
    let edad = 0;
    let edades = [];
    let menorEdad = 0;
    let indiceMenorEdad = 0;

    for (let index = 0; index < 3; index++) {
        persona = "";

        while (persona == "") {
            persona = prompt("Ingrese nombre de la persona " + '(' + (index + 1) + ')');
        }

        //Ingreso el nombre de la persona en la lista personas
        personas.push(persona);

        edad = parseInt(prompt("Ingrese edad de la persona " + '(' + (index + 1) + ')'));
       
        //ingreso la edad de la persona en la lista edades
        edades.push(edad);   
    }

    menorEdad = Math.min.apply(Math, edades);
    indiceMenorEdad = edades.findIndex(x => x == menorEdad);

    alert(personas[indiceMenorEdad] + " tiene la menor edad : " + edades[indiceMenorEdad]);
}

/*
11) 
Se les dará un bono por antigüedad a los empleados de una tienda. 
Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. 
Para los que tengan más de 5, el bono será de $1000. 
Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador
*/
function ejercicio11() {
    
    let trabajador = prompt("Ingrese nombre del trabajador :");
    let year = parseInt(prompt("Ingrese años de antigüedad del trabajador :"));
    let bono = 0;

    while (year <= 0) {
        year = parseInt(prompt("El valor ingresado en años de antigüedad es incorrecto, ingrese de nuevo :"));
    }

    if (year <= 5) {
        bono = 100 * year;
    }
    else{
        bono = 1000;
    }

    alert("El bono para " + trabajador + " es : $" + bono);
}

/*
12) 
Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. 
¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? 
Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.
*/
function ejercicio12() {
    
    let salario = 1500;
    let salarioAnual = [];
    let profesor = prompt("Ingrese nombre del profesor :");    
    let mensaje = "";

    for (let index = 0; index < 6; index++) {
        salario = salario * 1.1;
        salarioAnual.push(salario.toFixed(4));        
    }

    mensaje = 
    "\n Año 1 : $"+ salarioAnual[0] + 
    "\n Año 2 : $"+ salarioAnual[1] + 
    "\n Año 3 : $"+ salarioAnual[2] + 
    "\n Año 4 : $"+ salarioAnual[3] + 
    "\n Año 5 : $"+ salarioAnual[4] + 
    "\n Año 6 : $"+ salarioAnual[5];    

    alert("El salario anual de " + profesor + " es :" + mensaje);
}

/*
13) 
Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados.
*/
function ejercicio13() {
    
    let cantidadAlumnos = parseInt(prompt("Ingrese cantidad de alumnos :"));   
    let nota = 0;
    let cantidadAprobados = 0;
    let cantidadDesaprobados = 0;

    while (cantidadAlumnos <= 0) {
        cantidadAlumnos = parseInt(prompt("El valor ingresado en cantidad de alumnos es incorrecto, ingrese de nuevo :"));
    }

    for (let index = 0; index < cantidadAlumnos; index++) {
        
        nota = parseFloat(prompt("Ingrese nota del alumno (" + (index + 1) + ") :")); 
        
        while (nota < 0 || nota > 20) {
            nota = parseFloat(prompt("El valor ingresado en nota es incorrecto, ingrese de nuevo :"));
        }

        if (nota >= 13) {
            cantidadAprobados++;
        }
        else{
            cantidadDesaprobados++;
        }
    }

    alert("Aprobados : " + cantidadAprobados + "\nDesaprobados : " + cantidadDesaprobados);
}

/*
14) 
Una compañía, fabrica focos de colores (verdes, blancos y rojos). 
Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia. 
*/
function ejercicio14() {
    
    let cantidadTotalFocos = parseInt(prompt("Ingrese cantidad de focos :"));   
    let cantidadFocosVerdes = 0;
    let cantidadFocosBlancos = 0;
    let cantidadFocosRojos = 0;
    let colorFoco = "";

    while (cantidadTotalFocos <= 0) {
        cantidadTotalFocos = parseInt(prompt("El valor ingresado en cantidad de focos es incorrecto, ingrese de nuevo :"));
    }

    for (let index = 0; index < cantidadTotalFocos; index++) {
        colorFoco = prompt("Ingrese color para el foco (" + (index + 1) + ")" + "\nV : Verde\nB : Blanco\nR : Rojo");   

        while (colorFoco == "" || (colorFoco != "V" && colorFoco != "B" &&colorFoco != "R")){
            colorFoco = prompt("Color incorrecto. Ingrese color para el foco (" + (index + 1) + ")" + "\nV : Verde\nB : Blanco\nR : Rojo");
        }
        
        switch (colorFoco) {
            case "V":
                {
                    cantidadFocosVerdes ++;
                    break;
                }                
            case "B":
                {
                    cantidadFocosBlancos ++;
                    break;
                } 
            case "R":
                {
                    cantidadFocosRojos ++;
                    break;
                }
        }
    }

    alert("La distribución de focos son :\n" + "Verdes : " + cantidadFocosVerdes + "\nBlancos : " + cantidadFocosBlancos + "\nRojos : " + cantidadFocosRojos);
}

/*
15) 
Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones. 
*/
function ejercicio15() {
    
    let edadActual = parseInt(prompt("Ingrese su edad actual :")); 
    let edadFutura = 0
    const yearElecciones = 2026;
    const yearActual = new Date().getFullYear();

    while (edadActual <= 0 || edadActual > 100) {
        edadActual = parseInt(prompt("El valor ingresado en edad es incorrecto.\nIngrese su edad actual :")); 
    }

    edadFutura = edadActual + (yearElecciones - yearActual);

    if (edadFutura < 18) {
        alert("En el año " + yearElecciones + " usted tendrá " + edadFutura + " años y no podrá votar");
    }
    else{
        alert("En el año " + yearElecciones + " usted tendrá " + edadFutura + " años y estará apto para votar");
    }
}