console.log("hola");

localStorage.setItem("tareas",[]);

let tareas = localStorage.getItem("tareas");

console.log(tareas);


function agregar(tarea, estado) {
    tareas.push({tarea: tarea, estado: estado});
    tareas.map((tarea, id) => ({id: (id+1),tarea: tarea.tarea, estado: tarea.estado}));
}

function listarTareas() {
    console.log(tareas);
    
}

function eliminar(id) {
    let nuevo = tareas.filter(tarea => tarea.id != id);
    tareas = [... nuevo];
    tareas.map((tarea, id) => ({id: (id+1),tarea: tarea.tarea, estado: tarea.estado}));
}

function modificar(estado, tarea,id) {
    if(estado != "" && tarea == ""){
        tareas.map(task => {
            if(task.id == id){
                return {...task, estado: estado};
            }else{
                return task;
            }
        })
    }else if(estado == "" && tarea != ""){
        tareas.map(task => {
            if(task.id == id){
                return {...task, tarea: tarea};
            }else{
                return task;
            }
        })
    }else if (estado != "" && tarea != ""){
        tareas.map(task => {
            if(task.id == id){
                return {...task, tarea: tarea, estado: estado};
            }else{
                return task;
            }
        })
    }
}