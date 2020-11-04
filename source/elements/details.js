import { Component, template, define } from '../import.js';
import html from '../templates/details.js';

export class Details extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-details', Details);