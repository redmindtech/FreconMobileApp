import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
declare var $: any;


interface Product {
  id: number;
  name: string;
  description : string;
  tableVisible: boolean;
  image:string;
  
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  salespeople: Product[] = [
    {
      id: 1,
      name: 'Freight forwarding service',
      description: 'We offer total solutions in sea-air, air-sea, and air-air services, with consolidation on all major trade routes.',
      tableVisible: false,
      image:'assets/cargo-ship.png'
    },
    {
      id: 2,
      name: 'Logistics service',
      description: 'Site inspection and project planning,Route surveys and selection of reliable carriers,Track and trace with real-time reporting.',
      tableVisible: false,
      image:'assets/delivery.png'
    },
    {
      id: 3,
      name: 'LCL service',
      description: 'Global Presence, Weekly Sailings, Online Tracking, Competive Pricing,E- Booking, Shorter Transits, Superior Network Features',
      tableVisible: false,
      image:'assets/logistics.png'
    },
    {
      id: 4,
      name: 'Airplane charter service',
      description: 'We are offering Part Airplane Charter Service to our clients.',
      tableVisible: false,
      image:'assets/delivery new.png'
    }
  ];
  customers:any=[{name:'cust1'},
  {name:'cust2'},
  {name:'cust3'},
  {name:'cust4'},
  {name:'cust5'},];

  constructor(public router:Router,
    public service:AppserviceService) { }

  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    $(document).ready(() => {
      // Bounce button
      $("#animatebutton").click(() => {
        const element: Element | null = document.querySelector('.animatebutton');
        if (element !== null) {
          element.classList.add('animated', 'pulse');
          setTimeout(() => {
            element.classList.remove('pulse');
          }, 1000);
        }
      });
    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  
  
  salespage(product1:any): void {
    // Submit login request to server
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['/salesperson']);
      //console.log(product);
      this.service.productname=product1;
    }, 500);
     
    
  }
  
  
  
  
  
  
  
  

}
