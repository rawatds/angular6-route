import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionalComponent } from './professional/professional.component';
import { Error404Component } from './error404/error404.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Route[] = [
  { path: '', redirectTo: '/personal', pathMatch: 'full' }, // default
  { path: 'personal', component: PersonalComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'skills', component: SkillsComponent },

  //Child routes
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, // default at child level
      { path: 'profile', component: ProfileComponent },
      { path: 'contactus', component: ContactusComponent }
    ]
  },

  // Handling error
  { path: '**', component: Error404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
