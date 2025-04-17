import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolver } from './post.resolver';
import { ApiService } from './api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'post',
    component: PostDetailComponent,
    resolve: {
      post: PostResolver
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [ApiService, PostResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }