import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {dummy_data} from 'src/assets/mock-data/mock_data';
import {dummyStruc} from '../interface-list';

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @Output() details = new EventEmitter();
  displayedColumns: string[] = [
    'date',
    'list_name',
    'entities',
    'action',
    'details',
  ];
  dataSource = new MatTableDataSource<dummyStruc>(dummy_data);
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter = (searchValue: string) => {
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }
  emitDetails = (value:dummyStruc) => {
    this.details.emit(value);
  }
}