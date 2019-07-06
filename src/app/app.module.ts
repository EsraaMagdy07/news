import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { FeatureNewsComponent } from './feature-news/feature-news.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TopNewsComponent,
    DetailsComponent,
    FeatureNewsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
