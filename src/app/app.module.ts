import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileService } from './shared/services/file.service';
import { FileOneComponent } from './file-one/file-one.component'; 

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FileUploadComponent,
    FileOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ FileService ], 
  bootstrap: [AppComponent]
})
export class AppModule { }


