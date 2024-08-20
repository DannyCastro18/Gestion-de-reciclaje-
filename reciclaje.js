//Desarrolla una aplicación web para gestionar materiales reciclables y los centros de reciclaje que los reciben. La aplicación debe permitir a los usuarios agregar detalles sobre los materiales reciclables y los centros de reciclaje. Cada material reciclable debe estar asociado a un único centro de reciclaje mediante composición, indicando que cada material reciclable puede ser gestionado por un centro específico. La interfaz debe incluir campos para ingresar el nombre del material reciclable, el nombre del centro de reciclaje, y un botón para mostrar los detalles del material reciclable y el centro de reciclaje al que está asociado. Utiliza dos archivos: reciclaje.html para la interfaz y reciclaje.js para la lógica, utilizando las clases MaterialReciclable y CentroReciclaje.

class CentroReciclaje{
    constructor(nombre){
        this.nombre = nombre;
    }
      mostrar() {
        return `
        Nombre del centro: ${this.nombre}`
      }
}

class MaterialReciclable{
    static Material = [];
    constructor(nombre, centro, detalles){
        this.nombre = nombre;
        this.centro = centro;
        this.detalles = detalles;
    }
    mostrarDetalles(){
        return `
        Nombre del material reciclado: ${this.nombre}
        Detalles: ${this.detalles}
        Nombre del centro de reciclaje: ${this.centro} `
    }
    static agregarmaterial(material) {
        this.Material.push(material);
      }
}

document.querySelector('#mostrarDetalles').addEventListener('click', () => {
    let centro = document.querySelector('#nombreCentro').value;
    let nombre = document.querySelector('#nombreMaterial').value;
    let detalles = document.querySelector('#detallesMaterial').value;
    let material = new MaterialReciclable(nombre, centro, detalles);
    
    if(nombre!=''|| centro!='' ){
        MaterialReciclable.agregarmaterial(material);
        let lista = document.querySelector('#lista');
        let vineta = document.createElement('li');
        vineta.innerText = material.mostrarDetalles()
        lista.appendChild(vineta);
    }else{
        alert('No ingresaste ningún dato')
    }


})
