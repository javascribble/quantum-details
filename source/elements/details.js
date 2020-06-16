import { Quantum, define } from '../../references/quantum.js';
import { details } from '../templates/details.js';

export class Details extends Quantum {
    constructor() {
        super(details);
    }
}

define(Details);