import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamMembersPage } from './team-members';

@NgModule({
  declarations: [
    TeamMembersPage
  ],
  imports: [
    IonicPageModule.forChild(TeamMembersPage),
    SharedModule,
  ],
  exports: [
    TeamMembersPage,
  ]
})

export class TeamMembersPageModule { }
