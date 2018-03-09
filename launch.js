"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var alu = new index_1.Alumno();
alu.agregar("13400499", "Holliver", "Valdez", 22, "M", "12/03/1995", true);
alu.agregar("13400300", "Jorge", "Cardenas", 22, "M", "10/09/1995", true);
alu.imprimir();
alu.borrar("13400499");
