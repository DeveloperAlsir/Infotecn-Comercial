// este codigo es para bloquear el ctrl+P
document.addEventListener('keydown', function (e) {
    // Check if the `Ctrl`+`P` keys are pressed
    if (e.ctrlKey && e.keyCode === 80) {
        // Prevent the print dialog from being shown
        e.preventDefault();
    }
});

// Esta funcion solo permite numeros
function validarNumerico(event) {
    var charCode = event.which ? event.which : event.keyCode;
  
    // Permite solo dígitos numéricos y teclas especiales de control
    if (charCode < 48 || charCode > 57) {
      // Deshabilita la entrada de caracteres no numéricos
      event.preventDefault();
      return false;
    }
  
    return true;
  }

// funcion para limpiar campos con el n/a
function limpiarCampo() {
    document.getElementById("tensio_p").value = "";
}
function limpiarCampo2() {
    document.getElementById("corrienteN").value = "";
}
function limpiarCampo3() {
    document.getElementById("corrienteC").value = "";
}
function limpiarCampo4() {
    document.getElementById("temperatura").value = "";
}

function limpiarCampo5() {
    document.getElementById("pral").value = "";
}

function limpiarCampo6() {
    document.getElementById("medida_zocalo").value = "";
}

function limpiarCampo7() {
    document.getElementById("reservas").value = "";
}
// Obtener referencias a los elementos
var corrienteNominal = document.getElementById("corrienteN");
var radioNA5 = document.getElementById("na5");
// Agregar un evento de escritura al campo de texto
corrienteNominal.addEventListener("input", function() {
    // Deseleccionar el radio button
    radioNA5.checked = false;
});

// Obtener referencias a los elementos
var corrienteCorto = document.getElementById("corrienteC");
var radioNA6 = document.getElementById("na6");
// Agregar un evento de escritura al campo de texto
corrienteCorto.addEventListener("input", function() {
    // Deseleccionar el radio button
    radioNA6.checked = false;
});

// Obtener referencias a los elementos
var temperatura = document.getElementById("temperatura");
var radioNA7 = document.getElementById("na7");
// Agregar un evento de escritura al campo de texto
temperatura.addEventListener("input", function() {
    // Deseleccionar el radio button
    radioNA7.checked = false;
});

// Obtener referencias a los elementos
var pralInput = document.getElementById("pral");
var radiospintura = document.getElementById("pintura");
// Agregar un evento de escritura al campo de texto
pralInput.addEventListener("input", function() {
    // Deseleccionar el radio button
    radiospintura.checked = false;
});

var pralInput = document.getElementById("pral").value.trim();
var radios = document.getElementsByName("pintura");
// Si el campo de texto no está vacío, borrar el atributo "checked" de los radio buttons
if (pralInput !== "") {
    radios.forEach(radio => {
        radio.checked = false;
    });
}

