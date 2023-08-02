import mongoose, { Schema, Document } from 'mongoose';

export interface IPost {
  title: string;
  content: string;
  image?: string;
  author?: string;
  likes?: number;
  league?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPostModel extends IPost, Document {}

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, default: 0 },
    league: { type: Schema.Types.ObjectId, ref: 'League' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IPostModel>('Post', PostSchema);
