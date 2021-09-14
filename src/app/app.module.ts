import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NavbarComponent } from './shared/navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    HttpClientModule,
    NzSpinModule,
    NzMessageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
