import html from '../templates/details.js';

const { Component, template, define } = quantum;

export class Details extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-details', Details);