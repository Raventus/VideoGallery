import { Routes } from '@angular/router';
import {GreetingsComponent} from './view/greetings/greetings.component';
import {SearchFilmComponent} from './view/search-film/search-film.component';
import {ContactsComponent} from './view/contacts/contacts.component';
import {ViewFilmsComponent} from './view/view-films/view-films.component';

export const ROUTES: Routes = [
    { 
        path: '', component: GreetingsComponent
    },
    {
        path: "greetings", component: GreetingsComponent
    },
    {
        path: "searchFilms", component: SearchFilmComponent,
    },
    {
        path: "contacts", component: ContactsComponent,
    },
    {
        path: "viewFilms", component: ViewFilmsComponent,
    },
    { path: "**", redirectTo: "/greetings" }


]