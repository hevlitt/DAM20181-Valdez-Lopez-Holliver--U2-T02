"use strict";
/*
funciones:
agregar
borrar
imprimir
modificar
*/
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.ar = Array();
    }
    Alumno.prototype.agregar = function (nc, nam, ape, prom, gen, fec, act) {
        var nA;
        nA = {
            no_control: nc,
            nombre: nam,
            apellidos: ape,
            promedio: prom,
            genero: gen,
            fecha_nac: fec,
            activo: act
        };
        this.ar.push(nA);
        //this.imprimir();
    };
    Alumno.prototype.imprimir = function () {
        for (var i = 0; i < this.ar.length; i++) {
            console.log(this.ar[i]);
        }
    };
    Alumno.prototype.borrar = function (nc) {
        for (var i = 0; i < this.ar.length; i++) {
            if (this.ar[i].no_control == nc) {
                this.ar.splice(i, 1);
            }
        }
        this.imprimir();
    };
    Alumno.prototype.modificar = function (nc, nam, ape, prom, gen, fec, act) {
    };
    return Alumno;
}());
exports.Alumno = Alumno;
