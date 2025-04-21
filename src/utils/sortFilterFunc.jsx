import Bot from "../components/Bot";

export default function sortFilterFunc(bots, sortValue, filterValue) {
	return bots
		.filter((bot) => {
			if (filterValue === 'All') return true;
			return bot.bot_class === filterValue;
		})
		.sort((a, b) => (a[sortValue] < b[sortValue] ? 1 : -1))
		.map((bot, index) => {
			return <Bot index={index + 1} key={bot.id} bot={bot} />;
		});
}
