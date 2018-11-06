import { Component, OnInit } from '@angular/core';



class MenuItem {
  name: string;
  routerNavigator: string;
  isActive: boolean;
  constructor (name:string, routerNavigator:string, isActive:boolean) {
    this.name = name;
    this.routerNavigator = routerNavigator;
    this.isActive = isActive;
  }
 
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  };
  changeActive(item: MenuItem)
  {
    this.MenuItemsArr.forEach(element => {
      element.isActive = (element.name == item.name) ? true: false;
    });
  }

  public MenuItemsArr  = [
    new MenuItem ("Home", "/greetings", true),
    new MenuItem ("FilmSearch", "/searchFilms", false),
    new MenuItem ("Contacts", "/contacts", false)
  ];
}




