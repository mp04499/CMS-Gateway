import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
	serviceList: [
		{ name: 'auth', url: 'http://localhost:4001' }
	],
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => console.log(`Gateway Started at ${url}`));

