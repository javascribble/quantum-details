import { Component, template } from '../../references/quantum.js';
import html from '../templates/element.js';

export class Details extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-details', Details);