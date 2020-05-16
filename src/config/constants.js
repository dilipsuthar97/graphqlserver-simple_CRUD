export default {
	PORT: process.env.PORT || 3000,
	BASE_URL: process.env.BASE_URL || `localhost:${process.env.PORT || 3000}`,
	GRAPHQL_PATH: '/graphql',
};
