var Pregunta = require('../models/pregunta.js');

function Multiple(pregunta, opciones) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.opciones = opciones;
}

Multiple.prototype = new Pregunta();

Multiple.prototype.constructor = Multiple;

Multiple.prototype.vista = function () {
    var vista = [];

    for (var i = 0; i < this.opciones.length; i++) {
        vista[i] = "<option>" + this.opciones[i] + "</option>";
    }

    vista.unshift("<select name='respuesta[]' size=" + this.opciones.length + " multiple>");
    vista.push("</select>");

    return vista;
};

Multiple.prototype.get_pregunta = function () {
    return this.pregunta;
};

module.exports = Multiple;