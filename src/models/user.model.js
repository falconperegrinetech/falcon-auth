import { model, Schema } from "mongoose";

const UserSchema = new Schema(
	{
		firtName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "user",
		},
		status: {
			type: String,
			default: "active",
		},
		picture: {
			type: String,
			default: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
		},
	},
	{
		timestamps: true,
	}
);

const User = model("User", UserSchema);

export default User;
