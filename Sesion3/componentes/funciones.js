class Multiplica extends HTMLElement {

    static get observedAttributes() {
        return ['valor'];
    }

    constructor() {
        super();
        this.valor = parseInt(this.getAttribute('valor')) || 1;
    }  

    // Se llama cuando el elemento se agrega al DOM
    connectedCallback() {
        this.render();
        this.addEventListener('click', this.multiplicar);
    }

    // Se llama cuando el elemento se elimina del DOM
    disconnectedCallback() {
        this.removeEventListener('click', this.multiplicar);
    }

    // Se llama cuando un atributo observado cambia
    attributeChangedCallback(propiedad, oldValue,newValue) {
        if (propiedad === 'valor') {
            this.valor = parseInt(newValue);
            this.render();
        }
    }

    // Método para multiplicar el valor por 2
    multiplicar = () => {
        this.valor *= 2;
        this.setAttribute('valor', this.valor); // Actualiza el atributo para reflejar el cambio
    }

    // Método para renderizar el contenido del componente
    render() {
        this.textContent = `Valor: ${this.valor}`;
    }
}

class Resta extends HTMLElement {

    static get observedAttributes() {
        return ['valor'];
    }

    constructor() {
        super();
        this.valor = parseInt(this.getAttribute('valor')) || 1;
    }  

    // Se llama cuando el elemento se agrega al DOM
    connectedCallback() {
        this.render();
        this.addEventListener('click', this.restar);
    }

    // Se llama cuando el elemento se elimina del DOM
    disconnectedCallback() {
        this.removeEventListener('click', this.restar);
    }

    // Se llama cuando un atributo observado cambia
    attributeChangedCallback(propiedad, oldValue,newValue) {
        if (propiedad === 'valor') {
            this.valor = parseInt(newValue);
            this.render();
        }
    }

    // Método para restar el valor por 1
    restar = () => {
        this.valor--;
        this.setAttribute('valor', this.valor); // Actualiza el atributo para reflejar el cambio
    }

    // Método para renderizar el contenido del componente
    render() {
        this.textContent = `Valor: ${this.valor}`;
    }
}

class Tabla extends HTMLElement {
  constructor() { // Constructor del componente
    super();
    this.attachShadow({ mode: 'open' });
    this.data = [];
  }
 // Setter y getter para la propiedad data
  set data(value) {
    this._data = value;
    this.render();
  }

  get data() {
    return this._data;
  }
// Método llamado cuando el componente se conecta al DOM
  connectedCallback() {
    // Datos iniciales
    this.data = [
      { nombre: 'Ana', edad: 28, ciudad: 'Madrid' },
      { nombre: 'Luis', edad: 35, ciudad: 'Valencia' },
    ];
  }
// Método para renderizar la tabla
  render() {
    if (!this.shadowRoot) return;
    const data = this._data || [];
    let html = '';
    html += `<style>
    .tabla {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0;
        border: 2px solid #333;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        max-width: 600px;
        margin: 20px auto;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .cabecera {
        background-color: #2c3e50;
        color: white;
        padding: 15px 10px;
        margin: 0;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        border-right: 1px solid #34495e;
        border-bottom: 1px solid #34495e;
    }

    .info:last-child .cabecera {
        border-right: none;
    }

    .info p {
        margin: 0;
        padding: 12px 10px;
        text-align: center;
        border-right: 1px solid #ecf0f1;
        border-bottom: 1px solid #ecf0f1;
        background-color: #f8f9fa;
        transition: background-color 0.3s ease;
    }

    .info p:last-child {
        border-bottom: none;
    }

    .info:last-child p {
        border-right: none;
    }

    /* Efectos para filas alternas */
    .info p:nth-child(even) {
        background-color: #f8f9fa;
    }

    .info p:nth-child(odd):not(.cabecera) {
        background-color: #ffffff;
    }
    </style>
    <div class="tabla">`;
    
    if (data.length > 0) {
    console.log(data);
   
    for (const key in data[0]) { 
        html += `<div class="info">`;           
        html += `<h3 class="cabecera">${key}</h3>`;
        for (const element of data) {
            html += `<p>${element[key]}</p>`;
        }
        html += `</div>`;
    }
    html += `</div>`;
    this.shadowRoot.innerHTML = html;
    }
  }
}


// Definir el nuevo elemento personalizado
customElements.define('mi-multiplicar', Multiplica);
customElements.define('mi-restar', Resta);
customElements.define('mi-tabla', Tabla);