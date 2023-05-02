import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-person-table',
  templateUrl: './sales-person-table.component.html',
  styleUrls: ['./sales-person-table.component.css']
})
export class SalesPersonTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['s.no', 'name', 'email', 'contact','status', 'show', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  status: string;
  contact:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gilbert', email: 'Gilbert@gmail.com',contact:+1342466, status: 'Pending'},
  {position: 2, name: 'Jorge', email: 'Jorge@gmail.com',contact:+1462577, status: 'Done'},
  {position: 3, name: 'Dan', email: 'Dan@gmail.com', contact:+1564532,status: 'Pending'},
  {position: 4, name: 'Ivan', email: 'Ivan@gmail.com',contact:+5626277, status: 'Done'},
  
  
];