//********************** esta funcion es para validar los campos vacios **********************//
function validar() {
// Codigo para campos del nombre del proyecto
    const ot = document.getElementById('input_subtitulosot').value;
    const item = document.getElementById('input_subtitulositem').value;
    const obra = document.getElementById('input_subtitulosobra').value;
    const tablero = document.getElementById('input_subtitulostablero').value;
    const cliente = document.getElementById('input_subtituloscliente').value;
    const comercial = document.getElementById('input_subtituloscomercial').value;
    const analista = document.getElementById('input_subtitulosanalista').value;

//*************************************** Valiadaciones Electricas ***************************************/
// Codigo para tension primaria
    const tensionPrimaria = document.getElementById('tensio_p').value;
    const radioAC = document.getElementById("ac");
    const radioDC = document.getElementById("dc");
    const radioNA = document.getElementById("na");

    const radios = !radioAC.checked || !radioDC.checked;
    var tensionAcdc = tensionPrimaria === "" && radios;
    const tensionNa = radioNA.checked && tensionPrimaria == "";

    if (radioNA.checked) {
        tensionAcdc = false;
    }

// Codigo para tension secundaria
    const tensionSecundaria = document.getElementById('tensio_s').value;
    const radioAC2 = document.getElementById("ac2");
    const radioDC2 = document.getElementById("dc2");
    const radioNA2 = document.getElementById("na1");

    const radios2 = !radioAC2.checked || !radioDC2.checked;
    var tensionAcdc2 = tensionSecundaria === "" && radios2;
    const tensionNa2 = radioNA2.checked && tensionSecundaria == "";

    if (radioNA2.checked) {
        tensionAcdc2 = false;
    }

    // Codigo para tension control
    const tensionControl = document.getElementById('tensio_c').value;
    const radioAC3 = document.getElementById("acc");
    const radioDC3 = document.getElementById("dcc");
    const radioNA3 = document.getElementById("na2");

    const radios3 = !radioAC3.checked || !radioDC3.checked;
    var tensionAcdc3 = tensionControl === "" && radios3;
    const tensionNa3 = radioNA3.checked && tensionControl == "";

    if (radioNA3.checked) {
        tensionAcdc3 = false;
    }

    // Codigo para numero de fases
    var radios4 = document.getElementsByName("fases");
    var seleccionado = false;

    // Verificar si al menos uno de los radios está seleccionado
    for (var i = 0; i < radios4.length; i++) {
        if (radios4[i].checked) {
            seleccionado = true;
            break;
        }
    }
    
    // Codigo para numero de hilos
    const numeroFases = document.getElementById("hilos").value;

    // Codigo para corriente nominal
    const corrienteNominal = document.getElementById('corrienteN').value;
    const radioNA5 = document.getElementById("na5");
    const corrienteNa4 = !radioNA5.checked && corrienteNominal == "";

    // Codigo para corriente cortocircuito
    const corrienteCorto = document.getElementById('corrienteC').value;
    const radioNA6 = document.getElementById("na6");
    const corrienteNa5 = !radioNA6.checked && corrienteCorto == "";

    // Codigo para corriente temperatura
    const Temperatura = document.getElementById('temperatura').value;
    const radioNA7 = document.getElementById("na7");
    const tempera = !radioNA7.checked && Temperatura == "";

    // Codigo para iluminacion
    var radiosilum = document.getElementsByName("si");
    var seleccionado1 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var y = 0; y < radiosilum.length; y++) {
        if (radiosilum[y].checked) {
            seleccionado1 = true;
            break;
        }
    }

    // Codigo para resistencia
    var radiosiresis = document.getElementsByName("hi");
    var seleccionado2 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var x = 0; x < radiosiresis.length; x++) {
        if (radiosiresis[x].checked) {
            seleccionado2 = true;
            break;
        }
    }

    // Codigo para ventilacion
    var radiosvent = document.getElementsByName("venti");
    var seleccionado3 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var z = 0; z < radiosvent.length; z++) {
        if (radiosvent[z].checked) {
            seleccionado3 = true;
            break;
        }
    }

    // Codigo para tranformadore corriente
    const transformadoresC = document.getElementById("trafoCorriente").value;

    // Codigo para cable control
    var radioscableControl = document.getElementsByName("cableado");
    var seleccionado4 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var a = 0; a < radioscableControl.length; a++) {
        if (radioscableControl[a].checked) {
            seleccionado4 = true;
            break;
        }
    }

    // Codigo para marcacion control
    var radiosMarcasControl = document.getElementsByName("marcacion");
    var seleccionado5 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var b = 0; b < radiosMarcasControl.length; b++) {
        if (radiosMarcasControl[b].checked) {
            seleccionado5 = true;
            break;
        }
    }

    // Codigo para tranformadore corriente
    const tPlacas = document.getElementById("tipoPlacas").value;

    // Codigo para tranformadore corriente
    const transferencia = document.getElementById("moduloTransferencias").value;

    // Codigo para tranformadore corriente
    const cablesPot = document.getElementById("cables").value;

 //*************************************** Valiadaciones Mecanicas ***************************************/  
 
    // Codigo para tranformadore corriente
    const tipoTablero = document.getElementById("tableros").value;

    // Codigo para tipo lamina
    var radiosLamina = document.getElementsByName("tlamina");
    var seleccionado6 = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var c = 0; c < radiosLamina.length; c++) {
        if (radiosLamina[c].checked) {
            seleccionado6 = true;
            break;
        }
    }

    // Codigo para calibre lamina
    const cLamninas = document.getElementById("cLamina").value;

    // Codigo para tipo instalacion
    const ip = document.getElementById("tInstalacion").value;

    // Codigo para la pintura del tablero
    var pralInput = document.getElementById("pral").value;
    var radiospintura = document.getElementsByName("pintura");
    var pinturaSeleccionada = false;
    for (var d = 0; d < radiospintura.length; d++) {
        if (radiospintura[d].checked) {
            pinturaSeleccionada = true;
            break;
        } else (pralInput !== "") 
        
    }

    // Codigo para tipo compartimentacion
    const compartimentaciones = document.getElementById("comparti").value;

    // Codigo para tipo tipo chapas
    const chapas = document.getElementById("tipoChapa").value;

    // Codigo para el zocalo tablero
    var zocaloTablero = document.getElementById("medida_zocalo").value;
    var radiosZocalo = document.getElementsByName("zocalo");
    var zocaloSeleccionado = false;
    for (var e = 0; e < radiosZocalo.length; e++) {
        if (radiosZocalo[e].checked) {
            zocaloSeleccionado = true;
            zocaloTablero = false;
            break;
        } else if (zocaloTablero !== "") {
            zocaloSeleccionado = false;
        }
      
    }

    // Codigo para frente muerto
    var radiosfrentemuetro = document.getElementsByName("fmuerto");
    var frentemuetoSeleccionado = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var g = 0; g < radiosfrentemuetro.length; g++) {
        if (radiosfrentemuetro[g].checked) {
            frentemuetoSeleccionado = true;
            break;
        }
    }

     // Codigo para acabado cobre
     var radiosacabado = document.getElementsByName("acobre");
     var acabadoSeleccionado = false;
     // Verificar si al menos uno de los radios está seleccionado
     for (var h = 0; h < radiosacabado.length; h++) {
         if (radiosacabado[h].checked) {
             acabadoSeleccionado = true;
             break;
         }
     }

      // Codigo para entrada cable
    var radiosentradas = document.getElementsByName("entrada");
    var entradaSeleccionado = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var j = 0; j < radiosentradas.length; j++) {
        if (radiosentradas[j].checked) {
            entradaSeleccionado = true;
            break;
        }
    }

     // Codigo para salida cable
     var radiosSalidas = document.getElementsByName("salida");
     var salidasSeleccionado = false;
     // Verificar si al menos uno de los radios está seleccionado
     for (var k = 0; k < radiosSalidas.length; k++) {
         if (radiosSalidas[k].checked) {
             salidasSeleccionado = true;
             break;
         }
     }

     // Codigo para la reserva del tablero
     var reservaTablero = document.getElementById("reservas").value;
     var radiosReservas = document.getElementsByName("reser");
     var reservaSeleccionado = false;
     for (var f = 0; f < radiosReservas.length; f++) {
         if (radiosReservas[f].checked) {
             reservaSeleccionado = true;
             reservaTablero = false;
             break;
         } else if (reservaTablero !== "") {
             reservaSeleccionado = false;
         }
       
     }

     // Codigo para empaque
    const empaqueTipo = document.getElementById("empaques").value;

    // Codigo para argollas
    var radiosArgollas = document.getElementsByName("argollas");
    var argollasSeleccionada = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var l = 0; l < radiosArgollas.length; l++) {
        if (radiosArgollas[l].checked) {
            argollasSeleccionada = true;
            break;
        }
    }

    // Codigo para acceeso
    const tipoAcceso = document.getElementById("acceso").value;

