class CompoHello extends HTMLElement {


    constructor() {
    super();

    const template = document.createElement('template')
    template.innerHTML = `
           <test-webco name="Ling Li">
                <span slot="age">J'ai 31 ans</span>
                <span slot="nationnality">China</span>
           </test-webco>
           <test-webco name="Thomas Lhomme">
                <span slot="age">J'ai 36 ans</span>
                <span slot="nationnality">France</span>
           </test-webco>
        `

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('hello-webco', CompoHello);
