var Pregunta = require('../models/pregunta.js');

function Larga(pregunta) {
  Pregunta.call(this);

  this.preguntapregunta = pregunta;
}

Larga.prototype = new Pregunta();

Larga.prototype.constructor = Larga;

Larga.prototype.caja = function(){
  return "<textarea name='respuesta' placeholder='Aqui su respuesta' rows='4' cols='50'></textarea>";
};

Larga.prototype.get_pregunta = function(){
  return this.pregunta;
};

module.exports = Larga;