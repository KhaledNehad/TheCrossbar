import mongoose, { Schema } from 'mongoose';

type TPostModel = mongoose.InferSchemaType<typeof PostSchema>;

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

export default mongoose.model<TPostModel>('Post', PostSchema);
