import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
//creating an array

// create an array of objects
salesPersonList: SalesPerson[] = [
  new SalesPerson("Tapas", "Kumar", "tapas.m@gmail.com", 50000),
  new SalesPerson("Ajoy", "Bhwomick", "ajoy.b@gmail.com", 40000),
  new SalesPerson("Ajit", "Bhowmick", "ajith.b@gmail.com", 90000),
  new SalesPerson("Moni", "Mollick", "moni.m@gmail.com", 60000)
];
  constructor() { }

  ngOnInit(): void {
  }

}
