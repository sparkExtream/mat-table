import { Component, Input, OnInit } from '@angular/core';
import {dummyStruc} from '../interface-list';

@Component({
  selector: 'details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  @Input() details:dummyStruc | any;
  constructor() { }

  ngOnInit(): void {
  }

}
