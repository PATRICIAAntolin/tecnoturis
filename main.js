'use strict'

/*Funcionalidad para que al aparecer un formulario desaparezca el otro */
$(function() {
    $("#register").hide()/*ocultar registro */
    $(".container-header-navigation-form").on("click", call => {
        if(call.target.parentNode.id == "loginTap") {
            $("#registerTap").removeClass("selected");
            $("#" + call.target.parentNode.id).addClass("selected");
            $("#login").show() /*mostrar */
            $("#register").hide() /*ocultar */
        } else{
            $("#loginTap").removeClass("selected")
            $("#" + call.target.parentNode.id).addClass("selected")
            $("#login").hide() /*ocultar */
            $("#register").show() /*mostrar */
        }
    })
})

/*Validación del login, al pinchar en el botón validamos si email esta vacío retornamos false y si no devolverá los datos*/
$("#formSubmitLogin").on("submit", data =>{
    let email = data.target[0].value
    if (email == ""){
        return false
    }
    let password = data.target[1].value
    if(password == ""){
        return false
    }

    /*Aqui en css me falta darle estilos al alert que nos saldrá mientras se cargan los datos*/
    let dataAlert = $("#alert");
    dataAlert.addClass("success");
    dataAlert.append("<p class='m-0'>data procesing</p>")
    dataAlert.append("<div class ='charger'></div>")

    /*si todo es verdadero nos devolverá un json con los datos que meta el usuario */
    if(true){
        let dataUser ={
            email: email,
            password: password
        }
        login (dataUser) /*función login data definida abajo */
    }
})

/*Validación del registro */

$("#formSubmitRegister").on("submit", data =>{
 console.log(data)
})

/*la funcion data recibe los datos de la API Rest falsa por el metodo POST */
function login(data){
    $.ajax({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:data,
        /*y si todo es ok nos traemos una respuesta */
        success: function (response) {
            setInterval(function(){
                $("alert").append("<p>Data correct</p>")
                $("alert").append("<div class 'charger'></div>")
            },2000)/*tarda 2 segundos */
        },

        /*si sale mal capturamos un error */
        error: function (response){
            console.log(response)

        }
    })

}

/*AL APARTADO COMO USUARIO VER EL LISTADO DE HOTELES DISPONIBLES Y PODER FILTRARLOS

- Recibiendo un JSON haría una función con un bucle for 
recogería el json insertando los datos en un array.filter y le pasaría el metodo filtered 
para que unicamente me retorne aquellos 
hoteles que cumplan con las condiciones del filtro*/