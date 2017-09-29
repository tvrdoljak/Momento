import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {FollowersComponent} from '../app/components/followers/followers.component';
import {FollowingComponent} from '../app/components/following/following.component';
import {ProfileComponent} from "../app/components/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'followers',
    component: FollowersComponent,
  },

  {
    path: 'following',
    component: FollowingComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
