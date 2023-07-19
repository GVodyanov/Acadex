import { Schema, model, ObjectId } from "mongoose";

const ArticleSchema = new Schema({
  slug: String,
  title: String,
  language: String,
  tag: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  dateMod: Date,
  sources: String,
  views: Number,
  likes: Number,
  modAuthors: [{ author: String }],
  comments: [{
    author: String,
    content: String,
    date: Date,
    likes: Number,
    id: ObjectId,
  }],
});

export const ArticleModel = model("Article", ArticleSchema);