// Crea una clase para el elemento titulo
class title extends HTMLElement {

    constructor() {

        // Llamar siempre a super primero en el constructor
        super();

        // Crear una shadow root
        var shadowRoot = this.attachShadow({ mode: 'open' });


        // -- CREACION DE ELEMENTOS --
        // Crear div titulo
        var divTitulo = document.createElement('div');
        divTitulo.setAttribute('class', 'divTitulo');
        // Crear video
        var video = document.createElement('video');
        video.setAttribute('class', 'video');
        video.src = "wc_title/utiles/animaciones/humo.mp4";
        video.autoplay = true;
        video.muted = true;
        // Crear titulo h1
        var h1 = document.createElement('h1');
        h1.setAttribute('class', 'titulo');


        // -- INSERCCION DE ELEMENTOS --
        // Insertar video a divTitulo
        divTitulo.appendChild(video);
        // Insertar h1 a divTitulo
        divTitulo.appendChild(h1);


        // -- CREACION DE ESTILOS EXTERNOS --
        // Aplicar estilos reset externos al shadow dom
        const linkElemReset = document.createElement('link');
        linkElemReset.setAttribute('rel', 'stylesheet');
        linkElemReset.setAttribute('href', 'wc_title/css/estilos_por_defecto.css');
        // Aplicar estilos personalizados externos al shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'wc_title/css/estilos.css');


        // adjuntar los elementos creados al shadow DOM
        shadowRoot.appendChild(linkElemReset);
        shadowRoot.appendChild(linkElem);
        shadowRoot.appendChild(divTitulo);

    }

    // Se ejecuta cada vez que el elemento se agrega al DOM
    connectedCallback() {

        // Nombre por defecto en caso de no tener
        if (!this.hasAttribute('name')) { this.name = "PROJECT F"; }
        if (!this.hasAttribute('size')) { this.size = "2"; }
        if (!this.hasAttribute('spacing')) { this.spacing = "0.5"; }
        if (!this.hasAttribute('width')) { this.width = "100"; }
        if (!this.hasAttribute('height')) { this.height = "100"; }
        if (!this.hasAttribute('object-fit')) { this.objectFit = "cover"; }
        if (!this.hasAttribute('last-letter-size')) { this.lastLetterSize = "1.5"; }
        if (!this.hasAttribute('last-letter-color')) { this.lastLetterColor = "#E50914"; }
        if (!this.hasAttribute('smoke')) { this.smoke = "linear-gradient(to right, #f00, #f00, #0f0, #0ff, #ff0, #ff0)"; }

    }

    // Se especifican los atributos observados para que "attributeChangedCallback" funcione
    static get observedAttributes() {
        return ['name', 'size', 'spacing', 'width', 'height', 'last-letter-size', 'last-letter-color', 'smoke', 'object-fit'];
    }

    // Se ejecuta cada vez que uno de los atributos del elemento cambia de alguna manera
    // Produce cambios dependiendo de los atributos utilizados en la etiqueta
    attributeChangedCallback(attrName, oldVal, newVal) {

        var shadowRoot = this.shadowRoot;

        switch (attrName) {
            case "name":
                var titulo = letrasTitulo(newVal);
                shadowRoot.querySelector(".titulo").innerHTML = titulo;
                break;
            case "size":
                shadowRoot.querySelector(".titulo").style.fontSize = newVal + "em";
                break;
            case "spacing":
                shadowRoot.querySelector(".titulo").style.letterSpacing = newVal + "em";
                break;
            case "width":
                shadowRoot.querySelector(".divTitulo").style.width = newVal + "%";
                break;
            case "height":
                shadowRoot.querySelector(".video").style.height = newVal + "vh";
                break;
            case "last-letter-size":
                shadowRoot.querySelector(".titulo > span:last-child").style.fontSize = newVal + "em";
                break;
            case "last-letter-color":
                shadowRoot.querySelector(".titulo > span:last-child").style.color = newVal;
                break;
            case "smoke":
                var smoke = shadowRoot.querySelector(".divTitulo");
                smoke.style.setProperty("--color-smoke", newVal);
                break;
            case "object-fit":
                shadowRoot.querySelector(".divTitulo video").style.objectFit = newVal;
                break;
        }

    }

    //Getter
    get name() {
        return this.hasAttribute('name');
    }
    get size() {
        return this.hasAttribute('size');
    }
    get spacing() {
        return this.hasAttribute('spacing');
    }
    get width() {
        return this.hasAttribute('width');
    }
    get height() {
        return this.hasAttribute('height');
    }
    get lastLetterSize() {
        return this.hasAttribute('last-letter-size');
    }
    get lastLetterColor() {
        return this.hasAttribute('last-letter-color');
    }
    get smoke() {
        return this.hasAttribute('smoke');
    }
    get objectFit() {
        return this.hasAttribute('object-fit');
    }

    //Setter
    set name(val) {
        if (val) {
            this.setAttribute('name', val);
        } else {
            this.removeAttribute('name');
        }
    }
    set size(val) {
        if (val) {
            this.setAttribute('size', val);
        } else {
            this.removeAttribute('size');
        }
    }
    set spacing(val) {
        if (val) {
            this.setAttribute('spacing', val);
        } else {
            this.removeAttribute('spacing');
        }
    }
    set width(val) {
        if (val) {
            this.setAttribute('width', val);
        } else {
            this.removeAttribute('width');
        }
    }
    set height(val) {
        if (val) {
            this.setAttribute('height', val);
        } else {
            this.removeAttribute('height');
        }
    }
    set lastLetterSize(val) {
        if (val) {
            this.setAttribute('last-letter-size', val);
        } else {
            this.removeAttribute('last-letter-size');
        }
    }
    set lastLetterColor(val) {
        if (val) {
            this.setAttribute('last-letter-color', val);
        } else {
            this.removeAttribute('last-letter-color');
        }
    }
    set smoke(val) {
        if (val) {
            this.setAttribute('smoke', val);
        } else {
            this.removeAttribute('smoke');
        }
    }
    set objectFit(val) {
        if (val) {
            this.setAttribute('object-fit', val);
        } else {
            this.removeAttribute('object-fit');
        }
    }

}

// Funcion que separa las letras del titulo con <span> y lo mete todo en un h1
function letrasTitulo(titulo) {

    // Recoge el texto que recibe por parametro
    var texto = titulo;
    var contenido = "";

    // Recorre el texto, almacena cada letra dentro de un span y lo inyecta en el h1
    for (i = 0; i < texto.length; i++) {

        if (texto[i] != " ") {
            contenido += "<span>" + texto[i] + "</span>";
        } else {
            contenido += "&nbsp";
        }

    }

    return contenido;

}

// Definir el nuevo elemento
customElements.define("wc-title", title);