import { Schema, model, ObjectId } from "mongoose";

const ArticleSchema = new Schema({
  slug: { type: String, required: true, minLength: 3, maxLength: 110, unique: true },
  title: { type: String, required: true, minLength: 3, maxLength: 100 },
  language: { type: String, required: true, minLength: 2, maxLength: 2 },
  tag: { type: String, required: true, minLength: 3, maxLength: 30 },
  content: { type: String, required: true, minLength: 800, maxLength: 30000 },
  author: { type: String, required: true, minLength: 4, maxLength: 50 },
  date: { type: Date, default: Date.now },
  dateMod: Date,
  sources: { type: String, minLength: 0, maxLength: 10000 },
  views: Number,
  likes: Number,
  modAuthors: [{ author: { type: String, required: true, minLength: 4, maxLength: 50 }, }],
  comments: [{
    author: { type: String, required: true, minLength: 4, maxLength: 50 },
    content: { type: String, required: true, minLength: 1, maxLength: 10000 },
    date: { type: Date, default: Date.now },
    likes: Number,
    id: ObjectId,
  }],
});

export const ArticleModel = model("Article", ArticleSchema);