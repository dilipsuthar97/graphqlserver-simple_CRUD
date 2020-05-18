export default {
	PORT: process.env.PORT || 3000,
	BASE_URL: process.env.BASE_URL || `localhost:${process.env.PORT || 3000}`,
	DB_URL: 'mongodb://localhost:27017/posts-db',
	GRAPHQL_PATH: '/graphql',
};
