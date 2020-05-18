import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
	{
		title: String,
		description: String,
	},
	{ timestamps: true },
);

export default mongoose.model('Post', PostSchema);
