import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';
import { ContactComponent } from './contact/contact.component';
import { RecoverComponent } from './recover/recover.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordComponent } from './password/password.component';
import { DetailserviceComponent } from './detailservice/detailservice.component';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// para login
import {  GoogleLoginProvider, SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

import { from } from 'rxjs';


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
    PagesComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    BlogComponent,
    DetailblogComponent,
    ContactComponent,
    RecoverComponent,
    ConfirmComponent,
    PasswordComponent,
    DetailserviceComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
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
export class PagesModule { }
