import Post from '../../models/Post';

export default {
	getPosts: async () => {
		const posts = await Post.find({}).sort({ createdAt: -1 });
		return posts;
	},

	createPost: async (_, args) => {
		const post = await Post.create({ ...args });
		return post;
	},

	updatePost: async (_, { _id, ...rest }) => {
		const post = await Post.findOne({ _id });

		if (!post) {
			throw new Error('Not found!');
		}

		Object.entries(rest).forEach(([key, value], i) => {
			post[key] = value;
		});

		return post.save();
	},

	deletePost: async (_, { _id }) => {
		const post = await Post.findOne({ _id });

		if (!post) {
			throw new Error('Not found!');
		}

		post.remove();

		return {
			message: 'Post deleted!',
		};
	},
};