//*************************************** Valiadaciones Extras ***************************************/

    // Codigo para unifilar
    var radiosunifilar = document.getElementsByName("unifilar");
    var unifilarSeleccionada = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var m = 0; m < radiosunifilar.length; m++) {
        if (radiosunifilar[m].checked) {
            unifilarSeleccionada = true;
            break;
        }
    }

    // Codigo para ingenieria detallada
    var radiosingenieria = document.getElementsByName("inndetallada");
    var ingenieraSeleccionada = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var n = 0; n < radiosingenieria.length; n++) {
        if (radiosingenieria[n].checked) {
            ingenieraSeleccionada = true;
            break;
        }
    }

    // Codigo para tiempo equipos
    var radiosequipo = document.getElementsByName("equipo");
    var equipoSeleccionada = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var o = 0; o < radiosequipo.length; o++) {
        if (radiosequipo[o].checked) {
            equipoSeleccionada = true;
            break;
        }
    }

    // Codigo para codigo equipo
    var radioscodigo = document.getElementsByName("codigo");
    var codigoSeleccionada = false;
    // Verificar si al menos uno de los radios está seleccionado
    for (var p = 0; p < radioscodigo.length; p++) {
        if (radioscodigo[p].checked) {
            codigoSeleccionada = true;
            break;
        }
    }

    // Codigo para pedido de equipo
    const pedidoEquipo = document.getElementById("equipop").value;

    // Codigo para norma construccion
    const normas = document.getElementById("norma").value;

// Codigo para la validacion de todos los campos juntos
    if (ot === "" || item === "" || obra === "" || tablero === "" || cliente === "" || comercial === "" || analista === "" 
    || tensionAcdc || tensionAcdc2 || tensionAcdc3 || numeroFases === "hilo" || !seleccionado || corrienteNa4 || corrienteNa5
    || tempera || !seleccionado1 || !seleccionado2 || !seleccionado3 || transformadoresC === "transformador" || !seleccionado4
    || !seleccionado5 || tPlacas === "placa" || transferencia === "moduloTrans" || cablesPot === "cablePotencia"
    || tipoTablero === "tipo" || !seleccionado6 || cLamninas === "lamina" || ip === "interior" || compartimentaciones === "separacion" 
    || chapas === "chapa" || !pinturaSeleccionada || !zocaloSeleccionado || !reservaSeleccionado || !frentemuetoSeleccionado
    || !acabadoSeleccionado || !entradaSeleccionado || !salidasSeleccionado || empaqueTipo === "tipoEmpaque" || !argollasSeleccionada
    || tipoAcceso === "tableroObra" || !unifilarSeleccionada || !ingenieraSeleccionada || !equipoSeleccionada || !codigoSeleccionada
    || pedidoEquipo === "pEquipo" || normas === "nConstruccion") 
    {
        alert("Por favor, complete el campo de texto o seleccione una opción de radio.");
        return false;
    }
    else{
        window.print();
    }

}
