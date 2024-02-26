import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'nesto', component: OtherComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OtherComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
