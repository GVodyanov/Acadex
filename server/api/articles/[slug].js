import { ArticleModel } from "~~/server/models/Article.model";

export default defineEventHandler(async (event) => {
	
	// find article
	/// TODO LIMIT
	try {
		return await ArticleModel.findOne({slug: event.context.params.slug});
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});