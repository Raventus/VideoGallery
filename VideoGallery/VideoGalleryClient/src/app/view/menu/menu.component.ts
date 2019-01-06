import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth-service';



// Компонент для навигационного меню приложения
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','../../app.component.css']
})
export class MenuComponent implements OnInit {

  profile: any;
  public MenuItemsArr = [
    new MenuItem("Home", "/greetings", true, "fa-home"),
    new MenuItem("FilmSearch", "/searchFilms", false, "fa-search"),
    new MenuItem("Contacts", "/contacts", false, "fa-user")
  ];

  ngOnInit() {
  }

  constructor(private auth: AuthService) { 

    auth.handleAuthentication();   
  }
 
  // функция, меняющая цвет кнопки активной вкладки в меню
  changeActive(item: MenuItem)
  {

    this.MenuItemsArr.forEach(element => {
      element.isActive = (element.name == item.name) ? true: false;
    });
  }


}

class MenuItem {

  name: string;
  routerNavigator: string;
  isActive: boolean;

  constructor(name: string
    , routerNavigator: string
    , isActive: boolean
    , public fontAwesomeClass: string) {
      
    this.name = name;
    this.routerNavigator = routerNavigator;
    this.isActive = isActive;
  }
}




