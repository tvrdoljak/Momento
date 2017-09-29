import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../modules/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModules} from '../modules/material-modules';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/home.component';
import {FollowingComponent} from './components/following/following.component';
import {FollowersComponent} from './components/followers/followers.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MdDialogModule} from '@angular/material';
import {CommentsComponent} from './components/comments/comments.component';

import {CardService} from '../services/card.service';
import {FollowersService} from '../services/followers.service';
import {FollowingService} from '../services/following.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FollowingComponent,
    FollowersComponent,
    ProfileComponent,
    CommentsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModules,
    FlexLayoutModule,
    MdDialogModule,
    FormsModule
  ],
  entryComponents: [
    CommentsComponent
  ],
  providers: [
    CardService,
    FollowersService,
    FollowingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
