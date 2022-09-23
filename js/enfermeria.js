window.addEventListener('load', iniciar)

let botonReiniciar = []
const lbPresionArterial = document.querySelector('#lb-presion-arterial')
const lbIMC = document.querySelector('#lb-imc')
const lbGlucosa = document.querySelector('#lb-glucosa')
const lbOxigenacion = document.querySelector('#lb-oxigenacion')

const seccionCalcularImc = document.getElementById('calculo-imc')
const seccionCalcularGlucosa = document.getElementById('calculo-glucosa')
const seccionCalcularPresion = document.getElementById('calculo-presion-arterial')
const seccionCalcularOxigenacion = document.getElementById('calculo-oxigenacion')

const seccionPrincipal = document.getElementById('seleccionar-consultas')
botonReiniciar = document.querySelectorAll('.Reinicio')

console.log(botonReiniciar)

const resultadosPresion = document.getElementById('resultados-presion')
const resultadosImc = document.getElementById('resultados-imc')
const resultadosGlucosa = document.getElementById('resultados-glucosa')
const resultadosOxigenacion = document.getElementById('resultados-oxigenacion')

const opLb = document.getElementById('op-lb')
const opKg = document.getElementById('op-kg')

const opM = document.getElementById('op-m')
const opCm = document.getElementById('op-cm')
const opPlg = document.getElementById('op-plg')

const opHombre = document.getElementById('op-hombre')
const opMujer = document.getElementById('op-mujer')
const inputEdad = document.getElementById('input-edad-numero')
const inputSistolica = document.getElementById('input-sistolica-numero')
const inputDiastolica = document.getElementById('input-diastolica-numero')

const pesoIngresado = document.getElementById('input-peso-numero')
const alturaIngresada = document.getElementById('input-altura-numero')
const glucosaIngresada = document.getElementById('input-glucosa-numero')
const inputOxigenacion = document.getElementById('input-oxigenacion-numero')

const botonBorrar = document.getElementById('boton-Borrar-Imc')
const botonBorrarGlucosa = document.getElementById('boton-Borrar-glucosa')
botonBorrarGlucosa.addEventListener('click', borrarDatosGlucosa)

const botonBorrarPresion =document.getElementById('boton-Borrar-Presion')
botonBorrarPresion.addEventListener('click', borrarDatosPresion)

const botonCalcularPresion = document.getElementById('boton-Calcular-Presion')
botonCalcularPresion.addEventListener('click', calcularPresionArterial)

const botonBorrarOxigenacion =document.getElementById('boton-Borrar-oxigenacion')
botonBorrarOxigenacion.addEventListener('click', borrarDatosOxigenacion)

const botonCalcularOxigenacion = document.getElementById('boton-Calcular-oxigenacion')
botonCalcularOxigenacion.addEventListener('click', calcularOxigenacion)

lbPresionArterial.addEventListener('click', visualizarSeccionPresion)
lbIMC.addEventListener('click', visualizarSeccionIMC)
lbGlucosa.addEventListener('click', visualizarSeccionGlucosa)
lbOxigenacion.addEventListener('click', visualizarSeccionOxigenacion)


function iniciar() {

    seccionCalcularImc.style.display = 'none'
    seccionCalcularGlucosa.style.display = 'none'
    seccionCalcularPresion.style.display = 'none'
    seccionCalcularOxigenacion.style.display = 'none'
    
    const botonCalcularImc = document.getElementById('boton-Calcular-Imc')
    botonCalcularImc.addEventListener('click', calcularIMC)

    const botonCalcularGlugosa = document.getElementById('boton-Calcular-glucosa')
    botonCalcularGlugosa.addEventListener('click', calcularGlucosa)

    botonBorrar.addEventListener('click', borrar)
    botonReiniciar[0].addEventListener('click', reiniciarApp)
    botonReiniciar[1].addEventListener('click', reiniciarApp)
    botonReiniciar[2].addEventListener('click', reiniciarApp)
    botonReiniciar[3].addEventListener('click', reiniciarApp)

}

//Visualiza sección de la presión arterial
function visualizarSeccionPresion() {
    seccionPrincipal.style.display = 'none'
    seccionCalcularPresion.style.display = 'flex'
    //botonReiniciar.addEventListener('click', reiniciarApp)
}


//Visualiza sección del indice de masa corporal
function visualizarSeccionIMC() {
    seccionPrincipal.style.display = 'none'
    seccionCalcularImc.style.display = 'flex'
    //botonReiniciar.addEventListener('click', reiniciarApp)
}


//Visualiza sección de la glucosa
function visualizarSeccionGlucosa() {
    seccionPrincipal.style.display = 'none'
    seccionCalcularGlucosa.style.display = 'flex'
    //botonReiniciar.addEventListener('click', reiniciarApp)
}

//Visualiza sección de la oxigenación
function visualizarSeccionOxigenacion() {
    seccionPrincipal.style.display = 'none'
    seccionCalcularOxigenacion.style.display = 'flex'
}


