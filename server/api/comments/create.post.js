import { ArticleModel } from "~~/server/models/Article.model";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	const article = await ArticleModel.findOne({slug: body.slug});

  article.comments.push({
    author: body.author,
    content: body.content,
  });

	try {
    await article.save();
		return { message: true };
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});