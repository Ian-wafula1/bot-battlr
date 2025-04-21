import SortBar from '../components/SortBar';
import useFetch from '../utils/useFetch';
import Filter from '../components/Filter';
import { useState } from 'react';
import sortFilterFunc from '../utils/sortFilterFunc';
import BotCard from '../components/BotCard';

export default function Enlisted() {
	const { data: bots, loading, error, forceUpdate } = useFetch('http://localhost:8001/enlisted');
	const [sortValue, setSortValue] = useState('name');
	const [filterValue, setFilterValue] = useState('All');
	const [sidebarBot, setSidebarBot] = useState(null);

	if (loading) {
		return <div className="loading">Loading...</div>;
	}
	if (error) {
		return <div className="error">Fetch error!</div>;
	}
	function updateFunc() {
		setSidebarBot(null);
		forceUpdate();
	}
	return (
		<main>
			<h1>Enlisted</h1>
			<div className="utilities">
				<SortBar sortValue={sortValue} setSortValue={setSortValue} />
				<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
			</div>
			<div className="bots">{sortFilterFunc(bots, sortValue, filterValue, setSidebarBot)}</div>
			{!sidebarBot ? null : (
				<aside>
					<BotCard bot={sidebarBot} updateFunc={updateFunc} />
				</aside>
			)}
		</main>
	);
}
