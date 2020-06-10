import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ExchangeRates } from './exchange-rates/exchange-rates.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule],
   providers: [],
  declarations: [AppComponent, ExchangeRates],
  bootstrap: [AppComponent, ]
  
})
export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) { 
    apollo.create({
      link: httpLink.create({ uri: 'https://48p1r2roz4.sse.codesandbox.io' }),
      cache: new InMemoryCache()
    });
  }

  
}