function calcularOxigenacion() {

    let oxigenacion = inputOxigenacion.value

    if ((oxigenacion < 0) || (oxigenacion > 100)) {
        alert('El valor proporcionado está fuera de rango. Los datos deben ser entre 0 y 100')
        return
    }

    if (oxigenacion <= 90) {
        resultadosOxigenacion.innerHTML = 'Este nivel de oxígeno es muy preocupante y puede indicar un problema médico grave. Llame por ayuda o diríjase a la sala de emergencias más cercana inmediatamente. Es posible que necesite hacerse rayos X o un examen del corazón de manera urgente'
    } else if ( (oxigenacion > 90) && (oxigenacion < 95) ) {
        resultadosOxigenacion.innerHTML = 'Este nivel de oxígeno es preocupante y puede indicar un problema médico. Se recomienda acceder a una evaluación de atención de urgencia' 
    } else if ( (oxigenacion > 95) && (oxigenacion <= 100) ) {
        resultadosOxigenacion.innerHTML = 'Este nivel de oxígeno es normal. Camine por dos minutos y mida su nivel de oxígeno nuevamente.'
    } 

   // botonReiniciar.style.display = 'flex'
}  

function calcularPresionArterial() {

    let edad = inputEdad.value
    let pSistolica = inputSistolica.value
    let pDiastolica = inputDiastolica.value
    let sist = 0, diast = 0

    //valida si los valores son válidos

    if (edad < 16) {
        alert('La edad debe ser mayor o igual a 16')
        return
    }

    if ( (pSistolica <= 0) || (pDiastolica <= 0) ) {
        alert('Valores no válidos - Los valores deben ser mayores que cero')
        return
    }

    if (opHombre.checked) {
        
        if ( (edad >= 16) && (edad <= 18) ) {
            if ( (pSistolica >= 105) && (pSistolica <= 135) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 60) && (pDiastolica <= 86) ) {
                diast = 1
            } 
        } else if ( (edad >= 19) && (edad <= 24) ) {
            if ( (pSistolica >= 105) && (pSistolica <= 139) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 62) && (pDiastolica <= 88) ) {
                diast = 1
            } 
        } else if ( (edad >= 25) && (edad <= 29) ) {
            if ( (pSistolica >= 108) && (pSistolica <= 139) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 65) && (pDiastolica <= 89) ) {
                diast = 1
            } 
        } else if ( (edad >= 30) && (edad <= 39) ) {
            if ( (pSistolica >= 110) && (pSistolica <= 145) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 68) && (pDiastolica <= 92) ) {
                diast = 1
            } 
        } else if ( (edad >= 40) && (edad <= 49) ) {
            if ( (pSistolica >= 110) && (pSistolica <= 150) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 70) && (pDiastolica <= 96) ) {
                diast = 1
            } 
        } else if ( (edad >= 50) && (edad <= 59) ) {
            if ( (pSistolica >= 115) && (pSistolica <= 155) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 70) && (pDiastolica <= 98) ) {
                diast = 1
            } 
        } else if ( edad >= 60 ) {
            if ( (pSistolica >= 115) && (pSistolica <= 160) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 70) && (pDiastolica <= 100) ) {
                diast = 1
            } 
        }   
        // Si es mujer
    } else if (opMujer.checked) {
        if ( (edad >= 16) && (edad <= 24) ) {
            if ( (pSistolica >= 100) && (pSistolica <= 130) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 60) && (pDiastolica <= 85) ) {
                diast = 1
            } 
        } else if ( (edad >= 25) && (edad <= 29) ) {
            if ( (pSistolica >= 102) && (pSistolica <= 135) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 60) && (pDiastolica <= 86) ) {
                diast = 1
            } 
        } else if ( (edad >= 30) && (edad <= 39) ) {
            if ( (pSistolica >= 105) && (pSistolica <= 139) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 65) && (pDiastolica <= 89) ) {
                diast = 1
            } 
        } else if ( (edad >= 40) && (edad <= 49) ) {
            if ( (pSistolica >= 105) && (pSistolica <= 150) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 65) && (pDiastolica <= 96) ) {
                diast = 1
            } 
        } else if ( (edad >= 50) && (edad <= 59) ) {
            if ( (pSistolica >= 110) && (pSistolica <= 155) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 70) && (pDiastolica <= 98) ) {
                diast = 1
            } 
        } else if ( edad >= 60 ) {
            if ( (pSistolica >= 115) && (pSistolica <= 160) ) {
                sist = 1
            } 
            if ( (pDiastolica >= 70) && (pDiastolica <= 100) ) {
                diast = 1
            } 
        }  
    } else {
        alert('Debe seleccionar el sexo del paciente')
        return
    }

    if ( (sist === 1) && (diast === 1) ) {
        resultadosPresion.innerHTML = 'Su presión arterial está normal. '
    }

    if (sist === 0) {
        resultadosPresion.innerHTML = 'Su presión arterial sistólica no está normal.'
    } 

    if (diast === 0) {
        resultadosPresion.innerHTML += 'Su presión arterial diastólica no está normal.'
    }

    if ((diast === 0) || (sist === 0)) {
        resultadosPresion.innerHTML += 'Busca atención médica'
    }
    

    botonCalcularPresion.disabled = true
    //botonReiniciar.style.display = 'flex'
}

