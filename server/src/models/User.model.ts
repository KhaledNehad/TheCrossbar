import mongoose, { Schema } from 'mongoose';

type TUserModel = mongoose.InferSchemaType<typeof UserSchema>;

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 20
    },

    password: { type: String, required: true, minLength: 6 },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    roles: {
      type: [
        {
          type: String,
          enum: ['user', 'admin', 'moderator', 'leagueAdmin'],
          default: 'user'
        }
      ]
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<TUserModel>('User', UserSchema);
