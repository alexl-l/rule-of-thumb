import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { HandleErrorService } from './services/handle-error.service';
import { HomeComponent } from './components/main/home/home.component';
import { CardsComponent } from './components/main/home/cards/cards.component';
import { ProgressBarComponent } from './components/main/home/cards/progress-bar/progress-bar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AssetsPathPipe, HomeComponent, CardsComponent, ProgressBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatSnackBarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