function calcularIMC() {

    let peso = pesoIngresado.value
    let altura = alturaIngresada.value

    //let textImcResp = document.getElementById('resultados-imc')

    //valida si los valores son válidos
    if ( (peso <= 0) || (altura <= 0) ) {
        alert('Valores no válidos - La altura y el peso deben ser mayores que cero')
        return
    }

    //verifica el peso y la unidad seleccionada
    if  (opLb.checked) {
        peso = peso / 2.2
    } else if (opKg.checked) {
        peso = peso
    } else {
        alert ('Debe seleccionar una unidad de medida para el peso')
        return
    }

    //verifica la altura y la unidad seleccionada
    if(opM.checked) {
        altura = altura
    } else if(opCm.checked) {
        altura = altura/100
    } else if(opPlg.checked) {
        altura = altura * 2.54 / 100
    } else {
        alert('Debe seleccionar una unidad de medida para la altura')
        return
    }

    //calcula el imc
    imc = peso / ( altura * altura ) 

    // Imprime la respuesta
    resultadosImc.innerHTML = 'IMC es de  ' + imc.toFixed(2) + ' : '

    imprimirResultados()
}

function calcularGlucosa() {
    
    let glucosa = glucosaIngresada.value

    //valida si los valores son válidos
    if  (glucosa <= 0)  {
        alert('Valores no válidos - Los valores deben ser mayores que cero')
        return
    }

    //calcula el estado según nivel de azúcar

    if(glucosa < 80) {
        resultadosGlucosa.innerHTML = 'Nivel Bajo. Consulte a su médico'
        return
    } else if ( (glucosa >= 80) && (glucosa <=100)) {
        resultadosGlucosa.innerHTML = 'Nivel normal'
    } else if ( (glucosa > 100) && (glucosa <=140)) {
        resultadosGlucosa.innerHTML = 'Nivel medio: Busca atención médica'
    } else if ( (glucosa > 140) && (glucosa <=240)) {
        resultadosGlucosa.innerHTML = 'Demasiado alto: Trabaja en bajar tus niveles de azúcar en la sangre'
    } else if ( (glucosa > 240) && (glucosa <=300)) {
        resultadosGlucosa.innerHTML = 'Demasiado alto: Esto podría ser una señal de manejo ineficiente de la glucosa, así que visita a un médico'
    } else {
        resultadosGlucosa.innerHTML = 'Muy alto: Busca atención médica de inmediato'
    }

    //botonReiniciar.style.display = 'flex'
}

function imprimirResultados() {

        if (imc < 16) {
            resultadosImc.innerHTML += 'DELGADEZ SEVERA'
        } else if ( (imc >= 16) && (imc < 17) ) {
            resultadosImc.innerHTML += 'DELGADEZ MODERADA'
        } else if ( (imc >= 17) && (imc < 18.5) ) {
            resultadosImc.innerHTML += 'DELGADEZ ACEPTABLE'
        } else if ( (imc >= 18.5) && (imc < 25) ) {
            resultadosImc.innerHTML += 'NORMAL'
        } else if ( (imc >= 25) && (imc < 30) ) {
            resultadosImc.innerHTML += 'OBESO'
        } else if ( (imc >= 30) && (imc < 35) ) {
            resultadosImc.innerHTML += 'OBESO TIPO I'
        } else if ( (imc >= 35) && (imc < 40) ) {
            resultadosImc.innerHTML += 'OBESO TIPO II'
        } else if (imc >= 40) {
            resultadosImc.innerHTML += 'OBESO TIPO III'
        } else{
            resultadosImc.innerHTML += 'RESULTADO FUERA DE RANGO'
        } 

        // botonReiniciar.style.display = 'flex'
}

function borrar() {
    pesoIngresado.value = ""
    alturaIngresada.value = ""
    resultadosImc.innerHTML = ""
}

function borrarDatosGlucosa() {
    glucosaIngresada.value = ""
    resultadosGlucosa.innerHTML = ""
}

function borrarDatosPresion() {
    inputEdad.value = ""
    inputSistolica.value = ""
    inputDiastolica.value = ""
    resultadosPresion.innerHTML = ""

    botonCalcularPresion.disabled = false
}

function borrarDatosOxigenacion() {
    inputOxigenacion.value = ""
    resultadosOxigenacion.innerHTML = ""
}

function reiniciarApp()
{
    location.reload()
    console.log('clic a reinicar')
}
    