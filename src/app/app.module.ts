import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ForImgDirective } from './home/for-img.directive';
import { ForIconsDirective } from './contact/for-icons.directive';

const appRoutes: Routes=[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    ServicesComponent,
    ContactComponent,
    ServiceListComponent,
    ForImgDirective,
    ForIconsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
