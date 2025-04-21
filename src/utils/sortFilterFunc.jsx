import Bot from "../components/Bot";

export default function sortFilterFunc(bots, sortValue, filterValue, setSidebarBot) {
	return bots
		.filter((bot) => {
			if (filterValue === 'All') return true;
			return bot.bot_class === filterValue;
		})
		.sort((a, b) => (a[sortValue] < b[sortValue] ? 1 : -1))
		.map((bot, index) => {
			return <Bot setSidebarBot={setSidebarBot} index={index + 1} key={bot.id} bot={bot} />;
		});
}
