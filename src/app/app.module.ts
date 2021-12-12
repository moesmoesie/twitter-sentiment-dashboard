import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { KeywordsInputComponent } from './components/keywords-input/keywords-input.component';
import {LayoutModule} from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import {MatButtonModule} from '@angular/material/button';
import { KeywordSectionComponent } from './components/keyword-section/keyword-section.component';


@NgModule({
  declarations: [
    AppComponent,
    KeywordsInputComponent,
    LandingSectionComponent,
    KeywordSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }