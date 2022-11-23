// Boton Tema

let botonTema = document.getElementById('boton-tema');
let fondo = document.getElementById('fondo');
let fondoAlt = document.getElementById('fondo-alt');
let fuenteColor = document.getElementById('header__text')


botonTema.addEventListener('click', () => {
    if(botonTema.classList[1] == 'tema-claro'){
    // Boton Tema
    botonTema.classList.remove('tema-claro');
    botonTema.classList.add('tema-oscuro');
    // Fondo Index
    fondo.classList.remove('fondo-oscuro');
    fondo.classList.add('fondo-claro');
    // Fondo Alternativo Index
    fondoAlt.classList.remove('fondo-oscuro-alt');
    fondoAlt.classList.add('fondo-claro-alt');
    // Color Fuente
    fuenteColor.classList.remove('fuente-oscuro');
    fuenteColor.classList.add('fuente-claro');
    }
    else if(botonTema.classList[1] == 'tema-oscuro'){
    // Boton Tema
    botonTema.classList.remove('tema-oscuro');
    botonTema.classList.add('tema-claro');
    // Fondo Index
    fondo.classList.remove('fondo-claro');
    fondo.classList.add('fondo-oscuro');
    // Fondo Alternativo Index
    fondoAlt.classList.remove('fondo-claro-alt');
    fondoAlt.classList.add('fondo-oscuro-alt');
    // Color Fuente
    fuenteColor.classList.remove('fuente-claro');
    fuenteColor.classList.add('fuente-oscuro');
    }

})



// Fin Boton Tema


// Animacion Teclas
const teclado = document.querySelector('.teclado');
const pantalla = document.querySelector('.pantalla');

teclado.addEventListener('click',(e)=>{
    
    if(e.target && e.target.classList[0] === ('teclas')){
        // tecla que se hace click
        let clickTecla = e.target
        if(clickTecla.textContent == 'DEL'){
            borrarTexto();
            animacionTecla(clickTecla);
        }
        else if(clickTecla.textContent == '='){
            animacionTecla(clickTecla);
            calcular(pantalla.textContent)
            
        }
        else if(clickTecla.textContent == 'C'){
            animacionTecla(clickTecla);
            borrarTodo()
            
        }
        else{
            animacionTecla(clickTecla);
            agregarTexto(clickTecla.textContent);
        }

        //console.log(e.target.textContent); //Agregra el texto que esta en la clase .tecla

    }
    
});

// fin animacion tecla

// Funciones Calculadora
function animacionTecla (tecla){
    let start = Date.now(); // recordar la hora de inicio

    let timer = setInterval(function() {
    // ¿Cuánto tiempo pasó desde el principio?
    let timePassed = Date.now() - start;

    if (timePassed >= 200) {
        clearInterval(timer); // terminar la animación después de 1 segundos
        tecla.classList.remove('tecla-click');
        return;
    }

    // dibujar la animación en el momento timePassed
    tecla.classList.add('tecla-click');

    }, 20);

    
}

function borrarTexto(){
    let contenidoTexto = pantalla.textContent;
    let tamanoTexto = contenidoTexto.length-1;

    pantalla.textContent = contenidoTexto.replace(contenidoTexto[tamanoTexto],'');
}

function agregarTexto (texto){
    // agrega texto dentro del div .pantalla
    let textoPantalla = pantalla.textContent
    if (textoPantalla === "0"){
        pantalla.textContent = "";
    }
    pantalla.textContent += texto;
};


function calcular (valor){
    let resultado = eval(valor)
    let textoPantalla = pantalla.textContent

    pantalla.textContent = textoPantalla.replace(textoPantalla, resultado)
}

function borrarTodo(){
    pantalla.textContent = "0";
}
// Fin Funciones Calculadora