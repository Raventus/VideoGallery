import { Routes } from '@angular/router';
import {GreetingsComponent} from './greetings/greetings.component';
import {SearchFilmComponent} from './search-film/search-film.component';

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
    { path: "**", redirectTo: "/greetings" }


]