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

const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    // { path: 'admin', canActivate: [AuthguardGuard], component: AdminComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', pathMatch: 'prefix', children: [
        { path: ':name', component: UserComponent },
        { path: ':name/:id', component: UserComponent }
    ]},
    { path: 'home-page', component: HomePageComponent },
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