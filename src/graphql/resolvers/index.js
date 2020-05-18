import GraphQLDate from 'graphql-date';

import PostResolver from './post-resolver';

export default {
	Date: GraphQLDate,
	Query: {
		getPosts: PostResolver.getPosts,
	},
	Mutation: {
		createPost: PostResolver.createPost,
		updatePost: PostResolver.updatePost,
		deletePost: PostResolver.deletePost,
	},
};
