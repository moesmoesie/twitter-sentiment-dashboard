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
import { MetricsSectionComponent } from './components/metrics-section/metrics-section.component';
import { TweetsSectionComponent } from './components/tweets-section/tweets-section.component'; 
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsSectionComponent } from './components/charts-section/charts-section.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InstructionsDialogComponent } from './components/instructions-dialog/instructions-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsInputComponent,
    BarChartComponent,
    LandingSectionComponent,
    KeywordSectionComponent,
    MetricsSectionComponent,
    TweetsSectionComponent,
    TweetCardComponent,
    ChartsSectionComponent,
    InstructionsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }