var Pregunta = require('../models/pregunta.js');

function Larga(pregunta) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.area = "<textarea name='respuesta' placeholder='Aqui su respuesta' rows='4' cols='50'></textarea>";
}

Larga.prototype = new Pregunta();

Larga.prototype.constructor = Larga;


Larga.prototype.get_pregunta = function () {
    return this.pregunta;
};

Larga.prototype.get_area = function () {
    return this.area;
};

module.exports = Larga;