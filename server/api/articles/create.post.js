import {ArticleModel} from "~~/server/models/Article.model";

export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);

	// validate
	let { value, error } = ArticleSchema.validate(body);
	if (error) {
		throw createError({
			message: error.message.replace(/"/g, ""),
			statusCode: 400,
			fatal: false,
		});
	}

	// create author
	try {
		await ArticleModel.create(body);
		return { message: true };
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});