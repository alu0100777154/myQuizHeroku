var Pregunta = require('../models/pregunta.js');

function Simple(pregunta, opciones) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.opciones = opciones;
}

Simple.prototype = new Pregunta();

Simple.prototype.constructor = Simple;

Simple.prototype.get_tam = function () {
    var vista = [];
    
    for (var i = 0; i < this.opciones.length; i++) {
        vista[i] = "<option>" + this.opciones[i] + "</option>";
    }
    
    vista.unshift("<select name='respuesta'>");
    vista.push("</select>");

    return vista;
};

Simple.prototype.get_pregunta = function () {
    return this.pregunta;
};

module.exports = Simple;