import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Output()
    search: EventEmitter<any> = new EventEmitter();

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

    onSearch(string) {
        this.search.emit(string);
    }

    resetForm() {
        this.form.reset();
    }

}
