import { gql } from 'apollo-server-express';

export default gql`
	scalar Date

	type Post {
		_id: ID!
		title: String!
		description: String
		createdAt: Date
		updatedAt: Date
	}

	type Status {
		message: String
	}

	type Query {
		getPosts: [Post!]
	}

	type Mutation {
		createPost(title: String!, description: String): Post
		updatePost(_id: ID!, title: String, description: String): Post
		deletePost(_id: ID!): Status
	}

	schema {
		query: Query
		mutation: Mutation
	}
`;
