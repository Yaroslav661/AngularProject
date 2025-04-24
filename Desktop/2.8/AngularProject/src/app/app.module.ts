import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';
import { TodoState } from './store/todo.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: true
    }),
    NgxsLoggerPluginModule.forRoot({
      collapsed: false,
      disabled: false
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}