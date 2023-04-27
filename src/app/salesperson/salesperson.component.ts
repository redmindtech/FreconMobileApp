import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent implements OnInit {

  salespeople: Salesperson[] = [
    {
      id: 1,
      name: 'Alice',
      tableVisible: false,
      customers: [
        { name: 'Customer 1', address: 'Address 1', phone: 'Phone 1', request: 'Request 1',status:'Status 1',comments:'Comments 1',role:'Senior Customer Representative' },
        { name: 'Customer 2', address: 'Address 2', phone: 'Phone 2', request: 'Request 2' ,status:'Status 2',comments:'Comments 2',role:'Senior Customer Representative'},
        { name: 'Customer 3', address: 'Address 3', phone: 'Phone 3', request: 'Request 3' ,status:'Status 3',comments:'Comments 3',role:'Senior Customer Representative'}
      ],
      image:'assets/boy.png',
      designation:'Executive customer representative'
    },
    {
      id: 2,
      name: 'Bob',
      tableVisible: false,
      customers: [
        { name: 'Customer 4', address: 'Address 4', phone: 'Phone 4', request: 'Request 4' ,status:'Status 4',comments:'Comments 4',role:'Senior Customer Representative'},
        { name: 'Customer 5', address: 'Address 5', phone: 'Phone 5', request: 'Request 5' ,status:'Status 5',comments:'Comments 5',role:'Senior Customer Representative'}
      ],
      image:'assets/girl.png',
      designation:'Customer specialist'
    },
    {
      id: 3,
      name: 'Jonathan',
      tableVisible: false,
      customers: [
        { name: 'Customer 1', address: 'Address 1', phone: 'Phone 1', request: 'Request 1',status:'Status 1',comments:'Comments 1',role:'Senior Customer Representative' },
        { name: 'Customer 2', address: 'Address 2', phone: 'Phone 2', request: 'Request 2' ,status:'Status 2',comments:'Comments 2',role:'Senior Customer Representative'},
        { name: 'Customer 3', address: 'Address 3', phone: 'Phone 3', request: 'Request 3' ,status:'Status 3',comments:'Comments 3',role:'Senior Customer Representative'}
      ],
      image:'assets/boynew.png',
      designation:'Junior representative'
    },
    {
      id: 4,
      name: 'Claire',
      tableVisible: false,
      customers: [
        { name: 'Customer 4', address: 'Address 4', phone: 'Phone 4', request: 'Request 4' ,status:'Status 4',comments:'Comments 4',role:'Senior Customer Representative'},
        { name: 'Customer 5', address: 'Address 5', phone: 'Phone 5', request: 'Request 5' ,status:'Status 5',comments:'Comments 5',role:'Senior Customer Representative'}
      ],
      image:'assets/girlnew.png',
      designation:'Senior representative'
    }
  ];
  productName: string=''
  // salespeople: Salesperson[]=[
  //   {name:'Alice',role:'Senior Customer Representative'}
  // ]
  constructor(public service:AppserviceService,
    public router:Router) { }

  ngOnInit(): void {
    this.productName=this.service.productname
  }

  toggleTable(id: number): void {
    const salesperson = this.salespeople.find(sp => sp.id === id);
    if (salesperson) {
      salesperson.tableVisible = !salesperson.tableVisible;
    }
  }


  salespersoninfo(salespersonName:any,productName:any): void {
    
    this.router.navigate(['/salespersoninfo']);
    //console.log(product);
    this.service.salespersonName=salespersonName;
    this.service.productname=productName;
}


  popupComments:string='';
  Viewpopup(customer:any){
    console.log(customer);
    this.popupComments=customer.comments;
  }
}
interface Customer {
  name: string;
  address: string;
  phone: string;
  request: string;
  status:string;
  comments:string;
  role:string;
  

}

interface Salesperson {
  id: number;
  name: string;
  //role:string;
  tableVisible: boolean;
  customers: Customer[];
  image:string;
  designation: string;
}
