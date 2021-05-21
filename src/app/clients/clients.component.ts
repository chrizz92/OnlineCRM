import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

clientList = [
  {clientId: 10, firstName: 'Max', lastName: 'Muster'},
  {clientId: 11, firstName: 'Martin', lastName: 'Mayer'},
  {clientId: 12, firstName: 'Markus', lastName: 'Mueller'},
  {clientId: 13, firstName: 'Martha', lastName: 'Musterffrau'},
  {clientId: 14, firstName: 'Mo', lastName: 'Mann'},
  {clientId: 15, firstName: 'Mer', lastName: 'Mbalu'},
];

  constructor() { }

  ngOnInit(): void {
  }

}
