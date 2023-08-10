import { ArticleModel } from "~~/server/models/Article.model";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	const submittedArticle = new ArticleModel(body);

	// create author
	try {
		await submittedArticle.save();
		return { message: true };
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});