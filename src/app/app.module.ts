import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
// import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// los modulos
import { PagesModule } from './pages/pages.module';
import { AplicationModule } from './aplication/aplication.module';

// para login
import {  GoogleLoginProvider, SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig(
  [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('126510371816-nbtdi0b0oa8ek49106dgi42jqn0vapa7.apps.googleusercontent.com')
    },
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
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AplicationModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
