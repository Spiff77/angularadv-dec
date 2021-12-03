class CompoTest extends HTMLElement {


    constructor() {
    super();

    const template = document.createElement('template')
    template.innerHTML = `
            <style type="text/css">
            h3 {
                color: darksalmon;
            }
            p{
                color: yellowgreen;
            }
            div{
                color:darkcyan;
            }
            .success {
            background-color: lightgreen;
            color darkgreen;
            }
            </style>

            <h3>Hello component</h3>
            <div id="hellodiv">Hello World ${this.getAttribute('name')}</div>
            <p><slot name="age"></slot></p>
            <div><slot name="nationnality"></slot></div>
            <button id="monboutton">Click me!</button>
        `

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        const monboutton = this.shadowRoot.getElementById('monboutton')
        const hellodiv = this.shadowRoot.getElementById('hellodiv')
        monboutton.addEventListener( 'click', () => {
            hellodiv.classList.add('success')
        })
    }
}

window.customElements.define('test-webco', CompoTest);
