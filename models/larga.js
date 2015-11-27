var Pregunta = require('../models/pregunta.js');

function Larga(pregunta) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.tam = "<textarea name='respuesta' placeholder='Aqui su respuesta' rows='4' cols='50'></textarea>";
}

Larga.prototype = new Pregunta();

Larga.prototype.constructor = Larga;


Larga.prototype.get_pregunta = function () {
    return this.pregunta;
};

Larga.prototype.get_tam = function () {
    return this.tam;
};

module.exports = Larga;