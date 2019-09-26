import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { FormUsersComponent } from './form-users/form-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    FormUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
