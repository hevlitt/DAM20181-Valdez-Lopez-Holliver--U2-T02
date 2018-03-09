/*
funciones:
agregar
borrar
imprimir
modificar
*/

export class Alumno{
    no_control:string;
    nombre:string;
    apellidos:string;
    promedio:number;
    genero:string;
    fecha_nac:string;
    activo:boolean;

    ar=Array<Alumno>();

    agregar(nc:string,nam:string,ape:string,prom:number,gen:string,fec:string,
        act:boolean) {
    
        let nA:any;
            nA={
                no_control:nc,
                nombre:nam,
                apellidos:ape,
                promedio:prom,
                genero:gen,
                fecha_nac:fec,
                activo:act
            }
        this.ar.push(nA);
        //this.imprimir();
    }

    imprimir(){
        for(var i=0;i<this.ar.length;i++){
            console.log(this.ar[i]);
        }
    }
    
    borrar(nc:string){
        for(var i = 0;i<this.ar.length;i++ ){
            if(this.ar[i].no_control == nc){
                this.ar.splice(i,1);
            }
        }this.imprimir();
    }

    modificar(nc:string,nam:string,ape:string,prom:number,gen:string,fec:string,
        act:boolean){
            
    }

}

