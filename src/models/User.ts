import { Model, model, Schema } from "mongoose"
import { IUser } from "types/models"

const User: Model<IUser> = model(
	"users",
	new Schema(
		{
			email: {
				type: String,
				required: true,
				unique: true,
			},
			password: {
				type: String,
				required: true,
			},
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true
			},
			nickname: {
				type: String,
			},
			avatar: {
				type: String,
			},
			images: [{ type: String }],
			birthDate: {
				type: Date,
			},
			gender: {
				type: String,
			},
			bio: {
				type: String,
			},
			about: {
				type: String,
			},
			preferred: [{ type: String }],
		},
		{ timestamps: true }
	)
)

export default User
