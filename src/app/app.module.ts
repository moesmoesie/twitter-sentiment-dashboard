import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { MetricsContainerComponent } from './components/metrics-container/metrics-container.component';
import { GraphsContainerComponent } from './components/graphs-container/graphs-container.component';
import { LineChartCardComponent } from './components/line-chart-card/line-chart-card.component';
import { BarChartCardComponent } from './components/bar-chart-card/bar-chart-card.component';
import { TweetsContainerComponent } from './components/tweets-container/tweets-container.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { KeywordsContainerComponent } from './components/keywords-container/keywords-container.component';
import { KeywordsInputComponent } from './components/keywords-input/keywords-input.component';
import { MenuComponent } from './components/menu/menu.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricCardComponent,
    MetricsContainerComponent,
    GraphsContainerComponent,
    LineChartCardComponent,
    BarChartCardComponent,
    TweetsContainerComponent,
    TweetCardComponent,
    KeywordsContainerComponent,
    KeywordsInputComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
