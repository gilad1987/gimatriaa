import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {GimatriaService} from './services/gimatria/gimatria.service';
import {SearchComponent} from './components/search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [
        GimatriaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
