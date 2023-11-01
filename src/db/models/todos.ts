import { Document, Schema, model } from 'mongoose';

export interface ITodos extends Document {
	title: string;
	description: string;
	isDone: boolean;
	nice: number; // maxNice(+1)
	// createdAt: timestamp (will added by mongoDB)
	// updatedAt: timestamp (will added by mongoDB)
}

const todosSchema = new Schema<ITodos>(
	{
		title: {
			type: String,
			required: true,
			unique: false,
		},
		description: {
			type: String,
			required: false,
			unique: false,
			default: '',
		},
		isDone: {
			type: Boolean,
			required: false,
			unique: false,
			default: false,
		},
		nice: {
			type: Number,
			required: false,
			unique: false,
			default: 0,
		}, // will sort based on nice then -> timeAdded
	},
	{
		// The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema.
		// The type assigned is Date. By default, the names of the fields are createdAt and updatedAt.
		// Customize the field names by setting timestamps.createdAt and timestamps.updatedAt.
		timestamps: true,
	}
);

export const Todos = model<ITodos>('Todo', todosSchema);
