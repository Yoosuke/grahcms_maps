import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App'
import './index.css'

const GRAPHCMS_API = process.env.REACT_APP_GRAPHCMS_API ;

const client = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);