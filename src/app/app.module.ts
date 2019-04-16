import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule,MatCardModule,  MatSidenavModule, MatListModule, MatToolbarModule, MatExpansionModule , MatFormFieldModule,MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
  import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {NavigationComponent} from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideotabComponent } from './videotab/videotab.component';
import { ArComponent } from './first/ar/ar.component';
import { AdpComponent } from './second/adp/adp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,FirstComponent,SecondComponent, NavigationComponent, VideotabComponent, ArComponent, AdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
    ,BrowserAnimationsModule, MatExpansionModule, MatFormFieldModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
