let i = 0;
let posts = [...Array(20).keys()].map((_, index) => {
	i = index;
	return {
		_id: index,
		title: `Title ${index + 1}`,
		description: `Description ${index + 1}`,
	};
});

export default {
	getPosts: () => posts,
	createPost: (_, args) => {
		const post = {
			_id: ++i,
			...args,
		};
		posts.push(post);
		return post;
	},
	updatePost: (_, { _id, ...rest }) => {
		const post = posts.find((p) => p._id == _id);

		if (!post) {
			throw new Error('Not found!');
		}

		Object.entries(rest).forEach(([key, value], index) => {
			post[key] = value;
		});

		posts = posts.map((p, i) => {
			if (p._id === _id) {
				return post;
			} else {
				return p;
			}
		});

		return post;
	},
	deletePost: (_, { _id }) => {
		console.log(_id);
		const post = posts.find((p) => p._id == _id);

		if (!post) {
			throw new Error('Not found!');
		}

		console.log(post);

		posts.splice(posts.indexOf({ _id }), 1);

		return {
			message: 'Post deleted!',
		};
	},
};
