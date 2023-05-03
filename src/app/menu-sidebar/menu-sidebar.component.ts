import {SelectionModel} from '@angular/cdk/collections';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css'],
})
export class MenuSidebarComponent implements OnInit {
  menu: any[] = [
    {
      displayName: 'Dashboard',
      //iconName: 'desktop_windows',
      //route: 'escritorio',
      menuName:'dashboard'
    },
    {
      displayName: 'Sales Person Details',
      //iconName: 'ballot',
      //route: 'entradasGADE',
      menuName:'Menu -1'
    },
    {
      displayName: 'Customer Details',
      //iconName: 'ballot',
      //route: 'entradasGADE',
      menuName:'Menu -2'
    },
    {
      displayName: 'Call Logs Details',
      //iconName: 'ballot',
     // route: 'entradasGADE',
     menuName:'Menu -3'
    }
  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {}

  Dashboard:boolean=true;
  menu1:boolean=false;
  menu2:boolean=false;
  menu3:boolean=false;
  menu4:boolean=false;

  menuSelect(a:any){
    //console.log(a);
    if(a=='Menu -1' || a=='Menu -2'){
      if(a=='Menu -1'){
        this.menu1=true;
        this.menu2=false;
      }
      else{
        this.menu2=true;
        this.menu1=false;
      }
      this.Dashboard=false;
      this.menu3=false;
      this.menu4=false;
    }
    if(a=='Menu -3' || a=='dashboard'){
      if(a=='Menu -3'){
        this.menu3=true;
        this.Dashboard=false;
      }
      else{
        this.Dashboard=true;
        this.menu3=false;
      }
      this.menu1=false;
      this.menu2=false;
    }
    
  }

//Dropdown
  options = ['Gilbert', 'Jorge', 'Dan','Ivan'];
  selectedValue = 'SELECT';

  selectOption(option: string) {
    this.selectedValue = option;
    console.log(option);
  }
}

