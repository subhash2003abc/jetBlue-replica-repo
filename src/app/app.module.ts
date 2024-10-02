import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbariconComponent } from './navbaricon/navbaricon.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Bodycontent1Component } from './bodycontent1/bodycontent1.component';
import { Bodycontent2Component } from './bodycontent2/bodycontent2.component';
import { Bodycontent3Component } from './bodycontent3/bodycontent3.component';
import { Bodycontent4Component } from './bodycontent4/bodycontent4.component';
import { Bodycontent5Component } from './bodycontent5/bodycontent5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbariconComponent,
    NavBarComponent,
    Bodycontent1Component,
    Bodycontent2Component,
    Bodycontent3Component,
    Bodycontent4Component,
    Bodycontent5Component,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
