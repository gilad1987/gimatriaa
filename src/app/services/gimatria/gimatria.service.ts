import {Injectable} from '@angular/core';

@Injectable()
export class GimatriaService {

    private hebCharacters = {
        'א': 1,
        'ב': 2,
        'ג': 3,
        'ד': 4,
        'ה': 5,
        'ו': 6,
        'ז': 7,
        'ח': 8,
        'ט': 9,
        'י': 10,
        'כ': 20,
        'ל': 30,
        'מ': 40,
        'נ': 50,
        'ס': 60,
        'ע': 70,
        'פ': 80,
        'צ': 90,
        'ק': 100,
        'ר': 200,
        'ש': 300,
        'ת': 400,
        'תק': 500,
        'תר': 600,
        'תש': 700,
        'תת': 800,
        'תתק': 900,
        'תתר': 1000
    };

    constructor() {
    }

    getCharValue(char: string) {
        return this.hebCharacters[char];
    }

    calculate(string: string) {
        const reducer = (accumulator, currentValue) => {
            return this.getCharValue(currentValue) + accumulator;
        };
        const gimatriaPshuta = string.split(' ').join('').split('').reduce(reducer, 0);

        return gimatriaPshuta;
    }
}
