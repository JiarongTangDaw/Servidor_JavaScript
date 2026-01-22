import { Meses, diaDeLaSemana} from "./datos.js";

let boton = document.getElementById('boton');

boton.addEventListener('click',function(event){

    // previene que la pagina se recarge tras enviar el formulario
    event.preventDefault(); 
    
    // obtenemos el año del input
    let anio = document.getElementById('anio').value;

    // variable para visualizar el mes en forma numerica
    let numMes = 1;
    
    // recorere la variable meses para obtener el nombre y los dias de cada mes
    for(let mes of Meses){
        let nomMes =  mes.nombre;
        let diasMes = 0;
        // comprobamos si es un año bisiesto o no, para cambiar el numero de dias del mes de febrero
        if(mes.nombre == 'Febrero' && (anio % 4) != 0){
            diasMes = mes.dias - 1;
        }else{
            diasMes = mes.dias;
        }
        console.log(nomMes);
        
        //recorre los dias del cada mes
        for (let i = 1; i <= diasMes; i++) {
            // string de la fecha en el formato correcto para que funcione en la funcion de diaDeLaSemana
            // ${("0" + numMes).slice(-2)} el "0" es para añadir el 0 si delante del numero del mes  y con el slice obtenemos los ultimos dos digitos de la variable
            // en este caso aunque acabe siendo una variable de tres digitos solo coge los ultimos dos
            let fecha = `${anio}-${("0" + numMes).slice(-2)}-${("0" + i).slice(-2)}`;
            // sacar el dia de la semana de la fecha enviada
            let diaSemana = diaDeLaSemana(fecha);
            // impresion por consola
            console.log(`${diaSemana} ${i} de ${mes.nombre} de ${anio}`);
        }
        //aumento del valor de numero de mes
        numMes++;
    }
    
})

