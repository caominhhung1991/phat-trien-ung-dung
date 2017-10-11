import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// module
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
// guard 
import { AuthguardGuard } from './guard/authguard.guard'
// services
import { MainService } from './service/main.service'
import { AdminService } from './service/admin.service'
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './admin/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomePageComponent } from './guest/home-page/home-page.component';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    NotfoundComponent,
    HomePageComponent,
  ],
  providers: [
    MainService,
    AdminService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
