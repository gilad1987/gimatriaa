import {Component} from '@angular/core';

import {GimatriaService} from './services/gimatria/gimatria.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private gimatria: GimatriaService) {
console.log(gimatria.calculate('דנה גלעד'));
    }

}
