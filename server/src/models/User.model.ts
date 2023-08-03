import mongoose, { Document, Schema } from 'mongoose';

export type IUser = {
  username: string;
  password: string;
  email: string;
  isAdmin?: boolean;
  roles?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export interface IUserModel extends IUser, Document {}

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

export default mongoose.model<IUserModel>('User', UserSchema);
