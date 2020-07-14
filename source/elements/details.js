import { Component } from '../../references/quantum.js';

export class Details extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-details');

    static attributes = [];
}

customElements.define('quantum-details', Details);