import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {GimatriaService} from './services/gimatria/gimatria.service';
import {SearchComponent} from './components/gimatria/search/search.component';
import {GimatriaComponent} from './components/gimatria/gimatria.component';
import {SearchResultsComponent} from './components/gimatria/search-results/search-results.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        GimatriaComponent,
        SearchResultsComponent,
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
