import '@babel/polyfill';
import express from 'express';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';

import schema from './graphql/schema';
import resolvers from './graphql/resolvers';
import constants from './config/constants';

const app = express();

app.use((req, res, next) => setTimeout(next, 0));

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: ({ req, res }) => ({}),
	uploads: false,
	introspection: true,
	playground: true,
});

server.applyMiddleware({ app, path: constants.GRAPHQL_PATH });

app.use('/', (req, res) => res.send('Welcome to the GraphQL server'));

const _httpServer = http.createServer(app);

_httpServer.listen(constants.PORT, (err) => {
	if (err) {
		console.error('Server error: ', err);
	} else {
		console.log(
			`Graphql server is ready at https://${constants.BASE_URL}${constants.GRAPHQL_PATH}`,
		);
	}
});
