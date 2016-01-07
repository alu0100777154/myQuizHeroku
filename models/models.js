var path = require('path');

//Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite 
var sequelize = new Sequelize(null, null, null,
        {dialect: "sqlite", storage: "quiz.sqlite"}
);

//Importar la definición de la tabla Quiz en quiz_model.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; //exportar definicion de tabla Quiz


//Crea e inicializa la tabla de preguntas en la DB
sequelize.sync().success(function () {
    Quiz.count().success(function (count) {
        if (count === 0) { //solo si esta vacia se inicializa 
            Quiz.create({
                pregunta: 'Capital de Italia',
                respuesta: 'Roma'
            })
                    .success(function () {
                        console.log('DB incializada');
                    });
        }
    });
});
