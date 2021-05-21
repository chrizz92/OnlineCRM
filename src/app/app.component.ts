import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineCRM';
  pageHeading = "Welcome to the Angular-Tutorial";
  pageCount = 30;
  userObject = { 'firstname':'Demo', 'lastname':'Object'};
  isUserLoggedIn = true;

  contacts = [
    {
      'firstname':'Max',
      'lastname':'Mustermann',
      'contactId':1234
    },
    {
      'firstname':'Marta',
      'lastname':'Musterfrau',
      'contactId':3456
    },
    {
      'firstname':'Mo',
      'lastname':'Mustermensch',
      'contactId':6789
    }
  ]

  imgUrl = 'test.png';
  imgAlt = 'This is missing image text';

  colorVal = 'red';
  colVal = 2;

  click(){
    console.log('Button was clicked');
  }

  sayHello(a,b){
    console.log('Hello from the Button with parameters '+a+' and '+b);
  }

  highlighBGColor(){
    console.log('BG is highlighted');
  }

  inputBox(){
    console.log('Textbox is on focus');
  }

  username = "Platzhalter";
  month = 8;

  DateExample = Date.now();
  currencyExample = 1.25;
  percentExample = 0.6666;


}
