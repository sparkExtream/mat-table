import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'header-view',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef | any;
  searchValue: string = '';
  @Output() search = new EventEmitter();
  ngOnInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.emitSearchValue(text);
      });
  }

  clearSearch = () => {
    this.searchValue = '';
    this.emitSearchValue('');
  }

  emitSearchValue = (value: string) => this.search.emit(value);
}
