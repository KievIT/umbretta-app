import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { HttpModule }             from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageModule } from './modules/main-page/main-page.module';
// import { FirstLayoutComponent } from './components/first-layout/first-layout.component';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // FirstLayoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MainPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
