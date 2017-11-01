import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// module
import { AdminRoutingModule } from './admin/admin-routing.module';
// guard
import { AuthguardGuard } from './guard/authguard.guard'
// component
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './admin/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomePageComponent } from './guest/home-page/home-page.component';
import { ProductDetailComponent} from './guest/product-detail/product-detail.component';
import { ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import { HoanTatThanhToanComponent } from './guest/hoan-tat-thanh-toan/hoan-tat-thanh-toan.component';
import { QuanLyTaiKhoanComponent } from './guest/quan-ly-tai-khoan/quan-ly-tai-khoan.component';

const routes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'admin', canActivate: [AuthguardGuard], component: AdminComponent },
    { path: 'guest', component: QuanLyTaiKhoanComponent},
    // { path: 'admin', component: AdminComponent},
    { path: 'login', component: LoginComponent },
    { path: 'users', pathMatch: 'prefix', children: [
        { path: ':name', component: UserComponent },
        { path: ':name/:id', component: UserComponent }
    ]},
    { path: 'hoan-tat-thanh-toan', component: HoanTatThanhToanComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'home-page', component: HomePageComponent },
    // { path: 'product-detail', component: ProductDetailComponent },
    { path: '**', component: NotfoundComponent }
]

@NgModule({
    imports: [
        AdminRoutingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule] 
})

export class AppRoutingModule { }