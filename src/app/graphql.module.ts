import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql';

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
})
export class GraphQLModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink
    ) {
        // create Apollo
        apollo.create({
            link: httpLink.create({ uri }),
            cache: new InMemoryCache(),
        });
    }
}
