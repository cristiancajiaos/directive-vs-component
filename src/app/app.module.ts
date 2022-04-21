import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HelloComponent } from './layout/hello/hello.component';
import { HelloDirective } from './layout/hello.directive';
import { HiDirective } from './layout/hi.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HelloComponent,
    HelloDirective,
    HiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
