export class Api {
    constructor(url,tieneGet = true,tieneGetPorId = true,tienePost = true,tienePut = true,tienePatch = true,tieneDelete = true) {
        this.urlBase = url;
        this.tieneGet = tieneGet;
        this.tieneGetPorId = tieneGetPorId;
        this.tienePost = tienePost;
        this.tienePut = tienePut;
        this.tienePatch = tienePatch;
        this.tieneDelete = tieneDelete;
    }

    async getAll(endPoint){
        if(!this.tieneGet){
            throw new Error("GET NO DISPONIBLE");
        }

        let urlCompleta = `${this.urlBase}/${endPoint}`;
        let respuesta = await fetch(urlCompleta); // Realiza la solicitud a la API
        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve datos
    }

    async getById(endPoint,id) {
        if(!this.tieneGetPorId){
            throw new Error("GET POR ID NO DISPONIBLE");
        }

        let urlCompleta = endPoint 
            ? `${this.urlBase}/${endPoint}/${id}`
            : `${this.urlBase}/${id}`;
        
        let respuesta = await fetch(urlCompleta); // Realiza la solicitud a la API
        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve datos
    }

    async post(endPoint,data) {
        if(!this.tienePost){
            throw new Error("POST NO DISPONIBLE");
        }

        let urlCompleta = `${this.urlBase}/${endPoint}`;
        let respuesta = await fetch(urlCompleta, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }); // Realiza la solicitud a la API

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve datos
    }

    async put(endPoint,id,data) {
        if(!this.tienePut){
            throw new Error("PUT NO DISPONIBLE");
        }

        let urlCompleta = endPoint 
            ? `${this.urlBase}/${endPoint}/${id}`
            : `${this.urlBase}/${id}`;

        let respuesta = await fetch(urlCompleta, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }); // Realiza la solicitud a la API

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve datos
    }

    async patch(endPoint,id,data) {
        if(!this.tienePatch){
            throw new Error("PATH NO DISPONIBLE");
        }

        let urlCompleta = endPoint 
            ? `${this.urlBase}/${endPoint}/${id}`
            : `${this.urlBase}/${id}`;
        
        let respuesta = await fetch(urlCompleta, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }); // Realiza la solicitud a la API

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve datos
    }

    async delete(endPoint,id) {
        if(!this.tienePatch){
            throw new Error("DELETE NO DISPONIBLE");
        }

        let urlCompleta = endPoint 
            ? `${this.urlBase}/${endPoint}/${id}`
            : `${this.urlBase}/${id}`;
            
        let respuesta = await fetch(urlCompleta, {
            method: 'DELETE'
        }); // Realiza la solicitud a la API

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        return true;
    }
}