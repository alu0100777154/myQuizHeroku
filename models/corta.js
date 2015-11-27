var Pregunta = require('../models/pregunta.js');

function Corta(pregunta) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.tam = "<input type='text' name='respuesta' placeholder='Aqui su respuesta'>";
}

Corta.prototype = new Pregunta();

Corta.prototype.constructor = Corta;


Corta.prototype.get_pregunta = function () {
    return this.pregunta;
};

Corta.prototype.get_tam = function () {
    return this.tam;
};

module.exports = Corta;