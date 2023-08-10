import { ArticleModel } from "~~/server/models/Article.model";

export default defineEventHandler(async (event) => {
	
	// find article
	/// TODO LIMIT
	try {
		return await ArticleModel.find().limit(200).select("slug title language tag author date dateMod views likes modAuthors");
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});