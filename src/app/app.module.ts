import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ExchangeRates } from './exchange-rates/exchange-rates.component';

// Apollo
import { GraphQLModule } from "./graphql.module";


@NgModule({
  imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule, GraphQLModule],
  providers: [],
  declarations: [AppComponent, ExchangeRates],
  bootstrap: [AppComponent, ]
  
})
export class AppModule { 
  constructor() { }
  
}
