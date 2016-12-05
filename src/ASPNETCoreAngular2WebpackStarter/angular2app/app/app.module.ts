import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing, appRoutingProviders } from './app.routes';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { DataService } from './services/DataService';

import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ToasterModule,
        SlimLoadingBarModule.forRoot()
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        FooterComponent,
        NavigationComponent
    ],

    providers: [
        appRoutingProviders,
        Configuration,
        DataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
