import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicationComponent } from './aplication.component';
// cliente
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './client/profile/profile.component';
import { BookingComponent } from './client/booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DetailbookingComponent } from './client/detailbooking/detailbooking.component';
// aplicacion
import { TicketComponent } from './ticket/ticket.component';
import { PasarelaComponent } from './pasarela/pasarela.component';
import { SelecttimeComponent } from './selecttime/selecttime.component';
import { SelectworkerComponent } from './selectworker/selectworker.component';
import { SelectserviceComponent } from './selectservice/selectservice.component';

const routes: Routes = [
  {
    path: 'app',
    component: AplicationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'confirm/:id/:codigo',
        component: ConfirmationComponent
      },
      {
        path: 'pasarela/:id/:fecha/:worker/:hora',
        component: PasarelaComponent
      },
      {
        path: 'selectservice/:id',
        component: SelectserviceComponent
      },
      {
        path: 'selectworker/:id/:fecha',
        component: SelectworkerComponent
      },
      {
        path: 'selecttime/:id/:fecha/:worker',
        component: SelecttimeComponent
      },
      {
        path: 'ticket/:id',
        component: TicketComponent
      },
      {
        path: 'client-profile',
        component: ProfileComponent
      },
      {
        path: 'client-booking',
        component: BookingComponent
      },
      {
        path: 'client-detailbooking/:id',
        component: DetailbookingComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
