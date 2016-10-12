import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {AboutComponent} from "./about/about.component";
import {DhisMenuComponent} from "./dhis-menu/ng2-dhis-menu";
import { TreeModule } from 'angular2-tree-component';
import {DhisOrgUnitTreeComponent} from "./dhis-org-unit-tree/ng2-dhis-org-unit-tree";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DhisMenuComponent,
    DhisOrgUnitTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
