import SortBar from '../components/SortBar';
import useFetch from '../utils/useFetch';
import Filter from '../components/Filter';
import { useState } from 'react';
import sortFilterFunc from '../utils/sortFilterFunc';

export default function Enlisted() {
	const { data: bots, loading, error } = useFetch('http://localhost:8001/enlisted');
	const [sortValue, setSortValue] = useState('name');
	const [filterValue, setFilterValue] = useState('All');
	if (loading) {
		return <div className="loading">Loading...</div>;
	}
	if (error) {
		return <div className="error">Fetch error!</div>;
	}
	return (
		<main>
			<h1>Enlisted</h1>
			<div className="utilities">
				<SortBar sortValue={sortValue} setSortValue={setSortValue} />
				<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
			</div>
			<div className="bots">{sortFilterFunc(bots, sortValue, filterValue)}</div>
		</main>
	);
}
