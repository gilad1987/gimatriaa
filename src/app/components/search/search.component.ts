import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    form: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.form = new FormGroup({
            characters: new FormControl('', [
                Validators.minLength(2),
                Validators.required
            ]),
        });
    }

    search(string) {

    }

    resetForm() {
        this.form.reset();
    }

}
