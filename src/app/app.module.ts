import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {GimatriaService} from './services/gimatria/gimatria.service';
import {SearchComponent} from './components/search/search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        GimatriaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
