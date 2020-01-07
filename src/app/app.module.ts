import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { BootCardsComponent } from './boot-cards/boot-cards.component';
import { FolderComponent } from './folder/folder.component';
import { BootNavbarComponent } from './boot-navbar/boot-navbar.component';
import { BootCarouselComponent } from './boot-carousel/boot-carousel.component';
import { BootPostsComponent } from './boot-posts/boot-posts.component';
import { BootFooterComponent } from './boot-footer/boot-footer.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'questions', component: BootCardsComponent },
  { path: 'post/:id', component: BootCardsComponent},
  { path: 'postArchive', component: BootPostsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    BootCardsComponent,
    FolderComponent,
    BootNavbarComponent,
    BootCarouselComponent,
    BootPostsComponent,
    BootFooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
