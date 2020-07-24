import html from '../templates/details.js';

export class Details extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-details', Details);