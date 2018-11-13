import { Routes } from '@angular/router';
import {GreetingsComponent} from './greetings/greetings.component';
import {SearchFilmComponent} from './search-film/search-film.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ViewFilmsComponent} from './view-films/view-films.component';

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