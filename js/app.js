//=================== r e g i s t e r =======================>
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const boton = document.getElementById('boton');
const formulario = document.getElementById('frm-register')
const input = document.getElementById('frm-register input');

//para meter los datos
array = [];

function regist(event) {
    if (event.type == 'click') {
        
    }
}

// aqui creamos un mensaje como advertencia al usuario de que debe
//tener su nombre como minimo mas de 3 caracteres

//keyup si cuenta el primer carcater el keypress no
input1.addEventListener('keyup',minimocaracters);

function minimocaracters() {
    let avisoinp = document.getElementById('aviso1');
    let cantidad = input1.value.length;
    //aqui con la misma funcion hacemos aparecer el icono de validacion
    let validacion = document.getElementById('validacion');
    let negacion = document.getElementById('negacion');
    document.getElementById('aviso1').textContent = `su nombre debe ser mayor a 3 caracteres `;

    //condicionales
    if (cantidad < 4) {
        // esto es para el mensaje 
        avisoinp.style.color = "red";
        avisoinp.style.fontSize = "17px";
        //esto es para que el icono de validacion aun no aparezca
        validacion.style.backgroundColor = "transparent";
        validacion.style.visibility = "hidden";
        //aparece el logo de negacion
        negacion.style.visibility = "visible";
        negacion.style.color = "red";
    }
    else{
        //esta linea es para que desaparezca el mensaje
        document.getElementById('aviso1').textContent = ` `;
        //aqui hacemos aparecer el icono de validacion
        validacion.style.color = "rgb(0, 255, 0)";
        validacion.style.visibility = "visible";
        //el logo de negacion desaparece
        negacion.style.backgroundColor = "transparent";
        negacion.style.visibility = "hidden";
    }
}

//negacion de caracteres especiales para en name
input1.addEventListener("keyup",validateTypes);
const caracterS = document.getElementById('caracterS');

function validateTypes(event){
    //expresion para validar carcateres especiales
    const regex  = /^[a-zA-Z\s]*$/;
    
    //aqui se hacen los condicionales para la apricion del mensaje 
    //de que se estan usando carcateres especiales(/*%$&!) etc.

    if (regex.test(event.target.value)) {
        caracterS.textContent = " ";
        caracterS.style.backgroundColor = "transparent";
        caracterS.style.color = "none";
        caracterS.style.boxShadow = "none";
    }else{
        caracterS.textContent = "Caracter invalido";
        caracterS.style.backgroundColor = "rgb(82, 82, 82)";
        caracterS.style.color = "#fff";
        caracterS.style.boxShadow = "0px 0px 16px white";
    }
}

//mensaje de 3 caracteres como minimo para user name

input2.addEventListener('keyup', minimocaracters2);

function minimocaracters2() {
    let avisoinp = document.getElementById('aviso2');
    let cantidadCaracteres = input2.value.length;
    document.getElementById('aviso2').textContent = `su user name debe mayor a 3 caracteres`;
    //aqui se hace los mismo para el logo de validacion
    let validacion2 = document.getElementById('validacion2');
    let negacion2 = document.getElementById('negacion2');

    //condicionales
    if (cantidadCaracteres < 4) {
        avisoinp.style.color = "red";
        avisoinp.style.fontSize = "17px";
        validacion2.style.backgroundColor = "transparent";
        validacion2.style.visibility = "hidden";
        //aqui aparece el logo de negacion y desaparace el
        //el de validacion
        negacion2.style.color = "red";
        negacion2.style.visibility = "visible";
    }else{
        document.getElementById('aviso2').textContent = ` `;
        validacion2.style.color = "rgb(0, 255, 0)";
        validacion2.style.visibility = "visible";
        //aqui desaparace el logo de negacion y aparece 
        //el logo de validacion
        negacion2.style.backgroundColor = "transparent";
        negacion2.style.visibility = "hidden";
    }
}

//negacion de carcateres especiales para user name

input2.addEventListener("keyup",validateTypes);

function validateTypes(event) {
    //expresion para validar carcateres especiales
    const regex  = /^[a-zA-Z\s]*$/;

    //aqui se hacen los condicionales para la apricion del mensaje 
    //de que se estan usando carcateres especiales(/*%$&!) etc.
    if (regex.test(event.target.value)) {
        caracterS.textContent = " ";
        caracterS.style.backgroundColor = "transparent";
        caracterS.style.color = "none";
        caracterS.style.boxShadow = "none";            
    }else{
        caracterS.textContent = "Caracter invalido";
        caracterS.style.backgroundColor = "rgb(82, 82, 82)";
        caracterS.style.color = "#fff";
        caracterS.style.boxShadow = "0px 0px 16px white";
    }
}

password.addEventListener('keyup', minimocaractersP);

function minimocaractersP() {
    let avisopass = document.getElementById('aviso3');
    let cantidadCaracteres = password.value.length;
    document.getElementById('aviso3').textContent = `su contraseña debe ser mayor a 3 caracteres`;
    //aqui se hace los mismo para el logo de validacion
    let validacion3 = document.getElementById('validacion3');
    let negacion3 = document.getElementById('negacion3');

    if (cantidadCaracteres < 4) {
        //este es para el aviso
        avisopass.style.color = "red";
        avisopass.style.fontSize = "17px";
        // y este para el codigo de validasion
        validacion3.style.backgroundColor = "transparent";
        validacion3.style.visibility = "hidden";
        negacion3.style.color = "red";
        negacion3.style.visibility = "visible";
    }else{
        document.getElementById('aviso3').textContent = ` `;
        validacion3.style.color = "rgb(0, 255, 0)";
        validacion3.style.visibility = "visible";
        negacion3.style.backgroundColor = "transparent";
        negacion3.style.visibility = "hidden";
    }
}

password2.addEventListener('keyup', validacionPassword);

function validacionPassword() {
    
    //logo de validacion y negacion
    let validacion4 = document.getElementById('validacion4');
    let negacion4 = document.getElementById('negacion4');
    document.getElementById('aviso4').textContent =`su confirmacion de contraseña es diferente`;
    let aviso4 = document.getElementById('aviso4');
    
    if (password.value == password2.value) {
        //aparece el logo de validacion
        validacion4.style.color = "rgb(0, 255, 0)";
        validacion4.style.visibility = "visible";
        negacion4.style.backgroundColor = "transparent";
        negacion4.style.visibility = "hidden";
        document.getElementById('aviso4').textContent = ` `;

    }else{
        //mensaje de error para password incorrectos
        aviso4.style.color = "red";
        aviso4.style.fontSize = "17px";
        //desaparece el logo de validacion y aparece el de 
        //negacion.
        validacion4.style.backgroundColor = "transparent";
        validacion4.style.visibility = "hidden";
        //aparece negacion
        negacion4.style.color = "red";
        negacion4.style.visibility = "visible";
    }
}