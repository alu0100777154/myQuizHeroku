var EJS = require('ejs');

var Pregunta = require('../models/pregunta.js');

function Simple(pregunta, opciones) {
    Pregunta.call(this);

    this.pregunta = pregunta;
    this.opciones = opciones;
    this.area;

    var self = this;

    EJS.renderFile('views/quizes/simple.ejs', {opciones: this.opciones}, function (err, html) {
        if (err)
            throw err;
        else
            self.area = html;
    });

}

Simple.prototype = new Pregunta();

Simple.prototype.constructor = Simple;

Simple.prototype.get_area = function () {
    return this.area;

};

Simple.prototype.get_pregunta = function () {
    return this.pregunta;
};

module.exports = Simple;