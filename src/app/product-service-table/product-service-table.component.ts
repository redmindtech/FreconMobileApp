import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service-table',
  templateUrl: './product-service-table.component.html',
  styleUrls: ['./product-service-table.component.css']
})
export class ProductServiceTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['s.no', 'name', 'email', 'contact','product', 'show', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  product: string;
  contact:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Wade', email: 'Wade@gmail.com',contact:+1342466, product: 'Logistics'},
  {position: 2, name: 'Dave', email: 'Dave@gmail.com',contact:+1462577, product: 'Airfreight'},
  {position: 3, name: 'Seth', email: 'Seth@gmail.com', contact:+1564532,product: 'Charter plane'},
  {position: 4, name: 'Ivan', email: 'Ivan@gmail.com',contact:+5626277, product: 'Consolidation'},
  {position: 5, name: 'Riley', email: 'Riley@gmail.com', contact:+6795959,product: 'Airfreight'},
  
];