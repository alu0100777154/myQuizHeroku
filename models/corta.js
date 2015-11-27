var Pregunta = require('../models/pregunta.js');

function Corta(pregunta) {
    Pregunta.call(this);

    this.pregunta = pregunta;
}

Corta.prototype = new Pregunta();

Corta.prototype.constructor = Corta;

Corta.prototype.caja = function () {
    return "<input type='text' name='respuesta' placeholder='Aqui su respuesta' >";
};

Corta.prototype.get_pregunta = function () {
    return this.pregunta;
};

module.exports = Corta;