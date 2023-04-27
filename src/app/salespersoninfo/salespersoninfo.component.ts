import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-salespersoninfo',
  templateUrl: './salespersoninfo.component.html',
  styleUrls: ['./salespersoninfo.component.css']
})



export class SalespersoninfoComponent implements OnInit {

  customerinfo: Customer[] = [
    {
      id:1,
      name: 'James',
      address: '132, My Street, Kingston, New York',
      phone: '+16102458415',
      request: 'Pending',
      status:'Active',
      comments:'',
      showmorebool: false
      
    },
    {
      id:2,
      name: 'William',
      address: '813 Howard Street Oswego NY',
      phone: '+18143511260',
      request: 'Pending',
      status:'Inactive',
      comments:'',
      showmorebool: false
      
    },
    {
      id:3,
      name: 'Alexa',
      address: '71 Cherry Court Southampton',
      phone: '+18143008898',
      request: 'Pending',
      status:'Active',
      comments:'',
      showmorebool: false
    }
  ];

  productname: string='';
  salespersonName: string='';

  constructor(public router:Router,
    public service:AppserviceService) { }

  ngOnInit(): void {
    this.productname=this.service.productname;
    this.salespersonName=this.service.salespersonName;
   
  }
 
  
  showmore(id: number): void {
    const salesperson = this.customerinfo.find(sp => sp.id === id);
    if (salesperson) {
      salesperson.showmorebool = !salesperson.showmorebool;
    }
  }

 

  
}

interface Customer {
  id: number;
  name: string;
  address: string;
  phone: string;
  request: string;
  status:string;
  comments:string;
  showmorebool: boolean;
  
  

}

