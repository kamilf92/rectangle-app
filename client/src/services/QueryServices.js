import KeenClient from "../utils/KeenClient";

export const getPageViewsData = async () => {
	return await KeenClient
		.query("count", {
			event_collection: "pageviews",
			group_by: ["url.info.path"],
			timeframe: "this_14_days",
			timezone: "Europe/Paris"
		});
};

export const getActionsData = async () => {
	return await KeenClient
		.query("count", {
			event_collection: "click",
			group_by: ["action.intent"],
			timeframe: "this_14_days",
			timezone: "Europe/Paris"
		});
};