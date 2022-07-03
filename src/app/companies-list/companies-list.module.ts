import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list.component';
import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { CompaniesListsRoutingModule } from './companies-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    CompaniesListComponent,
    HeaderComponent,
    TableViewComponent,
    DetailsViewComponent,
  ],
  imports: [
    CommonModule,
    CompaniesListsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule
  ],
})
export class CompaniesListModule {}
