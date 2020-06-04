import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AplicationRoutingModule } from './aplication-routing.module';
import { AplicationComponent } from './aplication.component';
import { ProfileComponent } from './client/profile/profile.component';
import { BookingComponent } from './client/booking/booking.component';
import { DetailbookingComponent } from './client/detailbooking/detailbooking.component';
import { SelectserviceComponent } from './selectservice/selectservice.component';
import { SelectworkerComponent } from './selectworker/selectworker.component';
import { SelecttimeComponent } from './selecttime/selecttime.component';
import { PasarelaComponent } from './pasarela/pasarela.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// para login y register
import {  GoogleLoginProvider, SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { LogintemplateComponent } from '../template/logintemplate/logintemplate.component';
import { RegistertemplateComponent } from '../template/registertemplate/registertemplate.component';
import { RegisterapptemplateComponent } from '../template/registerapptemplate/registerapptemplate.component';
import { LoginapptemplateComponent } from '../template/loginapptemplate/loginapptemplate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const config = new AuthServiceConfig(
  [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('126510371816-nbtdi0b0oa8ek49106dgi42jqn0vapa7.apps.googleusercontent.com')
    },
    // para la pagina web en el dominio
    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider('968465453568098')
    // },
    // para el localhost
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2156200141339667')
    },
  ]
);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AplicationComponent,
    ProfileComponent,
    BookingComponent,
    DetailbookingComponent,
    SelectserviceComponent,
    SelectworkerComponent,
    SelecttimeComponent,
    PasarelaComponent,
    TicketComponent,
    // wasa
    LoginComponent,
    RegisterComponent,
    // templates
    LogintemplateComponent,
    RegistertemplateComponent,
    LoginapptemplateComponent,
    RegisterapptemplateComponent,
    ConfirmationComponent,
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AplicationModule { }
