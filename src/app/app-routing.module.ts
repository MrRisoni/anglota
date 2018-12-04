import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import {MainAppComponent} from './main-app/main-app.component';
import {ManageBookingComponent} from './manage-booking/manage-booking.component';


const routes: Routes = [
    {path: '', component: MainAppComponent},
    {path: 'manage', component: ManageBookingComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}


