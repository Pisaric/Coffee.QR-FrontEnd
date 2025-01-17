import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from '../components/Xuniversal/navbar/navbar.component'
import { AuthModule } from '../auth/auth.module'
import { SharedModule } from '../shared/shared.module'
import { ToastrModule } from 'ngx-toastr'
import { FormsModule } from '@angular/forms'
import { ManagerModule } from '../components/CofeeManager/manager.module'

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthModule,
        SharedModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            countDuplicates: true,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'decreasing',
            timeOut: 3000,
        }),
        ManagerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
