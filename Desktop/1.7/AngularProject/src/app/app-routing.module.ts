import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineComponent } from './inline/inline.component'

const routes: Routes = [
  { 
    path: 'open-graph', 
    component: InlineComponent,
    data: { 
      title: 'Open Graph Page',
      metaTags: [
        { property: 'og:title', content: 'The Rock' },
        { property: 'og:type', content: 'video.movie' },
        { property: 'og:url', content: 'https://www.imdb.com/title/tt0117500/' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
