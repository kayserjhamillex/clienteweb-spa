import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailblogComponent } from './detailblog/detailblog.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RecoverComponent } from './recover/recover.component';
import { PasswordComponent } from './password/password.component';
import { DetailserviceComponent } from './detailservice/detailservice.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServiceComponent
      },
      {
        path: 'detailservice/:id',
        component: DetailserviceComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'detailblog/:id',
        component: DetailblogComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'confirm/:id',
        component: ConfirmComponent
      },
      {
        path: 'recover',
        component: RecoverComponent
      },
      {
        path: 'passwort/:id',
        component: PasswordComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
