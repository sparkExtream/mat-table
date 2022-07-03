import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TableViewComponent } from './table-view/table-view.component';
import {dummyStruc} from './interface-list';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
  @ViewChild(TableViewComponent) table: any;
  details:dummyStruc | any;
  constructor() {}
  ngOnInit(): void {}
  setSearchValue = (value: string) => {
    this.table.applyFilter(value);
  };
  setDetails = (value:dummyStruc) => {
    this.details = value
  }
}
