import mongoose, { Schema } from 'mongoose';

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
};

const UserSchema: Schema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.models.Users || mongoose.model('Users', UserSchema);

export default User;