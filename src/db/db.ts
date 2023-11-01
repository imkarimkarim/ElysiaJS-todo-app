import mongoose from 'mongoose';

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017';

mongoose.connect(connection);

mongoose.connection
	.on('open', () => console.log('mongoose is connected'))
	.on('close', () => console.log('mongoose is disconnected'))
	.on('error', (error) => console.log(error));

export default mongoose;
