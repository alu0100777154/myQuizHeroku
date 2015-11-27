var AbstractQuiz = require('../models/abstract_quiz_model.js');
var Corta = require('../models/corta.js');
var Larga = require('../models/larga.js');
var Respuesta = require('../models/respuesta.js');

function Quiz() {
    AbstractQuiz.call(this);
    
    this.q.push(
            {pregunta: new Corta('¿Capital de Italia?'),
                respuesta: new Respuesta(/^\s*roma\s*$/i)
            },
    {pregunta: new Corta('¿En que año se descubrió América?'),
        respuesta: new Respuesta('1492')
    },
    {pregunta: new Larga('¿Quien reinaba en España cuando se descubrió América?'),
        respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },
    {pregunta: new Corta('¿Quién es el mejor jugador de la NBA actualmente?'),
        respuesta: new Respuesta(/\s*Stephen Curry\s*$/i)
    },
    {pregunta: new Corta('¿Cúantos continentes existen?'),
        respuesta: new Respuesta('5')
    },
    {/* Código inseguro. ¡No ejecute esta pregunta salvo en un
     entorno en el que el código del "alumno" sea fiable!
     */
        pregunta: new Larga('Escriba una función JavaScript de nombre <tt>square</tt> ' +
                'que recibe un número y devuelve el cuadrado'),
        respuesta: new Respuesta(function (x) {
            try {
                eval(x); /* DANGER DANGER DANGER */
                var z = Math.floor(Math.random() * 100);
                return (square(z) === z * z);
            }
            catch (e) {
                return false;
            }
            return false;
        })
    }
    );

    // insertar unas cuantas preguntas sobre
    // la tabla de multiplicar
    var self = this;
    for (var i = 0; i < 3; i++) {
        (function () {
            var n1 = Math.randomInt(9) + 1;
            var n2 = Math.randomInt(9) + 1;
            self.q.push(
                    {pregunta: new Corta('¿ ' + n1 + 'x' + n2 + "= ?"),
                        respuesta: new Respuesta(function (x) {
                            return (x === n1 * n2);
                        })
                    });
        })();
    }
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQ = function () {
    return this.q.length;
};

Quiz.prototype.getQ = function (x) {
    return this.q[x]['pregunta'].get_pregunta();
}
;

module.exports = Quiz;