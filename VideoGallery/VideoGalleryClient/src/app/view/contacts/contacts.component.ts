import { Component, OnInit } from '@angular/core';
import  {AuthorModelService} from '../../services/additional/author-model-service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css' , ]
})
export class ContactsComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private _author :AuthorModelService) { 
  }

  getAuthorName (): string {

    return this._author.getFullName();
  }

  checkValidContactInformation() : boolean {

    return this._author.CheckValidContactsParameters();
  }

  getPhoneNumber(): string {

    return this._author.Phone;
  }

  getEmail(): string {

    return this._author.EMail;
  }

  // test/ need to deleted
  checkPhone(): boolean {

    return this._author.checkValidPhone();
  }
  
  checkEmail(): boolean {

    return this._author.checkValidEmail();
  }
}
