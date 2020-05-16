import PostResolver from './post-resolver';

export default {
	Query: {
		getPosts: PostResolver.getPosts,
	},
	Mutation: {
		createPost: PostResolver.createPost,
		updatePost: PostResolver.updatePost,
		deletePost: PostResolver.deletePost,
	},
};
