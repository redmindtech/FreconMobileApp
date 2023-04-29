import {SelectionModel} from '@angular/cdk/collections';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
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
    },
    {
      displayName: 'Menu -1',
      //iconName: 'desktop_windows',
      //route: 'escritorio',
    },
    {
      displayName: 'Menu -2',
      //iconName: 'ballot',
      //route: 'entradasGADE',
    },
    {
      displayName: 'Menu -3',
      //iconName: 'ballot',
      //route: 'entradasGADE',
    },
    {
      displayName: 'Menu -4',
      //iconName: 'ballot',
     // route: 'entradasGADE',
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

  dashboard:boolean=true;
  menu1:boolean=false;
  menu2:boolean=false;
  menu3:boolean=false;
  menu4:boolean=false;

  menuSelect(a:any){
    console.log(a);
  }

}

