import { Routes } from '@angular/router';
import {GreetingsComponent} from './Greetings/Greetings.component';
import {SearchFilmsComponent} from './SearchFilms/SearchFilms.component'

export const ROUTES: Routes = [
    {
        path: "greetings", component: GreetingsComponent
    },
    {
        path: "searchFilms", component: SearchFilmsComponent,

    },
    { path: "**", redirectTo: "/greetings" }


]