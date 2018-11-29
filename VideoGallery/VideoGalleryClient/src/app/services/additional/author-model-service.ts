import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorModelService {
  public Name: string = "Andrew";
  public LastName: string = "Koldyrev";

  getFullName(): string {
      return this.Name + " " + this.LastName;
  }
  public Phone : string = "8-913-198-4994";
  public EMail: string = "raven4791f@mail.ru";

  private TestPhone: RegExp = new RegExp ("^\\d[\\d\(\)\ -]{4,14}\\d$");
  private TestEmail: RegExp = new RegExp ("^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$");

   checkValidPhone ():boolean {
    return this.TestPhone.test(this.Phone);
  }
   checkValidEmail(): boolean {
    return this.TestEmail.test(this.EMail);
  }

  CheckValidContactsParameters (): boolean {
      return (this.checkValidPhone () && this.checkValidEmail());
  }


  constructor() { 
  }
}