var EJS = require('ejs');

var Pregunta = require('../models/pregunta.js');

function Multiple(pregunta, opciones) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.opciones = opciones;
    this.area;

    var self = this;

    EJS.renderFile('views/quizes/multiple.ejs', {opciones: this.opciones}, function (err, html) {
        if (err)
            throw err;
        else
            self.area = html;
    });
}

Multiple.prototype = new Pregunta();

Multiple.prototype.constructor = Multiple;

Multiple.prototype.get_area = function () {
    return this.area;
};

Multiple.prototype.get_pregunta = function () {
    return this.pregunta;
};

module.exports = Multiple;