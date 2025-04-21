import Bot from "../components/Bot"
import SortBar from "../components/SortBar"
import useFetch from "../hooks/useFetch"
import Filter from "../components/Filter"

export default function Enlisted() {
    const {data: bots, loading, error} = useFetch('http://localhost:8001/enlisted')
    if (loading) {
        return <div className="loading">Loading...</div>
    }
    if (error) {
        return <div className="error">Fetch error!</div>
    }
	return (
		<main>
			<h1>Enlisted</h1>
			<div className="utilities">
				<SortBar />
				<Filter />
			</div>
			<div className="bots">
				{bots.map((bot, index) => {
					return <Bot index={index + 1} key={bot.id} bot={bot} />;
				})}
			</div>
		</main>
	);
}
