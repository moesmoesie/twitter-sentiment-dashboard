import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { MetricCardComponent } from './components/metric-total-tweets-card/metric-total-tweets-card.component';
import { LineChartCardComponent } from './components/line-chart-card/line-chart-card.component';
import { BarChartCardComponent } from './components/bar-chart-card/bar-chart-card.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { KeywordsInputComponent } from './components/keywords-input/keywords-input.component';
import {LayoutModule} from '@angular/cdk/layout';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MetricSentimentCardComponent } from './components/metric-sentiment-card/metric-sentiment-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MetricCardComponent,
    LineChartCardComponent,
    BarChartCardComponent,
    TweetCardComponent,
    KeywordsInputComponent,
    SectionHeaderComponent,
    MetricSentimentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
