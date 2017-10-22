import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// module
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { GuestModule} from './guest/guest.module';
// guard 
import { AuthguardGuard } from './guard/authguard.guard'
// services
import { MainService } from './service/main.service';
import { AdminService } from './service/admin.service';
import { GuestService } from './service/guest.service';
import { TestService } from './service/test.service';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './admin/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AdminModule,
    GuestModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SignUpComponent,
    // ShoppingCartComponent,
    NotfoundComponent
  ],
  providers: [
    MainService,
    AdminService,
    GuestService,
    TestService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
