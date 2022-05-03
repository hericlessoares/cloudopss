import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CandidatosService } from './candidatos.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidatosPostComponent } from './candidatos-post/candidatos-post.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './Template/header/header.component';
import { FooterComponent } from './Template/footer/footer.component';
import { NavbarComponent } from './Template/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/home/home.component';








@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    CandidatosPostComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [CandidatosService,
    
              HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
